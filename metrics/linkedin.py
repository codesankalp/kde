import json
from os import path


def linkedin_stats(file_path: str):
    file_name = path.basename(file_path)
    if file_name == "linkedin_followers_stats.json":
        return linkedin_followers_stats(file_path)
    elif file_name == "linkedin_page_stats.json":
        return linkedin_page_stats(file_path)
    elif file_name == "linkedin_posts.json":
        return linkedin_posts(file_path)
    elif file_name == "linkedin_stats.json":
        return linkedin_combined_stats(file_path)
    elif file_name == "linkedin_weekly_followers.json":
        return linkedin_weekly_followers(file_path)
    elif file_name == "linkedin_weekly_page_stats.json":
        return linkedin_weekly_page_stats(file_path)


def follower_stats_utils(v, obj_type):
    temp = {}
    for obj in v:
        type_of_obj = obj.get(obj_type, "others")
        if obj["followerCounts"]:
            temp[type_of_obj] = obj["followerCounts"].get(
                "organicFollowerCount", 0
            )
    return temp


def linkedin_followers_stats(file_path: str):
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():

        if k == "followerCountsByAssociationType":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "associationType")

        if k == "followerCountsByRegion":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "region")

        if k == "followerCountsBySeniority":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "seniority")

        if k == "followerCountsByIndustry":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "industry")

        if k == "followerCountsByFunction":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "function")

        if k == "followerCountsByStaffCountRange":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "staffCountRange")

        if k == "followerCountsByCountry":
            data[f"linkedin_{k}"] = follower_stats_utils(v, "country")

    return data


def linkedin_page_stats(file_path: str):
    # orig_data = get_data(file_path)
    return {}


def linkedin_posts(file_path: str):
    posts = get_data(file_path)
    linkedin_posts_id = []
    linkedin_posts_activity_URN = []
    linkedin_posts_clickCount = []
    linkedin_posts_commentCount = []
    linkedin_posts_engagement = []
    linkedin_posts_impressionCount = []
    linkedin_posts_likeCount = []
    linkedin_posts_shareCount = []
    for post in posts:
        linkedin_posts_activity_URN.append(post.get('activityURN', ''))
        linkedin_posts_id.append(post.get('id', ''))
        linkedin_posts_clickCount.append(
            post['totalShareStatistics'].get('clickCount', 0)
        )
        linkedin_posts_commentCount.append(
            post['totalShareStatistics'].get('commentCount', 0)
        )
        linkedin_posts_engagement.append(
            post['totalShareStatistics'].get('engagement', 0)
        )
        linkedin_posts_impressionCount.append(
            post['totalShareStatistics'].get('impressionCount', 0)
        )
        linkedin_posts_likeCount.append(
            post['totalShareStatistics'].get('likeCount', 0)
        )
        linkedin_posts_shareCount.append(
            post['totalShareStatistics'].get('shareCount', 0)
        )
    return {
        'linkedin_posts_id': linkedin_posts_id,
        'linkedin_posts_activity_URN': linkedin_posts_activity_URN,
        'linkedin_posts_clickCount': linkedin_posts_clickCount,
        'linkedin_posts_commentCount': linkedin_posts_commentCount,
        'linkedin_posts_engagement': linkedin_posts_engagement,
        'linkedin_posts_impressionCount': linkedin_posts_impressionCount,
        'linkedin_posts_likeCount': linkedin_posts_likeCount,
        'linkedin_posts_shareCount': linkedin_posts_shareCount,
    }


def linkedin_weekly_page_stats(file_path: str):
    return {}


def linkedin_combined_stats(file_path: str):
    orig_data = get_data(file_path)
    data = {}
    for k, v in orig_data.items():
        data[f'linkedin_{k}'] = v
    return data


def linkedin_weekly_followers(file_path: str):
    orig_data = get_data(file_path)
    follower_count  = []
    time = []
    for dic in orig_data:
        try:
            follower_count.append(dic['followerGains'].get('organicFollowerGain'))
            time.append(dic['timeRange'].get('end', 0))
        except:
            print('Key error in linkedin_weekly_followers')
    return {
        'linkedin_weekly_follower_count_gain': follower_count,
        'linkedin_weekly_follower_count_time': time
    }


def reformat_json(file_path: str):
    orig_data = get_data(file_path)
    with open(file_path, "w") as f:
        f.write(json.dumps(orig_data, indent=4))


def get_data(file_path: str):
    with open(file_path) as f:
        orig_data = json.loads(f.read())
    return orig_data
