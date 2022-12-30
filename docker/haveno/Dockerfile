FROM openjdk:11

ARG GIT_OWNER=haveno-dex
ARG GIT_BRANCH=master

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && adduser --system --group --disabled-password haveno && \
    mkdir -p /home/haveno && \
    chown -R haveno:haveno /home/haveno

USER haveno

RUN set -ex && git clone -b $GIT_BRANCH https://github.com/$GIT_OWNER/haveno.git /home/haveno/haveno

WORKDIR /home/haveno/haveno

RUN set -ex && make skip-tests

ENTRYPOINT [ "./haveno-daemon" ]
