#!/usr/bin/env python

import json
from os import path
from jinja2 import Environment
from jinja2 import FileSystemLoader as fs

from stats import combined_data
from config import BASE_HTML, BASE_DIR


def render(
    data=combined_data(),
    index_html_path=path.join(BASE_DIR, "index.html"),
    *args,
    **kwargs
):
    env = Environment(loader=fs(BASE_DIR))
    template = env.get_template("base.html")
    html = template.render(data)
    with open(index_html_path, "w") as f:
        f.write(html)
    return


if __name__ == "__main__":
    render()
