FROM oven/bun:1 as base

WORKDIR /home/bun/app

# default bun UID is 1000
ARG UID=1000

USER root

RUN find /home/bun -ignore_readdir_race -group bun -exec chgrp -h $UID {} \; \
    && find / -ignore_readdir_race -user bun -exec chown -h $UID {} \; \
    && usermod -u $UID bun \
    && groupmod -g $UID bun

USER bun

EXPOSE 3000

CMD ["bun", "dev"]