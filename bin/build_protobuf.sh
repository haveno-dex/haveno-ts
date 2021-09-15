#!/bin/sh

# generate imports for haveno services and types using grpc-web
cd ./config || exit 1
protoc -I=./ *.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ || exit 1
cd ../

# move imports to src folder
mv ./config/grpc_pb.d.ts ./src/protobuf || exit 1
mv ./config/grpc_pb.js ./src/protobuf || exit 1
mv ./config/pb_pb.d.ts ./src/protobuf || exit 1
mv ./config/pb_pb.js ./src/protobuf || exit 1
mv ./config/GrpcServiceClientPb.ts ./src/protobuf || exit 1