# Fire Emblem Three Houses API

A Python Flask API to interact with a PostgreSQL database containing information from Intelligent Systems' Fire Emblem Three Houses

All rights to Intelligent Systems and Nintendo.

## Routes

/characters: Return all characters in the characters table of the database
....

## Local Development

The PostgreSQL database is not included in this repo, but will be easy to recreate if desired. Once there is a database to connect to:

This application runs in a Docker container for easy development:

```bash
cd fe3hapi
./start
```
