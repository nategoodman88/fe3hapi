FROM postgres:16-alpine

ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}

COPY ./database/*.sql /docker-entrypoint-initdb.d/*.sql