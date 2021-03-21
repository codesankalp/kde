from os import getcwd, listdir, path

curr_dir = getcwd()
data_dir = path.join(curr_dir, "data")

for date_dir in listdir(data_dir):
    print(date_dir)
    p = path.join(data_dir, date_dir)
    YT_DIR_PATH = path.join(p, "youtube")
    TWITTER_DIR_PATH = path.join(p, "twitter")
    MASTODON_DIR_PATH = path.join(p, "mastodon")
    FACEBOOK_DIR_PATH = path.join(p, "facebook")
    INSTAGRAM_DIR_PATH = path.join(p, "instagram")
    LINKEDIN_DIR_PATH = path.join(p, "linkedin")
    REDDIT_DIR_PATH = path.join(p, "reddit")
    POPCONS_DIR_PATH = path.join(p, "popcons")
