from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)

from main import main
@app.route("/", methods=['GET', 'POST'])
def home():
    code = str(request.json["code"])
    error = str(request.json["error"])
    result = main(error=error, code=code) 
    return 

