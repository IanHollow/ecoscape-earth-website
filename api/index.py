from flask import Flask, request, jsonify
from data import calculateData

app = Flask(__name__)

@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({"data": calculateData()})
    

if __name__ == "__main__":
    app.run(debug=True)