import os

from flask import (
    Flask,
    send_from_directory,
)
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config.from_object("project.config.Config")


@app.route("/flask/<path:filename>")
def staticfiles(filename):
    return send_from_directory(app.config["WWW_FOLDER"], filename)
