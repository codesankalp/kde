from os import getcwd, listdir, path

BASE_DIR = getcwd()

ASSETS_PATH = path.join(BASE_DIR, "assets")

BASE_HTML = path.join(BASE_DIR, "base.html")

social_dirs_name = [
    "instagram",
    "popcons",
    "linkedin",
    "youtube",
    "mastodon",
    "reddit",
    "twitter",
    "facebook",
]

already_visualized = social_dirs_name + ["assets", "index.html"]

data_dir = path.join(BASE_DIR, "data")

for date_dir in listdir(data_dir):
    p = path.join(data_dir, date_dir)
    YT_DIR_PATH = path.join(p, "youtube")
    TWITTER_DIR_PATH = path.join(p, "twitter")
    MASTODON_DIR_PATH = path.join(p, "mastodon")
    FACEBOOK_DIR_PATH = path.join(p, "facebook")
    INSTAGRAM_DIR_PATH = path.join(p, "instagram")
    LINKEDIN_DIR_PATH = path.join(p, "linkedin")
    REDDIT_DIR_PATH = path.join(p, "reddit")
    POPCONS_DIR_PATH = path.join(p, "popcons")
