FROM gradle:jdk11

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && adduser --system --group --disabled-password pricenode && \
    mkdir -p /home/pricenode && \
    chown -R pricenode:pricenode /home/pricenode

USER pricenode

RUN set -ex && git clone --recursive https://github.com/woodser/haveno-pricenode.git /home/pricenode

WORKDIR /home/pricenode

RUN ./gradlew clean build -x test

ENTRYPOINT [ "./haveno-pricenode" ]
