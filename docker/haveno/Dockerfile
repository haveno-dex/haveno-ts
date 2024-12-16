FROM openjdk:21-jdk-bullseye

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && adduser --system --group --disabled-password haveno && \
    mkdir -p /home/haveno && \
    chown -R haveno:haveno /home/haveno

USER haveno

RUN set -ex && git clone https://github.com/haveno-dex/haveno.git /home/haveno/haveno

WORKDIR /home/haveno/haveno

RUN set -ex && git fetch origin && git checkout origin/master

RUN set -ex && make skip-tests

ENTRYPOINT [ "./haveno-daemon" ]
