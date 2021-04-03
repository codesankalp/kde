
let youtube_video_views = {{ youtube_video_views }};
let youtube_video_id = {{ youtube_video_id }};
let youtube_video_likes = {{ youtube_video_likes }};
let youtube_video_dislikes = {{ youtube_video_dislikes }};
let youtube_video_comments = {{ youtube_video_comments }};
let youtube_video_favorites = {{ youtube_video_favorites }};

var options1 = {

chart: {
    id: "youtube-video-combined-stats-chart",
    width: '100%',
    height: 460,
    foreColor: "#373d3f",
    toolbar: {
    show: true
    },
    events: {
    dataPointSelection: function (event, chartContext, opts) {
        window.open(`https://youtu.be/${youtube_video_id[opts.dataPointIndex]}`)
    }
    }
},

colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
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
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    strokeColor: "#65B051",
    strokeWidth: 1
},

series: [
    {
    type: "line",
    data: get_array(youtube_video_views),
    name: "views",
    },
    {
    type: "line",
    data: get_array(youtube_video_likes),
    name: "likes",
    },
    {
    type: "line",
    data: get_array(youtube_video_dislikes),
    name: "dislikes",
    },
    {
    type: "line",
    data: get_array(youtube_video_comments),
    name: "comments",
    },
    {
    type: "line",
    data: get_array(youtube_video_favorites),
    name: "favorites",
    }
],

tooltip: {
    theme: "light"
},

xaxis: {
    categories: youtube_video_id
},

yaxis: {
    min: 0,
    tickAmount: 4
},
};

var youtubeVideoChart = new ApexCharts(document.querySelector("#youtube-video-combined-stats"), options1);
youtubeVideoChart.render();
