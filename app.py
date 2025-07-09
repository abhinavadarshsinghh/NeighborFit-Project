from flask import Flask, request, jsonify
from flask_cors import CORS
from match_algorithm import find_best_match
import json

app = Flask(__name__)
CORS(app)

with open("data/neighborhoods.json") as f:
    neighborhoods = json.load(f)

@app.route("/match", methods=["POST"])
def match():
    user_data = request.get_json()
    result = find_best_match(user_data, neighborhoods)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
