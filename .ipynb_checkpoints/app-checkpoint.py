import os
import requests
import datetime

from sodapy import Socrata
from flask import Flask, session, render_template, request, redirect
from flask_session import Session

app = Flask(__name__)

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Routes to blank map
@app.route("/")
def index():
    return render_template("index.html", permits = "", date_range = "")
