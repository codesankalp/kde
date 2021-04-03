let mastodon_posts_id = {{ mastodon_posts_id }};
let mastodon_posts_url = {{ mastodon_posts_url }};
let mastodon_posts_replies_count = {{ mastodon_posts_replies_count }};
let mastodon_posts_reblogs_count = {{ mastodon_posts_reblogs_count }};
let mastodon_posts_favourites_count = {{ mastodon_posts_favourites_count }};
let mastodon_num_followers = {{ mastodon_num_followers }};
let mastodon_num_toots = {{ mastodon_num_toots }};

var mastodon_options = {

    chart: {
        id: "mastodon-combined-stats-chart",
        width: '100%',
        height: 460,
        foreColor: "#373d3f",
        toolbar: {
            show: true
        },
        events: {
            dataPointSelection: function(event, chartContext, opts) {
                window.open(`${mastodon_posts_url[opts.dataPointIndex]}`)
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
            data: get_array(mastodon_posts_replies_count),
            name: "Posts Replies Count",
        },
        {
        type: "line",
        data: get_array(mastodon_posts_reblogs_count),
        name: "Posts Reblogs Count",
        },
        {
        type: "line",
        data: get_array(mastodon_posts_favourites_count),
        name: "Posts Favourites Count",
        },
    ],

    tooltip: {
        theme: "light"
    },

    xaxis: {
        categories: mastodon_posts_id
    },

    yaxis: {
        min: 0,
        tickAmount: 4
    },
};

let mastodonCombinedChart = new ApexCharts(document.querySelector("#mastodon-combined-stats"), mastodon_options);
mastodonCombinedChart.render();
