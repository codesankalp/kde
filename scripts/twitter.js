let tweet_id = {{ tweet_id }};
let tweet_conversation_id = {{ tweet_conversation_id }};
let tweet_impression_count = {{ tweet_impression_count }};
let tweet_user_profile_click = {{ tweet_user_profile_click }};
let tweet_like_count = {{ tweet_like_count }};
let tweet_quote_count = {{ tweet_quote_count }};
let tweet_reply_count = {{ tweet_reply_count }};
let tweet_retweet_count = {{ tweet_retweet_count }};
let tweet_referenced_count = {{ tweet_referenced_count }};

var tweet_options = {

    chart: {
        id: "twitter-combined-stats-chart",
        width: '100%',
        height: 460,
        foreColor: "#373d3f",
        toolbar: {
            show: true
        },
        events: {
            dataPointSelection: function(event, chartContext, opts) {

                console.log(opts.dataPointIndex);
                window.open(`https://twitter.com/kdecommunity/status/${tweet_id[opts.dataPointIndex]}`)
            }
        }
    },

    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#454687', '#928F92'],
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
            data: get_array(tweet_impression_count),
            name: "Tweet Impression",
        },
        {
            type: "line",
            data: get_array(tweet_user_profile_click),
            name: "Profile Clicks",
        },
        {
            type: "line",
            data: get_array(tweet_like_count),
            name: "Tweet Likes",
        },
        {
            type: "line",
            data: get_array(tweet_quote_count),
            name: "Tweet Quotes",
        },
        {
            type: "line",
            data: get_array(tweet_reply_count),
            name: "Reply",
        },
        {
            type: "line",
            data: get_array(tweet_retweet_count),
            name: "Retweets"
        },
        {
            type: "line",
            data: get_array(tweet_referenced_count),
            name: "Refrenced Tweets"
        }
    ],

    tooltip: {
        theme: "light"
    },

    xaxis: {
        categories: tweet_id
    },

    yaxis: {
        min: 0,
        tickAmount: 4
    },
};

var twitterCombinedChart = new ApexCharts(document.querySelector("#twitter-combined-stats"), tweet_options);
twitterCombinedChart.render();

