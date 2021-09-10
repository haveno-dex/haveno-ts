import {HavenoDaemon, BalancesModel} from "./HavenoDaemon";

const HAVENO_UI_VERSION = "1.6.2";
const HAVENO_DAEMON_URL = "http://localhost:8080";
const HAVENO_DAEMON_USERNAME = undefined;
const HAVENO_DAEMON_PASSWORD = "apitest";

const daemon = new HavenoDaemon(HAVENO_DAEMON_URL, HAVENO_DAEMON_USERNAME, HAVENO_DAEMON_PASSWORD);

test("Can get the version", async () => {
  let version = await daemon.getVersion();
  expect(version).toEqual(HAVENO_UI_VERSION);
});

test("Can get the user's balances", async () => {
  let balances: BalancesModel = await daemon.getBalances();
  expect(balances.unlockedBalance);
  expect(balances.lockedBalance);
  expect(balances.reservedBalance); // TODO: remove this
  expect(balances.totalBalance); // TODO: remove this
  //expect(balances.reservedOfferBalance); // TODO
  //expect(balances.reservedMultisigBalance); // TODO
});