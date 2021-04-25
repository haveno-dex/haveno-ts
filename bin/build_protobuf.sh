#!/bin/sh

cd ./config || exit 1
protoc -I=./ *.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./ || exit 1
cd ../
mv ./config/grpc_grpc_web_pb.js ./src || exit 1
mv ./config/grpc_pb.js ./src || exit 1
mv ./config/pb_pb.js ./src || exit 1