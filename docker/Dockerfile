FROM oven/bun:1 as base

USER bun

WORKDIR /app

COPY package.json package-lock.json /app/

RUN bun install

COPY . /app/

RUN bun create elysia app

EXPOSE 3000

CMD ["bun", "dev"]
