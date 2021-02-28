import json
from os import path


def linkedin_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "linkedin__weekly_page_stats.json":
        return linkedin_weekly_page_stats(file_path)
    elif file_name == "linkedin_followers_stats.json":
        return linkedin_followers_stats(file_path)
    elif file_name == "linkedin_page_stats.json":
        return linkedin_page_stats(file_path)
    elif file_name == "linkedin_stats.json":
        return linkedin_combined_stats(file_path)
    elif file_name == "linkedin_weekly_followers.json":
        return linkedin_weekly_followers(file_path)


def linkedin_weekly_page_stats(file_path: str):
    # orig_data = get_data(file_path)
    return {}


def linkedin_followers_stats(file_path: str):
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        data[f"linkedin_{k}"] = v
    return data


def linkedin_page_stats(file_path: str):
    # orig_data = get_data(file_path)
    return {}


def linkedin_combined_stats(file_path: str):
    # orig_data = get_data(file_path)
    return {}


def linkedin_weekly_followers(file_path: str):
    orig_data = get_data(file_path)
    for dic in orig_data:
        print(dic)
    return {}


def reformat_json(file_path: str):
    orig_data = get_data(file_path)
    with open(file_path, "w") as f:
        f.write(json.dumps(orig_data, indent=4))


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
