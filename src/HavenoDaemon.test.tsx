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
  expect(balances.getUnlockedbalance()); // TODO: correct camelcase in grpc
  expect(balances.getLockedbalance());
  expect(balances.getReservedofferbalance());
  expect(balances.getReservedtradebalance());
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

function testPaymentAccount(paymentAccount: PaymentAccount) {
  expect(paymentAccount.getId()).toHaveLength;
  // TODO: test rest of offer
}

function testOffer(offer: OfferInfo) {
  expect(offer.getId()).toHaveLength;
  // TODO: test rest of offer
}