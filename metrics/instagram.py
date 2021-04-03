import json
from os import path


def instagram_stats(file_path: str):
    """
    Checks for file name and call respective functions
    """
    file_name = path.basename(file_path)
    if file_name == "instagram_stats.json":
        return instagram_combined_stats(file_path)
    elif file_name == "instagram_posts_stats.json":
        return instagram_posts_stats(file_path)


def instagram_combined_stats(file_path: str):
    """
    function to parse instagram stats at present.
    """
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        k = "_".join(k.split(" "))
        k = "_".join(k.split("/"))
        data[f"instagram_{k}"] = v
    return data


def instagram_posts_stats(file_path: str):
    """
    function to parse instagram posts stats
    """
    orig_data = get_data(file_path)
    comments_count = []
    like_count = []
    permalink = []
    id = []
    for post in orig_data:
        id.append(post.get("id", 0))
        comments_count.append(post.get("comments_count", 0))
        like_count.append(post.get("like_count", 0))
        permalink.append(post.get("permalink", ""))

    return {
        "instagram_id": id,
        "instagram_comments_count": comments_count,
        "instagram_like_count": like_count,
        "instagram_permalink": permalink,
    }


def get_data(file_path: str):
    """
    function to convert json file to python dict
    """
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
