# KDE PROMO DASHBOARD

# Installing for development

```
virtualenv venv
source venv/bin/activate

pip install -r requirements.txt

# Required to skip re-rendering files manually
./developer_renderer.py

# Python server
python -m http.server
```

# Facebook Stats

### Facebook Posts Stats 

1. Return type: list
2. Each object of list is of type `dict`.
3. Keys are:
	1. post_engaged_users: int
	2. created_time: datetime
	3. message: str
	4. id: str
	5. post_negative_feedback: int
	6. post_negative_feedback_unique: int
	7. post_negative_feedback_by_type: dict
		1. hide_all_clicks: int (optional)
		2. hide_clicks: int (optional)
	8. post_clicks_unique: int
	9. post_clicks: int
	10. post_engaged_fan: int
	11. post_impressions: int
	12. post_impressions_unique: int
	13. post_impressions_fan: int
	14. post_impressions_organic: int
	15. comments: list (contains dict)
		1. created_time: datetime
		2. message: str
		3. id: str


### Facebook Stats

1. Return type: dict
2. Keys:
	1. page_engaged_users: int
	2. page_post_engagements: int
	3. page_impressions: int
	4. page_impressions_organic: int
	5. page_impressions_paid: int
	6. page_consumptions: int
	7. page_negative_feedback: int
	8. page_video_views: int
	9. page_negative_feedback_by_type: dict
	10. page_positive_feedback_by_type: dict
	11. page_fans: int
	12. page_fans_locale: dict
	13. page_fans_city: dict
	14. page_fans_gender_age: dict
	15. page_fan_adds_unique: int
	16. page_fan_removes_unique: int

# Instagram Stats

### Instagram Posts Stats

1. Return type: list.
2. Each element is of type dict.
3. Keys:
	1. comments_count: int
	2. like_count: int
	3. caption: str
	4. permalink: str(url)
	5. id: str

### Instagram Stats

1. Return type: dict
2. Keys:
	1. followers_count: int
	2. media_count: int
	3. id: str
	4. Website clicks: int
	5. Profile views: int
	6. Audience town/city: dict
	7. Audience country: dict
	8. Gender and age: dict
	9. Reach: int
	10. Impressions: int

# Mastodon Stats

### Mastodon Posts Stats

1. Return type: list
2. Each object of this list is dict
3. Keys:
	1. text: str (html)
	2. url: str (url)
	3. id: str
	4. replies_count: int
	5. reblogs_count: int
	6. favourites_count: int

# Reddit Stats

### Contributor Posts

1. type: dict
2. each object is a username: str.
3. each username contains: list.
4. usename-list contains dict with keys:
	1. id: str.
	2. title: str.
	3. votes: int.
	4. comments: list containing dict
		1. text: str
		2. votes: int
		3. sentiment: float (0-1)

### Kde Posts

1. type: list
2. each obj is dict.
3. Keys of dict:
	1. title: str
	2. ups: str(int)
	3. upvote_ratio: str(float)
	4. total_awards_received: str(int)
	5. created: str(float)
	6. id: str
	7. num_crossposts: str(int)
	8. num_comments: str(int)
	9. link_flair_text: str
	10. author: str
	11. stickied: str(bool)
	12. url: str
	13. author_flair_text: str
	14. comments: list(dict)
		1. text: str
		2. upvotes: int
		3. downvotes: int

### Kde Reddit Stats

1. type: dict
2. Keys:
	1. subredditId: str
	2. commentsPerSubscriber: float
	3. postsPerSubscriber: float
	4. commentsPerHour: float
	5. subscriberCount: int
	6. gildsPerSubscriber: float
	7. postsPerHour: float
	8. topKeywords: list containing of list(str, float)
	9. topCommentersByFrequency: list containing of list(str, int)
	10. topPostersByFrequency: list containing of list(str, int)
	11. topLinkedDomains: list containing of list(str, int)

### Kdenlive Reddit Stats

1. type: dict
2. Keys:
	1. subredditId: str
	2. commentsPerSubscriber: float
	3. postsPerSubscriber: float
	4. commentsPerHour: float
	5. subscriberCount: int
	6. gildsPerSubscriber: float
	7. postsPerHour: float
	8. topKeywords: list containing of list(str, float)
	9. topCommentersByFrequency: list containing of list(str, int)
	10. topPostersByFrequency: list containing of list(str, int)
	11. topLinkedDomains: list containing of list(str, int)

### Krita Reddit Stats

1. type: dict
2. Keys:
	1. subredditId: str
	2. commentsPerSubscriber: float
	3. postsPerSubscriber: float
	4. commentsPerHour: float
	5. subscriberCount: int
	6. gildsPerSubscriber: float
	7. postsPerHour: float
	8. topKeywords: list containing of list(str, float)
	9. topCommentersByFrequency: list containing of list(str, int)
	10. topPostersByFrequency: list containing of list(str, int)
	11. topLinkedDomains: list containing of list(str, int)

