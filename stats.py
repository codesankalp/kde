import json
import os

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
from metrics import (
    facebook_stats,
    instagram_stats,
    linkedin_stats,
    mastodon_stats,
    popcons_stats,
    reddit_stats,
    twitter_stats,
    youtube_stats,
)


def generate_youtube_stats(file_path: str):
    """
    Generate youtube stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        channel_stats = youtube_stats(os.path.join(file_path, f_name))
        data = {**data, **channel_stats}
    return data


def generate_twitter_stats(file_path: str):
    """
    Generate twitter stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = twitter_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_mastodon_stats(file_path: str):
    """
    Generate mastodon stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = mastodon_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_facebook_stats(file_path: str):
    """
    Generate facebook stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = facebook_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_instagram_stats(file_path: str):
    """
    Generate instagram stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = instagram_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_reddit_stats(file_path: str):
    """
    Generate reddit stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = reddit_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_popcon_stats(file_path: str):
    """
    Generate popcon stats from metrics.
    """
    data = {}
    for f_name in os.listdir(file_path):
        stats = popcons_stats(os.path.join(file_path, f_name))
        data = {**data, **stats}
    return data


def generate_linkedin_stats(file_path: str):
    """
    Generate linkedin stats from metrics.
    """
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
