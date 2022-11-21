#!/bin/sh

# generate imports for haveno services and types using grpc-web
mkdir -p ./src/protobuf
cd ./src/protobuf || exit 1
protoc -I=../../../haveno/proto/src/main/proto/ ../../../haveno/proto/src/main/proto/*.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ || exit 1

# run typescript compiler
tsc

# copy protobuf models to dist
cp ./grpc_pb.d.ts ../../dist/protobuf/grpc_pb.d.ts || exit 1
cp ./grpc_pb.js ../../dist/protobuf/grpc_pb.js || exit 1
cp ./pb_pb.d.ts ../../dist/protobuf/pb_pb.d.ts || exit 1
cp ./pb_pb.js ../../dist/protobuf/pb_pb.js || exit 1
