from jinja2 import Environment
from jinja2 import FileSystemLoader as fs

s = """
"""
env = Environment(loader=fs("."))
t = env.get_template("base.html")
print(t.render(script=s))

with open("test.html", "w") as f:
    f.write(t.render(script=s))
