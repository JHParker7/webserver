from flask import Flask, request, send_from_directory
from pprint import pprint
import time
import json


app = Flask(__name__)

@app.get("/",)
def index():
    return send_from_directory("app/build", 'index.html')

@app.get("/manifest.json")
def manifest():
    return send_from_directory("app/build","manifest.json")

@app.get("/static/css/<path>")
def webcss(path):
    return send_from_directory("app/build/static/css/"+"/".join(path.split("/")[:-1]),path.split("/")[-1])

@app.get("/static/js/<path>")
def webjs(path):
    return send_from_directory("app/build/static/js/"+"/".join(path.split("/")[:-1]),path.split("/")[-1])

@app.get("/static/media/<path>")
def webmedia(path):
    return send_from_directory("app/build/static/media/"+"/".join(path.split("/")[:-1]),path.split("/")[-1])


@app.route("/save_map",methods=["POST"])
def save_map():
    data=request.json["data"]
    data=["|".join([str(x) for x in data[x]]) for x in data]
    open("/home/jack/Projects/AI/Maze_AI/maps/"+str(time.time())+".txt","tw+").write("<".join(data))
    return "saved"

if __name__ == '__main__':  
   app.run()
