import os
import sys
from datetime import datetime
from distutils.dir_util import copy_tree
from shutil import rmtree

from config import ASSETS_PATH, already_visualized, social_dirs_name
from developer_renderer import file_changes_reloader
from render_base import render
from stats import combined_data

DEBUG = os.getenv("DEBUG", "False") != "False"


def check_date_format_name(dir_name, path):
    """
    Checks for date directory formats.
    """
    for name in dir_name:
        try:
            day, month, year = list(map(int, name.split("-")))
            datetime(year, month, day)
        except Exception:
            print(f"Error: {os.path.join(path, name)} not valid.")
            return False
        if not os.path.isdir(os.path.join(path, name)):
            print(f"Error: {os.path.join(path, name)} not valid.")
            return False
    return True


def check_for_valid_social_dirs(path):
    """
    Checks for valid social dirs.
    """
    dir_paths = [(os.path.join(path, name), name) for name in os.listdir(path)]
    for dir_path, name in dir_paths:
        for dir_name in os.listdir(dir_path):
            if dir_name in already_visualized:
                continue
            else:
                print(f"Error: {dir_path} do not contains valid directory.")
                return False
        for social_name in social_dirs_name:
            if social_name in os.listdir(dir_path):
                continue
            else:
                print(f"Error: {social_name} not present in {dir_path}")
                return False
    return True


def copy_assets(dir_path):
    """
    Copy assets to dir_path.
    """
    dst = os.path.join(dir_path, "assets")
    if os.path.isdir(dst) and os.path.exists(dst):
        rmtree(dst)
    os.makedirs(dst)
    print("Copying assets ...")
    copy_tree(ASSETS_PATH, dst)
    print(f"Copied Assets to {dir_path}")


def render_data(path):
    """
    Function to render stats in their respective directory.
    """
    dir_paths = [(os.path.join(path, name), name) for name in os.listdir(path)]
    for dir_path, name in dir_paths:
        print(f"Working on {name} directory.")
        if "index.html" in os.listdir(dir_path):
            if "assets" in os.listdir(dir_path):
                print(
                    "index.html and assets is present. Skipping Rerendering."
                )
            else:
                copy_assets(dir_path)
        else:
            print(f"Generating Index.html file for {name} directory.")
            data = combined_data(
                YT_DIR_PATH=os.path.join(dir_path, "youtube"),
                TWITTER_DIR_PATH=os.path.join(dir_path, "twitter"),
                MASTODON_DIR_PATH=os.path.join(dir_path, "mastodon"),
                FACEBOOK_DIR_PATH=os.path.join(dir_path, "facebook"),
                INSTAGRAM_DIR_PATH=os.path.join(dir_path, "instagram"),
                REDDIT_DIR_PATH=os.path.join(dir_path, "reddit"),
                POPCONS_DIR_PATH=os.path.join(dir_path, "popcons"),
                LINKEDIN_DIR_PATH=os.path.join(dir_path, "linkedin"),
            )
            render(
                data=data, index_html_path=os.path.join(dir_path, "index.html")
            )
            copy_assets(dir_path)
            print(f"✅ Stats Visualization Generated for date {name}")


if __name__ == "__main__":
    if not DEBUG:

        args = sys.argv

        try:
            command = args[1]
        except Exception:
            command = input("Enter the path of data directory: ")

        if os.path.exists(command):

            print(f"✅ {command} is valid path.")

            if not os.path.isdir(command):
                sys.exit(f"❌ {command} is not a valid directory.")
            print(f"✅ {command} is valid directory.")

            if not check_date_format_name(os.listdir(command), command):
                sys.exit(f"❌ {command} do not contains valid dates directory.")
            print(f"✅ {command} contains valid date-time directory.")

            if not check_for_valid_social_dirs(command):
                sys.exit(
                    f"❌ {command} do not contains valid social directory."
                )
            print(f"✅ {command} contains valid social directory.")

            print("✅ All Initial Checks Passed.")
            print("\n===VISUALIZING DATA===\n")
            render_data(command)
            print("\n🎉 Visualisation Done 🎉\n")

        else:
            sys.exit("❌ Invalid Path")

    else:
        print("DEBUG=True")
        print("Loading File Changes Reloader.")
        file_changes_reloader()
