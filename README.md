# Haveno UI Proof of Concept

A proof of concept to fetch and render data from Haveno's daemon in ReactJS.

This application is a lightly modified [create-react-app](https://github.com/facebook/create-react-app) with typescript using [envoy proxy](https://www.envoyproxy.io/) and [grpc-web](https://github.com/grpc/grpc-web) to use Haveno's gRPC API.

## Run in a Browser

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md), running Alice as a daemon with `make alice-daemon`.
2. `git clone https://github.com/haveno-dex/haveno-ui-poc`
4. Start envoy with the config in ./config/envoy.yaml<br>
  Example: `docker run --rm -it -v ~/git/haveno-ui-poc/config/envoy.yaml:/envoy.yaml -p 8080:8080 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.yaml`
5. `npm install`
6. `npm start` to open http://localhost:3000 in a browser
7. Confirm that the Haveno daemon version is displayed (1.6.2)

<p align="center">
    <img src="haveno-ui-poc.png" width="500"/><br>
</p>

## Run Tests

Running the [top-level API tests](./src/HavenoDaemon.test.tsx) is a great way to develop and test Haveno end-to-end.

[`HavenoDaemon`](./src/HavenoDaemon.tsx) provides the interface to the Haveno daemon's gRPC API.

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md), running Alice and Bob as daemons with `make alice-daemon` and `make bob-daemon`.
2. `git clone https://github.com/haveno-dex/haveno-ui-poc`
4. Start envoy with the test config in ./config/envoy.test.yaml.<br>
  Example: `docker run --rm -it -v ~/git/haveno-ui-poc/config/envoy.test.yaml:/envoy.test.yaml -p 8080:8080 -p 8081:8081 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.test.yaml`
5. `npm install`
6. Modify test config as needed in [HavenoDaemon.test.tsx](./src/HavenoDaemon.test.tsx).
7. `npm test`

## How to Update the Protobuf Client

If the protobuf definitions in haveno-dex/haveno are updated, the typescript imports must be regenerated:

1. Copy grpc.proto and pb.proto from Haveno's [protobuf definitions](https://github.com/haveno-dex/haveno/tree/master/proto/src/main/proto) to ./config.
2. Install protobuf for your system, e.g. on mac: `brew install protobuf`
3. `./bin/build_protobuf.sh`