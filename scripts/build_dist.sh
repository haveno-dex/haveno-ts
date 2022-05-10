#!/bin/sh

# run typescript compiler
tsc

# copy protobuf models to dist
mkdir -p dist/protobuf || exit 1
cp src/protobuf/grpc_pb.d.ts dist/protobuf/grpc_pb.d.ts || exit 1
cp src/protobuf/grpc_pb.js dist/protobuf/grpc_pb.js || exit 1
cp src/protobuf/pb_pb.d.ts dist/protobuf/pb_pb.d.ts || exit 1
cp src/protobuf/pb_pb.js dist/protobuf/pb_pb.js || exit 1