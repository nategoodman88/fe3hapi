import os
import psycopg2
from dotenv import load_dotenv


def db_connect():
    load_dotenv()

    host = os.getenv('DB_HOST')
    port = os.getenv('DB_PORT')
    database = os.getenv('DB_DATABASE')
    user = os.getenv('DB_USER')
    password = os.getenv('DB_PASSWORD')

    conn = psycopg2.connect(
        host=host,
        port = port,
        database=database,
        user=user,
        password=password
    )

    return conn

conn = db_connect()