import {HavenoDaemon} from "./HavenoDaemon";
import {XmrBalanceInfo, OfferInfo} from './protobuf/grpc_pb';
import {PaymentAccount} from './protobuf/pb_pb';

const HAVENO_UI_VERSION = "1.6.2";
const HAVENO_DAEMON_URL = "http://localhost:8080";
const HAVENO_DAEMON_PASSWORD = "apitest";

const daemon = new HavenoDaemon(HAVENO_DAEMON_URL, HAVENO_DAEMON_PASSWORD);

test("Can get the version", async () => {
  let version = await daemon.getVersion();
  expect(version).toEqual(HAVENO_UI_VERSION);
});

test("Can get the user's balances", async () => {
  let balances: XmrBalanceInfo = await daemon.getBalances();
  expect(balances.getUnlockedBalance());
  expect(balances.getLockedBalance());
  expect(balances.getReservedOfferBalance());
  expect(balances.getReservedTradeBalance());
});

test("Can get offers", async () => {
  let offers: OfferInfo[] = await daemon.getOffers("BUY");
  for (let offer of offers) {
    testOffer(offer);
  }
});

test("Can get the user's created offers", async () => {
  let offers: OfferInfo[] = await daemon.getMyOffers("SELL");
  for (let offer of offers) {
    testOffer(offer);
  }
});

test("Can get payment accounts", async () => {
  let paymentAccounts: PaymentAccount[] = await daemon.getPaymentAccounts();
  for (let paymentAccount of paymentAccounts) {
    testPaymentAccount(paymentAccount);
  }
});

test("Can create crypto payment account", async () => {
  let ethPaymentAccount: PaymentAccount = await daemon.createCryptoPaymentAccount(
        "my eth account",
        "eth",
        "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f",
        true);
   testPaymentAccount(ethPaymentAccount);
});

test("Can post and remove an offer", async () => {
    
  // test requires ethereum payment account
  let ethPaymentAccount: PaymentAccount | undefined;
  for (let paymentAccount of await daemon.getPaymentAccounts()) {
    if (paymentAccount.getSelectedTradeCurrency()?.getCode() === "ETH") {
      ethPaymentAccount = paymentAccount;
      break;
    }
  }
  if (!ethPaymentAccount) throw new Error("Test requires ethereum payment account to post offer");
  
  // get unlocked balance before reserving offer
  let unlockedBalanceBefore: bigint = BigInt((await daemon.getBalances()).getUnlockedBalance());
  
  // post offer
  let amount: bigint = BigInt("250000000000");
  let minAmount: bigint = BigInt("150000000000");
  let price: number = 12.378981; // TODO: price is optional? price string gets converted to long?
  let useMarketBasedPrice: boolean = true;
  let marketPriceMargin: number = 0.02; // within 2%
  let buyerSecurityDeposit: number = 0.15; // 15%
  let triggerPrice: number = 12; // TODO: fails if there is decimal, gets converted to long?
  let paymentAccountId: string = ethPaymentAccount.getId();
  let offer: OfferInfo = await daemon.postOffer("eth",
        "buy", // buy xmr for eth
        price,
        useMarketBasedPrice,
        marketPriceMargin,
        amount,
        minAmount,
        buyerSecurityDeposit,
        paymentAccountId,
        triggerPrice);
  testOffer(offer);

  // unlocked balance has decreased
  let unlockedBalanceAfter: bigint = BigInt((await daemon.getBalances()).getUnlockedBalance());
  expect(unlockedBalanceAfter).toBeLessThan(unlockedBalanceBefore);
  
  // offer is included in my offers only
  if (!getOffer(await daemon.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  if (getOffer(await daemon.getOffers("buy"), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");
  
  // cancel the offer
  await daemon.cancelOffer(offer.getId());
  
  // offer is removed from my offers
  if (getOffer(await daemon.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
  
  // reserved balance restored
  expect(unlockedBalanceBefore).toEqual(BigInt((await daemon.getBalances()).getUnlockedBalance()));
});

// ------------------------------- HELPERS ------------------------------------

function getOffer(offers: OfferInfo[], id: string): OfferInfo | undefined {
  return offers.find(offer => offer.getId() === id);
}

function testPaymentAccount(paymentAccount: PaymentAccount) {
  expect(paymentAccount.getId()).toHaveLength;
  // TODO: test rest of offer
}

function testOffer(offer: OfferInfo) {
  expect(offer.getId()).toHaveLength;
  // TODO: test rest of offer
}