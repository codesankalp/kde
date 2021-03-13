import json
import os

from jinja2 import Environment
from jinja2 import FileSystemLoader as fs


def render_test(*args, **kwargs):
    print("hele")
    # print(args, kwargs)
    with open("stats.json", "r") as f:
        data = json.loads(f.read())

    env = Environment(loader=fs("."))
    t = env.get_template("base.html")
    a = t.render(data)
    with open("test.html", "w") as f:
        f.write(a)
    return


if __name__ == "__main__":
    render_test()