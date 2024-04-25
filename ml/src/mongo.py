from pymongo import MongoClient
import json
from dotenv import load_dotenv
import os

load_dotenv() 

database_uri = os.getenv('DATABASE_URI')

def get_database():
    CONNECTION_STRING = database_uri
    client = MongoClient(CONNECTION_STRING)
    return client['test']

def get_movies_data(db):
    movies_collection = db["movies"]
    query_results = list(movies_collection.find({}))
    return query_results
