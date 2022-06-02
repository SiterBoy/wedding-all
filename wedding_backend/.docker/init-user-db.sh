#!/bin/bash
# .docker/init-user-db.sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER siter;
    CREATE DATABASE wedding;
    GRANT ALL PRIVILEGES ON DATABASE wedding TO siter;
EOSQL
