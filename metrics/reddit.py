import json
from os import path


def reddit_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "contributor_posts.json":
        return contributor_posts(file_path)
    elif file_name == "kde_posts.json":
        return kde_posts(file_path)
    elif file_name == "kde_reddit_stats.json":
        return kde_reddit_stats(file_path)
    elif file_name == "kdenlive_reddit_stats.json":
        return kdenlive_reddit_stats(file_path)
    elif file_name == "krita_reddit_stats.json":
        return krita_reddit_stats(file_path)
    elif file_name == "reddit_keyword.json":
        return reddit_keyword(file_path)


def contributor_posts(file_path: str):
    orig_data = get_data(file_path)
    reddit_contributor_posts = {}
    for username, posts in orig_data.items():
        post_id = []
        post_title = []
        post_votes = []
        post_comments = []
        for post in posts:
            post_id.append(post.get("id", ""))
            post_title.append(post.get("title", ""))
            post_votes.append(post.get("votes", 0))
            post_comments.append(parse_comments(post.get("comments", [])))
        reddit_contributor_posts[username] = {
            "reddit_contributor_post_id": post_id,
            "reddit_contributor_post_title": post_title,
            "reddit_contributor_post_votes": post_votes,
            "reddit_contributor_post_comments": post_comments,
        }
    return {"reddit_contributor_posts": reddit_contributor_posts}


def parse_comments(comments):
    comments_counts = len(comments)
    if comments_counts != 0:
        aggregated_sentiment = 0
        aggregated_votes = 0
        for comment in comments:
            aggregated_sentiment += comment.get("sentiment", 0)
            aggregated_votes += comment.get("votes", 0)
        return {
            "comments_counts": comments_counts,
            "aggregated_sentiment_per_comment": aggregated_sentiment
            / comments_counts,
            "aggregated_votes_per_comment": aggregated_votes / comments_counts,
        }
    return {
        "comments_counts": comments_counts,
        "aggregated_sentiment_per_comment": comments_counts,
        "aggregated_votes_per_comment": comments_counts,
    }


def kde_posts(file_path: str):
    orig_data = get_data(file_path)
    post_title = []
    post_ups = []
    post_upvote_ratio = []
    post_total_awards_received = []
    post_created = []
    post_id = []
    post_num_crossposts = []
    post_num_comments = []
    post_link_flair_text = []
    post_author = []
    post_stickied = []
    post_url = []
    post_author_flair_text = []
    post_comments = []
    for post in orig_data:
        post_title.append(post.get("title", ""))
        post_ups.append(post.get("ups", ""))
        post_upvote_ratio.append(post.get("upvote_ratio", ""))
        post_total_awards_received.append(
            post.get("total_awards_received", "")
        )
        post_created.append(post.get("created", ""))
        post_id.append(post.get("id", ""))
        post_num_crossposts.append(post.get("num_crossposts", ""))
        post_num_comments.append(post.get("num_comments", ""))
        post_link_flair_text.append(post.get("link_flair_text", ""))
        post_author.append(post.get("author", ""))
        post_stickied.append(post.get("stickied", ""))
        post_url.append(post.get("url", ""))
        post_author_flair_text.append(post.get("author_flair_text", ""))
        post_comments.append(get_comments_stats(post.get("comments", [])))
    return {
        "reddit_kde_post_title": post_title,
        "reddit_kde_post_ups": post_ups,
        "reddit_kde_post_upvote_ratio": post_upvote_ratio,
        "reddit_kde_post_total_awards_received": post_total_awards_received,
        "reddit_kde_post_created": post_created,
        "reddit_kde_post_id": post_id,
        "reddit_kde_post_num_crossposts": post_num_crossposts,
        "reddit_kde_post_num_comments": post_num_comments,
        "reddit_kde_post_link_flair_text": post_link_flair_text,
        "reddit_kde_post_author": post_author,
        "reddit_kde_post_stickied": post_stickied,
        "reddit_kde_post_url": post_url,
        "reddit_kde_post_author_flair_text": post_author_flair_text,
        "reddit_kde_post_comments": post_comments,
    }


def get_comments_stats(comments):
    if len(comments) != 0:
        avg_upvotes_per_comment = 0
        avg_downvotes_per_comment = 0
        for comment in comments:
            avg_upvotes_per_comment += comment.get("upvotes", 0)
            avg_downvotes_per_comment += comment.get("downvotes", 0)
        return {
            "avg_upvotes_per_comment": avg_upvotes_per_comment / len(comments),
            "avg_downvotes_per_comment": avg_downvotes_per_comment
            / len(comments),
        }
    return {"avg_upvotes_per_comment": 0, "avg_downvotes_per_comment": 0}


def abstract_stats(file_path: str, name: str):
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        data[f"{name}_{k}"] = v
    return data


def kde_reddit_stats(file_path: str):
    return abstract_stats(file_path, "kde_reddit")


def kdenlive_reddit_stats(file_path: str):
    return abstract_stats(file_path, "kdenlive_reddit")


def krita_reddit_stats(file_path: str):
    return abstract_stats(file_path, "krita_reddit")


def reddit_keyword(file_path: str):
    orig_data = get_data(file_path)
    data = {}
    for keyword, val in orig_data.items():
        data[keyword] = len(val)
    return {"reddit_keywords": data}


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
