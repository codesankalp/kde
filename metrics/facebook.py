import json
from os import path


def facebook_stats(file_path: str):
    """
    Checks for file name and call respective functions
    """
    file_name = path.basename(file_path)
    if file_name == "facebook_stats.json":
        return facebook_combined_stats(file_path)
    elif file_name == "facebook_posts_stats.json":
        return facebook_posts_stats(file_path)


def facebook_combined_stats(file_path: str):
    """
    function to parse facebook combined stats i.e. present.
    """
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        data[f"facebook_{k}"] = v
    return data


def facebook_posts_stats(file_path: str):
    """
    function to parse facebook posts stats.
    """
    orig_data = get_data(file_path)
    post_engaged_users = []
    created_time = []
    post_id = []
    post_negative_feedback = []
    negative_feedback_by_type = []
    post_clicks_unique = []
    post_clicks = []
    post_engaged_fan = []
    post_impressions = []
    post_impressions_unique = []
    post_impressions_fan = []
    post_impressions_organic = []
    comments = []
    for dic in orig_data:
        post_engaged_users.append(dic.get("post_engaged_users", 0))
        created_time.append(dic.get("created_time", 0))
        post_id.append(dic.get("id", 0))
        post_negative_feedback.append(dic.get("post_negative_feedback", 0))
        negative_feedback_by_type.append(
            dic.get("post_negative_feedback_by_type", 0)
        )
        post_clicks_unique.append(dic.get("post_clicks_unique", 0))
        post_clicks.append(dic.get("post_clicks", 0))
        post_engaged_fan.append(dic.get("post_engaged_fan", 0))
        post_impressions.append(dic.get("post_impressions", 0))
        post_impressions_unique.append(dic.get("post_impressions_unique", 0))
        post_impressions_fan.append(dic.get("post_impressions_fan", 0))
        post_impressions_organic.append(dic.get("post_impressions_organic", 0))
        comments.append(len(dic.get("comments", [])))
    return {
        "facebook_post_engaged_users": post_engaged_users,
        "facebook_created_time": created_time,
        "facebook_post_id": post_id,
        "facebook_post_negative_feedback": post_negative_feedback,
        "facebook_post_negative_feedback_by_type": negative_feedback_by_type,
        "facebook_post_clicks_unique": post_clicks_unique,
        "facebook_post_clicks": post_clicks,
        "facebook_post_engaged_fan": post_engaged_fan,
        "facebook_post_impressions": post_impressions,
        "facebook_post_impressions_unique": post_impressions_unique,
        "facebook_post_impressions_fan": post_impressions_fan,
        "facebook_post_impressions_organic": post_impressions_organic,
        "facebook_comments": comments,
    }


def get_data(file_path: str):
    """
    function to convert json file to python dict
    """
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
