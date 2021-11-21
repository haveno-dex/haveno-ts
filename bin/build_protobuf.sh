#!/bin/sh

# generate imports for haveno services and types using grpc-web
mkdir -p ./src/protobuf
cd ./src/protobuf || exit 1
protoc -I=../../../haveno/proto/src/main/proto/ ../../../haveno/proto/src/main/proto/*.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ || exit 1