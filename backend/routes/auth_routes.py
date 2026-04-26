from flask import Blueprint, request, jsonify
from services.auth_service import login_user

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    return jsonify(login_user(data))