from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")
print("Mongo URI:", mongo_uri)

client = MongoClient(mongo_uri)

db = client["institute_db"]