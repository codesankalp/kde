
let linkedin_followerCountsByAssociationType = {{linkedin_followerCountsByAssociationType}};
let linkedin_followerCountsByRegion = {{linkedin_followerCountsByRegion}};
let linkedin_followerCountsBySeniority = {{linkedin_followerCountsBySeniority}};
let linkedin_followerCountsByIndustry = {{linkedin_followerCountsByIndustry}};
let linkedin_followerCountsByFunction = {{linkedin_followerCountsByFunction}};
let linkedin_followerCountsByStaffCountRange = {{linkedin_followerCountsByStaffCountRange}}
let linkedin_followerCountsByCountry = {{linkedin_followerCountsByCountry}};
let linkedin_posts_id = {{linkedin_posts_id}};
let linkedin_posts_activity_URN = {{linkedin_posts_activity_URN}};
let linkedin_posts_clickCount = {{linkedin_posts_clickCount}};
let linkedin_posts_commentCount = {{linkedin_posts_commentCount}};
let linkedin_posts_engagement = {{linkedin_posts_engagement}};
let linkedin_posts_impressionCount = {{linkedin_posts_impressionCount}};
let linkedin_posts_likeCount = {{linkedin_posts_likeCount}};
let linkedin_posts_shareCount = {{linkedin_posts_shareCount}};
let linkedin_weekly_follower_count_gain = {{linkedin_weekly_follower_count_gain}};
let linkedin_weekly_follower_count_time = {{linkedin_weekly_follower_count_time}};
let linkedin_weekly_page_stats = {{linkedin_weekly_page_stats}};
let linkedin_pageStatisticsByFunction = {{linkedin_pageStatisticsByFunction}};
let linkedin_pageStatisticsByRegion = {{linkedin_pageStatisticsByRegion}};
let linkedin_pageStatisticsByStaffCountRange = {{linkedin_pageStatisticsByStaffCountRange}};
let linkedin_pageStatisticsByIndustry = {{linkedin_pageStatisticsByIndustry}};
let linkedin_pageStatisticsByCountry = {{linkedin_pageStatisticsByCountry}};
let linkedin_pageStatisticsBySeniority = {{linkedin_pageStatisticsBySeniority}};

var followerCountsByAssociationType = {
    series: Object.values(linkedin_followerCountsByAssociationType),
    chart: {
    width: '100%',
    height: '250',
    type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByAssociationType),
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

var followerCountsByAssociationTypeChart = new ApexCharts(document.querySelector("#linkedin-follower-count-by-association-type"), followerCountsByAssociationType);
followerCountsByAssociationTypeChart.render();

var followerCountsByRegion = {
    series: Object.values(linkedin_followerCountsByRegion),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByRegion),
responsive: [{
    breakpoint: 480,
    options: {
    chart: {
        width: 200,
    },
    legend: {
        position: 'bottom'
    }
    }
}]
};

var followerCountsByRegionChart = new ApexCharts(document.querySelector("#linkedin_followerCountsByRegion"), followerCountsByRegion);
followerCountsByRegionChart.render();

