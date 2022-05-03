# Haveno UI Proof of Concept

A proof of concept to fetch and render data from Haveno's daemon in ReactJS.

This application is a lightly modified [create-react-app](https://github.com/facebook/create-react-app) with typescript using [envoy proxy](https://www.envoyproxy.io/) and [grpc-web](https://github.com/grpc/grpc-web) to use Haveno's gRPC API.

## Run in a Browser

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md), running Alice as a daemon with `make alice-daemon`.
2. Clone this project to the same parent directory as the haveno project: `git clone https://github.com/haveno-dex/haveno-ts`
3. In a new terminal, start envoy with the config in haveno-ts/config/envoy.yaml (change absolute path for your system): `docker run --rm --add-host host.docker.internal:host-gateway -it -v ~/git/haveno-ts/config/envoy.yaml:/envoy.yaml -p 8080:8080 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.yaml`
4. Install protobuf compiler v3.19.1 or later for your system:<br>
    mac: `brew install protobuf`<br>
    linux: `apt install protobuf-compiler`
    NOTE: You may need to upgrade to v3.19.1 manually if your package manager installs an older version.
5.  Download `protoc-gen-grpc-web` plugin and make executable as [shown here](https://github.com/grpc/grpc-web#code-generator-plugin).
6. `cd haveno-ts`
7. `npm install`
8. `npm start` to open http://localhost:3000 in a browser
9. Confirm that the Haveno daemon version is displayed (1.6.2).

<p align="center">
    <img src="haveno-ui-poc.png" width="500"/><br>
</p>

## Run Tests

Running the [API tests](./src/haveno.test.ts) is the best way to develop and test Haveno end-to-end.

[`haveno.ts`](./src/haveno.ts) provides the interface to Haveno's backend daemon.

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md) and then shut down the arbitrator, Alice, and Bob or run them as daemons, e.g. `make alice-daemon`. You may omit the arbitrator registration steps since it is done automatically in the tests.
2. Clone this project to the same parent directory as the haveno project: `git clone https://github.com/haveno-dex/haveno-ts`
3. In a new terminal, start envoy with the config in haveno-ts/config/envoy.test.yaml (change absolute path for your system): `docker run --rm --add-host host.docker.internal:host-gateway -it -v ~/git/haveno-ts/config/envoy.test.yaml:/envoy.test.yaml -p 8079:8079 -p 8080:8080 -p 8081:8081 -p 8082:8082 -p 8083:8083 -p 8084:8084 -p 8085:8085 -p 8086:8086 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.test.yaml`
4. In a new terminal, start the funding wallet. This wallet will be automatically funded in order to fund Alice and Bob during the tests.<br>For example: `cd ~/git/haveno && make funding-wallet`.
5. Install protobuf compiler v3.19.1 or later for your system:<br>
    mac: `brew install protobuf`<br>
    linux: `apt install protobuf-compiler`
    NOTE: You may need to upgrade to v3.19.1 manually if your package manager installs an older version.
6. Download `protoc-gen-grpc-web` plugin and make executable as [shown here](https://github.com/grpc/grpc-web#code-generator-plugin).
7. `cd haveno-ts`
8. `npm install`
9. `npm test` to run all tests or `npm run test -- -t 'my test'` to run tests by name.