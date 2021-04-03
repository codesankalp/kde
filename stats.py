import json
import os

from jinja2 import Environment
from jinja2 import FileSystemLoader as fs

from config import (
    FACEBOOK_DIR_PATH,
    INSTAGRAM_DIR_PATH,
    LINKEDIN_DIR_PATH,
    MASTODON_DIR_PATH,
    POPCONS_DIR_PATH,
    REDDIT_DIR_PATH,
    TWITTER_DIR_PATH,
    YT_DIR_PATH,
)
from metrics.facebook import facebook_stats
from metrics.instagram import instagram_stats
from metrics.linkedin import linkedin_stats
from metrics.mastodon import mastodon_stats
from metrics.popcons import popcons_stats
from metrics.reddit import reddit_stats
from metrics.twitter import twitter_stats
from metrics.youtube import youtube_stats


def generate_youtube_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        channel_stats = youtube_stats(os.path.join(file_path, f_name))
        data = {**data, **channel_stats}
    return data


def generate_twitter_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = twitter_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_mastodon_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = mastodon_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_facebook_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = facebook_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_instagram_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = instagram_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_reddit_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = reddit_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_popcon_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = popcons_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_linkedin_stats(file_path: str):
    data = {}
    for f_name in os.listdir(file_path):
        stats = linkedin_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def combined_data(
    YT_DIR_PATH=YT_DIR_PATH,
    TWITTER_DIR_PATH=TWITTER_DIR_PATH,
    MASTODON_DIR_PATH=MASTODON_DIR_PATH,
    FACEBOOK_DIR_PATH=FACEBOOK_DIR_PATH,
    INSTAGRAM_DIR_PATH=INSTAGRAM_DIR_PATH,
    REDDIT_DIR_PATH=REDDIT_DIR_PATH,
    POPCONS_DIR_PATH=POPCONS_DIR_PATH,
    LINKEDIN_DIR_PATH=LINKEDIN_DIR_PATH,
):
    """
    Returns combined data.
    If DEBUG=True then it will use path defined in config.py
    Else it will use path Provided from manage.py.
    """
    data = {}
    data = {**data, **generate_youtube_stats(YT_DIR_PATH)}

    data = {**data, **generate_twitter_stats(TWITTER_DIR_PATH)}

    data = {**data, **generate_mastodon_stats(MASTODON_DIR_PATH)}

    data = {**data, **generate_facebook_stats(FACEBOOK_DIR_PATH)}

    data = {**data, **generate_instagram_stats(INSTAGRAM_DIR_PATH)}

    data = {**data, **generate_reddit_stats(REDDIT_DIR_PATH)}

    data = {**data, **generate_popcon_stats(POPCONS_DIR_PATH)}

    data = {**data, **generate_linkedin_stats(LINKEDIN_DIR_PATH)}

    return data


if __name__ == "__main__":
    data = combined_data()
    with open("stats.json", "w") as f:
        f.write(json.dumps(data, indent=4))
