import json
from os import path


def mastodon_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "mastodon_stats.json":
        return mastodon_combined_stats(file_path)
    elif file_name == "mastodon_posts.json":
        return mastodon_posts_stats(file_path)


def mastodon_combined_stats(file_path: str):
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        data[f"mastodon_{k}"] = v
    return data


def mastodon_posts_stats(file_path: str):
    orig_data = get_data(file_path)
    mastodon_posts_url = []
    mastodon_posts_id = []
    mastodon_posts_replies_count = []
    mastodon_posts_reblogs_count = []
    mastodon_posts_favourites_count = []
    for dic in orig_data:
        mastodon_posts_id.append(dic.get("id", "0"))
        mastodon_posts_url.append(dic.get("url", None))
        mastodon_posts_replies_count.append(dic.get("replies_count", "0"))
        mastodon_posts_reblogs_count.append(dic.get("reblogs_count", "0"))
        mastodon_posts_favourites_count.append(
            dic.get("favourites_count", "0")
        )

    return {
        "mastodon_posts_id": mastodon_posts_id,
        "mastodon_posts_url": mastodon_posts_url,
        "mastodon_posts_replies_count": mastodon_posts_replies_count,
        "mastodon_posts_reblogs_count": mastodon_posts_reblogs_count,
        "mastodon_posts_favourites_count": mastodon_posts_favourites_count,
    }


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
