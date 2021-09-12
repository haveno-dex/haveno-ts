import {HavenoDaemon, HavenoBalances, HavenoOffer} from "./HavenoDaemon";

const HAVENO_UI_VERSION = "1.6.2";
const HAVENO_DAEMON_URL = "http://localhost:8080";
const HAVENO_DAEMON_PASSWORD = "apitest";

const daemon = new HavenoDaemon(HAVENO_DAEMON_URL, HAVENO_DAEMON_PASSWORD);

test("Can get the version", async () => {
  let version = await daemon.getVersion();
  expect(version).toEqual(HAVENO_UI_VERSION);
});

test("Can get the user's balances", async () => {
  let balances: HavenoBalances = await daemon.getBalances();
  expect(balances.unlockedBalance);
  expect(balances.lockedBalance);
  expect(balances.reservedOfferBalance);
  expect(balances.reservedTradeBalance);
});

test("Can get offers", async() => {
  let offers: HavenoOffer[] = await daemon.getOffers("SELL", "XMR");
  for (let offer of offers) {
    testOffer(offer);
  }
});

function testOffer(offer: HavenoOffer) {
  expect(offer.id).toHaveLength;
  // TODO: test rest of offer
}