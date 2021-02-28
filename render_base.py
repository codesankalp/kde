import json
import os

from jinja2 import Environment
from jinja2 import FileSystemLoader as fs

with open("stats.json", "r") as f:
    data = json.loads(f.read())

env = Environment(loader=fs("."))
t = env.get_template("base.html")
a = t.render(data)
with open("test.html", "w") as f:
    f.write(a)