import os
import psycopg2
from dotenv import load_dotenv


def db_connect():
    load_dotenv()

    database = os.getenv('POSTGRES_DB')
    user = os.getenv('POSTGRES_USER')
    password = os.getenv('POSTGRES_PASSWORD')

    conn = psycopg2.connect(
        host="postgres",
        database=database,
        user=user,
        password=password
    )

    return conn

conn = db_connect()