import os
import platform

from dotenv import load_dotenv
from flask import Flask, render_template

load_dotenv()

app = Flask(__name__)

my_system = platform.uname()
print(f"System: {my_system.system}")
print(f"Node Name: {my_system.node}")
print(f"Release: {my_system.release}")
print(f"Version: {my_system.version}")
print(f"Machine: {my_system.machine}")
print(f"Processor: {my_system.processor}")


@app.route("/")
def render_static():
    return render_template("index.html", input_from_python=os.getenv("API_KEY"))


@app.route("/success")
def success():
    return render_template("success.html")


@app.route("/canceled")
def canceled():
    return render_template("canceled.html")


if __name__ == "__main__":
    app.run(debug=True)
