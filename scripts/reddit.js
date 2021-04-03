
let reddit_kde_post_title = {{reddit_kde_post_title}};
let reddit_kde_post_ups = {{reddit_kde_post_ups}};
let reddit_kde_post_upvote_ratio = {{reddit_kde_post_upvote_ratio}};
let reddit_kde_post_total_awards_received = {{reddit_kde_post_total_awards_received}};
let reddit_kde_post_created = {{reddit_kde_post_created}};
let reddit_kde_post_id = {{reddit_kde_post_id}};
let reddit_kde_post_num_crossposts = {{reddit_kde_post_num_crossposts}};
let reddit_kde_post_num_comments = {{reddit_kde_post_num_comments}};
let reddit_kde_post_link_flair_text = {{reddit_kde_post_link_flair_text}};
let reddit_kde_post_author = {{reddit_kde_post_author}};
let reddit_kde_post_stickied = {{reddit_kde_post_stickied}};
let reddit_kde_post_url = {{reddit_kde_post_url}};
let reddit_kde_post_author_flair_text = {{reddit_kde_post_author_flair_text}};
let reddit_kde_post_comments = {{reddit_kde_post_comments}};
let reddit_keywords = {{reddit_keywords}};
let krita_reddit_topKeywords = {{krita_reddit_topKeywords}};
let krita_reddit_topCommentersByFrequency = {{krita_reddit_topCommentersByFrequency}};
let krita_reddit_topPostersByFrequency = {{krita_reddit_topPostersByFrequency}};
let krita_reddit_topLinkedDomains = {{krita_reddit_topLinkedDomains}};
let kde_reddit_topKeywords = {{kde_reddit_topKeywords}};
let kde_reddit_topCommentersByFrequency = {{kde_reddit_topCommentersByFrequency}};
let kde_reddit_topPostersByFrequency = {{kde_reddit_topPostersByFrequency}};
let kde_reddit_topLinkedDomains = {{kde_reddit_topLinkedDomains}};
let kdenlive_reddit_topKeywords = {{kdenlive_reddit_topKeywords}};
let kdenlive_reddit_topCommentersByFrequency = {{kdenlive_reddit_topCommentersByFrequency}};
let kdenlive_reddit_topPostersByFrequency = {{kdenlive_reddit_topPostersByFrequency}};
let kdenlive_reddit_topLinkedDomains = {{kdenlive_reddit_topLinkedDomains}};

var kde_posts_stats_options = {

        chart: {
            id: "reddit-kde-posts-stats-chart",
            width: '100%',
            height: 460,
            foreColor: "#373d3f",
            toolbar: {
                show: true
            },
            events: {
                dataPointSelection: function(event, chartContext, opts) {
                const url = `https://www.reddit.com/r/kde/comments/${reddit_kde_post_id[opts.dataPointIndex]}/`;
                window.open(url);
                }
            }
        },

        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#454687', '#928F92', '#d63c6c', '#17277d', '#4fd97d'],
        stroke: {
            curve: 'smooth',
            width: 4,
        },

        grid: {
            borderColor: "#555",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },

        dataLabels: {
            enabled: false
        },

        fill: {
            type: "gradient",
            gradient: {
                enabled: true,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            }
        },

        markers: {
            size: 3,
            colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#454687', '#928F92'],
            strokeColor: "#65B051",
            strokeWidth: 1
        },

        series: [
            {
            type: "line",
            data: get_array(reddit_kde_post_ups),
            name: "Post Ups",
            },
            {
            type: "line",
            data: get_array(reddit_kde_post_upvote_ratio),
            name: "Post Upvote Ratio",
            },
            {
            type: "line",
            data: get_array(reddit_kde_post_total_awards_received),
            name: "Post award recieved",
            },
            {
            type: "line",
            data: get_array(reddit_kde_post_num_crossposts),
            name: "Post crosspots",
            },
            {
            type: "line",
            data: get_array(reddit_kde_post_num_comments),
            name: "Post comments",
            },
        ],

        tooltip: {
            theme: "light"
        },

        xaxis: {
            categories: reddit_kde_post_id
        },

        yaxis: {
            min: 0,
            tickAmount: 4
        },
};

let redditKDEPostsChart = new ApexCharts(document.querySelector('#kde-reddit-posts-chart'), kde_posts_stats_options);
redditKDEPostsChart.render();

var topKeywords = {
        series: Object.values(reddit_keywords),
        chart: {
        width: '380',
        height: '230',
        type: 'pie',
    },
    labels: Object.keys(reddit_keywords),
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'bottom'
        }
        }
    }]
};

