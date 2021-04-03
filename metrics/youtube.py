import json
from os import path


def youtube_stats(file_path: str):
    """
    Checks for file name and call respective functions
    """
    file_name = path.basename(file_path)
    if file_name == "channel_stats.json":
        return channel_stats(file_path)
    elif file_name == "content_stats.json":
        return content_stats(file_path)


def channel_stats(file_path: str):
    """
    Parses youtube channel stats
    """
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        if k == "hiddenSubscriberCount":
            continue
        data[f"youtube_channel_{k}"] = v
    return data


def content_stats(file_path: str):
    """
    Parses youtube video content stats
    """
    orig_data = get_data(file_path)
    id_data = []
    views_data = []
    likes_data = []
    dislikes_data = []
    comments_data = []
    favorite_data = []
    for video in orig_data:
        id_data.append(video.get("id", "0"))
        views_data.append(video.get("viewCount", "0"))
        likes_data.append(video.get("likeCount", "0"))
        dislikes_data.append(video.get("dislikeCount", "0"))
        comments_data.append(video.get("commentCount", "0"))
        favorite_data.append(video.get("favoriteCount", "0"))
    return {
        "youtube_video_id": id_data,
        "youtube_video_views": views_data,
        "youtube_video_likes": likes_data,
        "youtube_video_dislikes": dislikes_data,
        "youtube_video_comments": comments_data,
        "youtube_video_favorites": favorite_data,
    }


def get_data(file_path: str):
    """
    function to convert json file to python dict
    """
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
