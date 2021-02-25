import json
from config import YT_DIR_PATH
import os
from metrics.youtube import youtube_stats
from jinja2 import Environment, FileSystemLoader as fs

print(YT_DIR_PATH)
for f_name in os.listdir(YT_DIR_PATH)[:1]:
	series, labels = youtube_stats(os.path.join(YT_DIR_PATH, f_name))
	series = json.dumps(series)
	labels = json.dumps(labels)
	env = Environment(loader=fs('.'))
	t=env.get_template('base.html')
	# print(t.render(series=series, labels=labels))
	with open('test.html', 'w') as f:
		f.write(t.render(series=series, labels=labels))
