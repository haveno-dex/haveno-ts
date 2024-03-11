FROM gradle:jdk21

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && adduser --system --group --disabled-password pricenode && \
    mkdir -p /home/pricenode && \
    chown -R pricenode:pricenode /home/pricenode

USER pricenode

RUN set -ex && git clone --recursive https://github.com/haveno-dex/haveno-pricenode.git /home/pricenode

WORKDIR /home/pricenode

RUN set -ex && git fetch origin && git checkout origin/main

RUN ./gradlew clean build -x test

ENTRYPOINT [ "./haveno-pricenode" ]
