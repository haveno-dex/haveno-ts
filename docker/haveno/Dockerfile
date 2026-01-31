FROM eclipse-temurin:21

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && \
    useradd -m -d /home/haveno -s /bin/bash haveno

USER haveno

RUN set -ex && git clone https://github.com/woodser/haveno.git /home/haveno/haveno

WORKDIR /home/haveno/haveno

RUN set -ex && git fetch origin && git checkout origin/ci

RUN set -ex && make skip-tests

ENTRYPOINT [ "./haveno-daemon" ]
