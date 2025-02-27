#!/bin/bash

export UID

mkdir -p node_modules

docker compose run --rm --entrypoint=bun bun $@
