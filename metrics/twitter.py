import json
from os import path


def twitter_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "twitter_stats.json":
        return twitter_combined_stats(file_path)
    elif file_name == "twitter_posts.json":
        return twitter_posts_stats(file_path)
    elif file_name == "mentions.json":
        return {}


def twitter_combined_stats(file_path: str):
    data = {}
    orig_data = get_data(file_path)
    for k, v in orig_data.items():
        data[f"twitter_{k}"] = v
    return data


def twitter_posts_stats(file_path: str):
    orig_data = get_data(file_path)
    tweet_id = []
    tweet_conversation_id = []
    tweet_impression_count = []
    tweet_user_profile_click = []
    tweet_like_count = []
    tweet_quote_count = []
    tweet_reply_count = []
    tweet_retweet_count = []
    tweet_referenced_count = []
    for tweet in orig_data:
        tweet_id.append(tweet.get("id", "0"))
        tweet_conversation_id.append(tweet.get("conversation_id", "0"))
        if "non_public_metrics" in tweet.keys():
            tweet_impression_count.append(
                tweet["non_public_metrics"].get("impression_count", 0)
            )
            tweet_user_profile_click.append(
                tweet["non_public_metrics"].get("user_profile_clicks", 0)
            )
        if "public_metrics" in tweet.keys():
            tweet_like_count.append(
                tweet["public_metrics"].get("like_count", 0)
            )
            tweet_quote_count.append(
                tweet["public_metrics"].get("quote_count", 0)
            )
            tweet_reply_count.append(
                tweet["public_metrics"].get("reply_count", 0)
            )
            tweet_retweet_count.append(
                tweet["public_metrics"].get("retweet_count", 0)
            )
        if "referenced_tweets" in tweet.keys():
            tweet_referenced_count.append(len(tweet["referenced_tweets"]))
        else:
            tweet_referenced_count.append(0)
    return {
        "tweet_id": tweet_id,
        "tweet_conversation_id": tweet_conversation_id,
        "tweet_impression_count": tweet_impression_count,
        "tweet_user_profile_click": tweet_user_profile_click,
        "tweet_like_count": tweet_like_count,
        "tweet_quote_count": tweet_quote_count,
        "tweet_reply_count": tweet_reply_count,
        "tweet_retweet_count": tweet_retweet_count,
        "tweet_referenced_count": tweet_referenced_count,
    }


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