var topKeywordsChart = new ApexCharts(document.querySelector("#kde-reddit-top-kewords"), topKeywords);
topKeywordsChart.render();

var kritaTopKeywords = {
series: krita_reddit_topKeywords.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: krita_reddit_topKeywords.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topKritaKeywordChart = new ApexCharts(document.querySelector('#krita-reddit-top-kewords'), kritaTopKeywords);
topKritaKeywordChart.render();

var kritaTopComments = {
series: krita_reddit_topCommentersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: krita_reddit_topCommentersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topKritaCommentsChart = new ApexCharts(document.querySelector('#krita-reddit-top-comments'), kritaTopComments);
topKritaCommentsChart.render();

var kritaTopPosters = {
series: krita_reddit_topPostersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: krita_reddit_topPostersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topKritaPostersChart = new ApexCharts(document.querySelector('#krita-reddit-top-posters'), kritaTopPosters);
topKritaPostersChart.render();

var kritaTopLinkedDomains = {
series: krita_reddit_topLinkedDomains.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: krita_reddit_topLinkedDomains.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topKritaDomainChart = new ApexCharts(document.querySelector('#krita-reddit-top-domains'), kritaTopLinkedDomains);
topKritaDomainChart.render();

var kdeTopKeywords = {
series: kde_reddit_topKeywords.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kde_reddit_topKeywords.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdeKeywordChart = new ApexCharts(document.querySelector('#reddit-kde-top-kewords'), kdeTopKeywords);
topkdeKeywordChart.render();

var kdeTopComments = {
series: kde_reddit_topCommentersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kde_reddit_topCommentersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdeCommentsChart = new ApexCharts(document.querySelector('#kde-reddit-top-comments'), kdeTopComments);
topkdeCommentsChart.render();

var kdeTopPosters = {
series: kde_reddit_topPostersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kde_reddit_topPostersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdePostersChart = new ApexCharts(document.querySelector('#kde-reddit-top-posters'), kdeTopPosters);
topkdePostersChart.render();

var kdeTopLinkedDomains = {
series: kde_reddit_topLinkedDomains.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kde_reddit_topLinkedDomains.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdeDomainChart = new ApexCharts(document.querySelector('#kde-reddit-top-domains'), kdeTopLinkedDomains);
topkdeDomainChart.render();

var kdenliveTopKeywords = {
series: kdenlive_reddit_topKeywords.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kdenlive_reddit_topKeywords.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdenliveKeywordChart = new ApexCharts(document.querySelector('#kdenlive-reddit-top-kewords'), kdenliveTopKeywords);
topkdenliveKeywordChart.render();

var kdenliveTopComments = {
series: kdenlive_reddit_topCommentersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kdenlive_reddit_topCommentersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdenliveCommentsChart = new ApexCharts(document.querySelector('#kdenlive-reddit-top-comments'), kdenliveTopComments);
topkdenliveCommentsChart.render();

var kdenliveTopPosters = {
series: kdenlive_reddit_topPostersByFrequency.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kdenlive_reddit_topPostersByFrequency.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdenlivePostersChart = new ApexCharts(document.querySelector('#kdenlive-reddit-top-posters'), kdenliveTopPosters);
topkdenlivePostersChart.render();

var kdenliveTopLinkedDomains = {
series: kdenlive_reddit_topLinkedDomains.map((v)=>{return v[1];}),
chart: {
width: '100%',
height: 300,
type: 'pie',
    },
labels: kdenlive_reddit_topLinkedDomains.map((v)=>{return v[0];}),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var topkdenliveDomainChart = new ApexCharts(document.querySelector('#kdenlive-reddit-top-domains'), kdenliveTopLinkedDomains);
topkdenliveDomainChart.render();

let reddit_contributor_posts = {{reddit_contributor_posts}};
const getContributor = () => {
return (Object.keys(reddit_contributor_posts).map((v)=>{
    if (reddit_contributor_posts[v]["reddit_contributor_post_votes"].length!=0){
    return reddit_contributor_posts[v]["reddit_contributor_post_votes"][0]
    }else {
    return 0
    }
}))
}

var topContributor = {
        series: getContributor(),
        chart: {
        width: '380',
        height: '230',
        type: 'pie',
    },
    labels: Object.keys(reddit_contributor_posts),
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'bottom'
        }
        }
    }]
};

var topContributorChart = new ApexCharts(document.querySelector("#kde-reddit-top-contributor"), topContributor);
topContributorChart.render();
