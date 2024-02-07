from flask import Flask, request, send_from_directory

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