var followerCountsBySeniority = {
    series: Object.values(linkedin_followerCountsBySeniority),
    chart: {
    width: '100%',
    height: '250',
    type: 'pie',
},
labels: Object.keys(linkedin_followerCountsBySeniority),
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

var followerCountsBySeniorityChart = new ApexCharts(document.querySelector("#linkedin_followerCountsBySeniority"), followerCountsBySeniority);
followerCountsBySeniorityChart.render();

var followerCountsByIndustry = {
    series: Object.values(linkedin_followerCountsByIndustry),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByIndustry),
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

var followerCountsByIndustryChart = new ApexCharts(document.querySelector("#linkedin_followerCountsByIndustry"), followerCountsByIndustry);
followerCountsByIndustryChart.render();

var followerCountsByFunction = {
series: Object.values(linkedin_followerCountsByFunction),
chart: {
width: '100%',
height: '500',
type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByFunction),
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

var followerCountsByFunctionChart = new ApexCharts(document.querySelector("#linkedin_followerCountsByFunction"), followerCountsByFunction);
followerCountsByFunctionChart.render();

var followerCountsByStaffCountRange = {
series: Object.values(linkedin_followerCountsByStaffCountRange),
chart: {
width: '100%',
type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByStaffCountRange),
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

var followerCountsByStaffCountRangeChart = new ApexCharts(document.querySelector("#linkedin_followerCountsByStaffCountRange"), followerCountsByStaffCountRange);
followerCountsByStaffCountRangeChart.render();

var followerCountsByCountry = {
series: Object.values(linkedin_followerCountsByCountry),
chart: {
width: '100%',
height: '500',
type: 'pie',
},
labels: Object.keys(linkedin_followerCountsByCountry),
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

var followerCountsByCountryChart = new ApexCharts(document.querySelector("#linkedin_followerCountsByCountry"), followerCountsByCountry);
followerCountsByCountryChart.render();

var linkedin_post_options = {

chart: {
    id: "linkedin-stats-post-chart",
    width: '100%',
    height: 460,
    foreColor: "#373d3f",
    toolbar: {
        show: true
    },
    events: {
        dataPointSelection: function(event, chartContext, opts) {
            const url = `https://www.linkedin.com/feed/update/${linkedin_posts_activity_URN[opts.dataPointIndex]}/`;
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
        data: get_array(linkedin_posts_clickCount),
        name: "Clicks",
    },
    {
        type: "line",
        data: get_array(linkedin_posts_commentCount),
        name: "Comments",
    },
    {
        type: "line",
        data: get_array(linkedin_posts_engagement),
        name: "Engagement",
    },
    {
        type: "line",
        data: get_array(linkedin_posts_impressionCount),
        name: "Impressions",
    },
    {
        type: "line",
        data: get_array(linkedin_posts_likeCount),
        name: "Likes",
    },
    {
        type: "line",
        data: get_array(linkedin_posts_shareCount),
        name: "Shares",
    },
],

tooltip: {
    theme: "light"
},

xaxis: {
    categories: linkedin_posts_id,
},

yaxis: {
    min: 0,
    tickAmount: 4
},
};

let linkedinPostChart = new ApexCharts(document.querySelector("#linkedin-post-stats"), linkedin_post_options);
linkedinPostChart.render();

var linkedin_weekly_follower_options = {

chart: {
    id: "linkedin_weekly_follower_options_chart",
    width: '100%',
    height: 460,
    foreColor: "#373d3f",
    toolbar: {
        show: true
    },
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
        data: get_array(linkedin_weekly_follower_count_gain, linkedin_weekly_follower_count_time),
        name: "Followers",
    },
],

tooltip: {
    theme: "light"
},

xaxis: {
    type: 'datetime',
},

yaxis: {
    min: 0,
    tickAmount: 4
},
};

let linkedinWeeklyFollowerChart = new ApexCharts(document.querySelector("#linkedin-weekly-follower-stats"), linkedin_weekly_follower_options);
linkedinWeeklyFollowerChart.render();

var pageStatisticsBySeniorityopts = {
    series: Object.values(linkedin_pageStatisticsBySeniority),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsBySeniority),
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

var linkedin_pageStatisticsBySeniorityChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsBySeniority"), pageStatisticsBySeniorityopts);
linkedin_pageStatisticsBySeniorityChart.render();

var pageStatisticsByCountryopts = {
    series: Object.values(linkedin_pageStatisticsByCountry),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsByCountry),
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

var linkedin_pageStatisticsByCountryChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsByCountry"), pageStatisticsByCountryopts);
linkedin_pageStatisticsByCountryChart.render();

var pageStatisticsByIndustryopts = {
    series: Object.values(linkedin_pageStatisticsByIndustry),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsByIndustry),
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

var linkedin_pageStatisticsByIndustryChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsByIndustry"), pageStatisticsByIndustryopts);
linkedin_pageStatisticsByIndustryChart.render();

var StatisticsByStaffCountRangeopts = {
    series: Object.values(linkedin_pageStatisticsByStaffCountRange),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsByStaffCountRange),
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

var linkedin_pageStatisticsByStaffCountRangeChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsByStaffCountRange"), StatisticsByStaffCountRangeopts);
linkedin_pageStatisticsByStaffCountRangeChart.render();

var linkedin_pageStatisticsByRegionopts = {
    series: Object.values(linkedin_pageStatisticsByRegion),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsByRegion),
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

var linkedin_pageStatisticsByRegionChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsByRegion"), linkedin_pageStatisticsByRegionopts);
linkedin_pageStatisticsByRegionChart.render();

var linkedin_pageStatisticsByFunctionopts = {
    series: Object.values(linkedin_pageStatisticsByFunction),
    chart: {
    width: '100%',
    height: '500',
    type: 'pie',
},
labels: Object.keys(linkedin_pageStatisticsByFunction),
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

var linkedin_pageStatisticsByFunctionChart = new ApexCharts(document.querySelector("#linkedin_pageStatisticsByFunction"), linkedin_pageStatisticsByFunctionopts);
linkedin_pageStatisticsByFunctionChart.render();

var linkedin_weekly_page_statsopts = {
series: Object.values(linkedin_weekly_page_stats),
chart: {
width: '100%',
height: '500',
type: 'pie',
},
labels: Object.keys(linkedin_weekly_page_stats),
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

var linkedin_weekly_page_statsChart = new ApexCharts(document.querySelector("#linkedin_weekly_page_stats"), linkedin_weekly_page_statsopts);
linkedin_weekly_page_statsChart.render();
