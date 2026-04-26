from config.db import db

users_collection = db["users"]

def login_user(data):
    try:
        username = data.get("user")
        password = data.get("password")

        print("Received:", username, password)

        user = users_collection.find_one({
            "user": username,
            "password": password
        })

        print("Mongo Result:", user)

        if user:
            return {
                "message": "Login successful",
                "name": user.get("name"),
                "role": user.get("role")
            }

        return {
            "message": "Invalid credentials"
        }

    except Exception as e:
        print("Login Error:", str(e))
        return {
            "message": "Server Error"
        }