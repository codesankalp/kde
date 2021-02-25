import json
import os

def youtube_stats(file_path:str):
	file_name = os.path.basename(file_path)
	if file_name == 'channel_stats.json':
		return channel_stats(file_path)


def channel_stats(file_path):
	with open(file_path) as f:
		result = json.loads(f.read())
	data = []
	labels = []
	for k, v in result.items():
		labels.append(k)
		data.append(v)
	print(labels, data)
	series = [{'data': data}]
	return series, labels