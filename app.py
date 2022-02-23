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
def map():
    return render_template("map.html", permits = "", date_range = "")

# Routes to search results
@app.route("/search", methods = ["POST", "GET"])
def search():

    range = ""
    data = ""

    # If receiveing data
    if request.method == "POST":
        # Get date range from form
        range = request.form.get("datefilter")

        # Split range to start and end
        dates = range.split("-")
        start = dates[0].strip()
        end = dates[1].strip()

        # Format dates for API use
        start_format = "'"+str(datetime.datetime.strptime(start, '%m/%d/%Y').date())+"'"
        end_format = "'"+str(datetime.datetime.strptime(end, '%m/%d/%Y').date())+"'"

        # Retreive from API
        results = requests.get("https://data.calgary.ca/resource/c2es-76ed.geojson", params={"$where": "issueddate > "+start_format+" and issueddate < "+end_format})

        if results.status_code==200:
            data=results.json()
        else:
            data=""
            
    return render_template("map.html", permits = data, date_range = range )
