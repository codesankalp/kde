#!/usr/bin/env python

import json

from jinja2 import Environment
from jinja2 import FileSystemLoader as fs

from stats import combined_data


def render_dev(*args, **kwargs):
    data = combined_data()
    # with open("stats.json", "r") as f:
    #     data = json.loads(f.read())
    env = Environment(loader=fs("."))
    t = env.get_template("base.html")
    a = t.render(data)
    with open("index.html", "w") as f:
        f.write(a)
    return


if __name__ == "__main__":
    render_test()
