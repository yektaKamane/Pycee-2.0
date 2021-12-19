from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

from main import main
@app.route("/", methods=['POST'])
def home():
    code = str(request.json["code"])
    error = str(request.json["error"])
    result = main(error=error, code=code) 
    return result

if __name__ == '__main__':
    app.run()