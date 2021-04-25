# Haveno UI Proof of Concept

A proof of concept to fetch and render data from Haveno's daemon in ReactJS.

This application is a basic [create-react-app](https://github.com/facebook/create-react-app) with typescript using [grpc-web](https://github.com/grpc/grpc-web) and a proxy ([envoy](https://www.envoyproxy.io/)) for Haveno's gRPC daemon.

# How to Run in a Browser

1. [Run a local Haveno test network](https://github.com/woodser/haveno#running-a-local-haveno-test-network) except replace `./bisq-desktop` with `./bisq-daemon` when starting the arbitrator, Alice, and Bob.
2. `git clone https://github.com/haveno-dex/haveno-ui-poc`
3. `./bin/build_protobuf.sh`
4. Start envoy with the config in ./config/envoy.yaml<br>
  Example: `docker run --rm -it -v ~/git/haveno-ui-poc/config/envoy.yaml:/envoy.yaml -p 8080:8080 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.yaml`
5. `npm install`
6. `npm start` to open http://localhost:3000 in a browser
7. Confirm that the Haveno daemon version is displayed (1.3.9).