### Reddit Keyword

1. type: dict
2. each obj is a keyword(str)
3. consists of list which consist of dict with keys:
	1. subreddit: str
	2. title: str
	3. id: str
	4. author: str


# Twitter

### Twitter Posts

1. type: list
2. Each obj is dict
3. Keys of dict:
	1. conversation_id: str(int)
	2. id: str(int)
	3. non_public_metrics: dict
		1. impression_count: int
		2. user_profile_clicks: int
	4. public_metrics: dict
		1. like_count: int
        2. quote_count: int
        3. reply_count: int
        4. retweet_count: int
    5. referenced_tweets: list containing dict
    	1. id: str(int)
    	2. type: str
    6. replies: list containing dict
    	1. id: str(int)
    	2. text: str
    7. text: str

### Twitter Stats

1. type: dict
2. Keys:
	1. followers_count: int
	2. following_count: int
	3. tweet_count: int
	4. listed_count: int

### Mentions

# Youtube

### Channel Stats

1. type: dict
2. Keys:
	1. viewCount: str(int)
	2. subscriberCount: str(int)
	3. hiddenSubscriberCount: bool
	4. videoCount: str(int)

### Content Stats

1. type: list
2. each obj is dict
3. Keys:
	1. viewCount: str(int)
	2. likeCount: str(int)
	3. dislikeCount: str(int)
	4. favoriteCount: str(int)
	5. commentCount: str(int)
	6. id: str

# Arch

1. type: list
2. each obj of list is dict.
3. Keys:
	1. name: str
	2. samples: int
	3. count: int
	4. popularity: int
	5. startMonth: int
	6. endMonth: int

# Debian

1. type: list
2. each obj of list is dict
3. keys:
	1. name: str
	2. inst: str(int)
	3. vote: str(int)
	4. old: str(int)
	5. recent: str(int)

# Ubuntu

1. type: list
2. each obj is dict.
3. Keys:
	1. name: str
	2. inst: str(int)
	3. vote: str(int)
	4. old: str(int)
	5. recent: str(int)

# LinkedIn

### Weekly Page Stats

1. type: dict
2. Keys:
	1. totalPageStatistics: dict
		1. clicks: dict
			1. mobileCustomButtonClickCounts: list of dict
				1. customButtonType: str
				2. clicks: int
			2. careersPageClicks: dict
				1. careersPagePromoLinksClicks
				2. careersPageBannerPromoClicks
				3. careersPageJobsClicks
				4. careersPageEmployeesClicks
			3. desktopCustomButtonClickCounts: list of dict
				1. customButtonType: str
				2. clicks: int
			4. mobileCareersPageClicks: dict
				1. careersPagePromoLinksClicks
				2. careersPageJobsClicks
				3. careersPageEmployeesClicks
		2. views: dict
			1. mobileProductsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			2. allDesktopPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			3. insightsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			4. mobileAboutPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			5. allMobilePageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			6. desktopProductsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			7. productsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			8. jobsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			9. peoplePageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			10. overviewPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			11. mobileOverviewPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			12. lifeAtPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			13. desktopOverviewPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			14. mobileCareersPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			15. allPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			16. mobileJobsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			17. careersPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			18. mobileLifeAtPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			19. desktopJobsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			20. desktopPeoplePageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			21. aboutPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			22. desktopAboutPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			23. mobilePeoplePageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			24. desktopInsightsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			25. desktopCareersPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			26. desktopLifeAtPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
			27. mobileInsightsPageViews:{
				pageViews: int
				uniquePageViews: int 
			}
	2. timeRange: dict
		1. start: time
		2. end: time
	3. organization: str


### Follower Stats

1. type: dict
2. keys:
	1. followerCountsByAssociationType: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. associationType: str
	2. followerCountsByRegion: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. region: str
	3. followerCountsBySeniority: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. seniority: str
	4. followerCountsByIndustry: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. industry: str
	5. followerCountsByFunction: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. function: str
	6. followerCountsByStaffCountRange: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. staffCountRange: str
	7. followerCountsByCountry: list containing dict
		1. followerCounts: dict
			1. organicFollowerCount: int
			2. paidFollowerCount: int
		2. country: str
	8. organizationalEntity: str

### LinkedIn Stats

1. type: dict
2. Keys:
	1. followerCount: int
	2. uniqueImpressionsCount: int
	3. shareCount: int
	4. shareMentionsCount: int
	5. engagement: float
	6. clickCount: int
	7. likeCount: int
	8. impressionCount: int
	9. commentMentionsCount: int
	10. commentCount: int

### Weekly Followers Stats

1. type: list
2. each obj is dict
3. Keys:
	1. followerGains: dict
		1. organicFollowerGain: int
		2. paidFollowerGain: int
	2. organizationalEntity: str
	3. timeRange: dict
		1. start: time
		2. end: time