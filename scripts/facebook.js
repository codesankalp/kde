
const get_array = (arr, sub=[]) => {
const ls = []
if (sub.length==0){
arr.map((val, index)=>{
    ls.push([index+1, val]);
});
}
else {
    arr.map((val, index)=>{
    ls.push([sub[index], val]);
});
}
// console.log(ls);
return ls;
};

let facebook_post_engaged_users = {{facebook_post_engaged_users}};
let facebook_created_time = {{facebook_created_time}};
let facebook_post_id = {{facebook_post_id}};
let facebook_post_negative_feedback = {{facebook_post_negative_feedback}}
let facebook_post_negative_feedback_by_type = {{facebook_post_negative_feedback_by_type}};
let facebook_post_clicks_unique = {{facebook_post_clicks_unique}};
let facebook_post_clicks = {{facebook_post_clicks}};
let facebook_post_engaged_fan = {{facebook_post_engaged_fan}};
let facebook_post_impressions = {{facebook_post_impressions}};
let facebook_post_impressions_unique = {{facebook_post_impressions_unique}};
let facebook_post_impressions_fan = {{facebook_post_impressions_fan}};
let facebook_post_impressions_organic = {{facebook_post_impressions_organic}};
let facebook_comments = {{facebook_comments}};
let facebook_page_negative_feedback_by_type = {{facebook_page_negative_feedback_by_type}};
let facebook_page_positive_feedback_by_type = {{facebook_page_positive_feedback_by_type}};
let facebook_page_fans_locale = {{facebook_page_fans_locale}};
let facebook_page_fans_city = {{facebook_page_fans_city}};
let facebook_page_fans_gender_age = {{facebook_page_fans_gender_age}};


var facebook_options = {

    chart: {
        id: "facebook-combined-stats-chart",
        width: '100%',
        height: 460,
        foreColor: "#373d3f",
        toolbar: {
            show: true
        },
        events: {
            dataPointSelection: function(event, chartContext, opts) {
            const url = `https://facebook.com/kde/posts/${facebook_post_id.reverse()[opts.dataPointIndex].split('_')[1]}`;
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
            data: get_array(facebook_post_engaged_users, facebook_created_time).reverse(),
            name: "Engaged Users",
        },
        {
        type: "line",
        data: get_array(facebook_post_negative_feedback, facebook_created_time).reverse(),
        name: "Post Negative feedback",
        },
        {
        type: "line",
        data: get_array(facebook_post_clicks, facebook_created_time).reverse(),
        name: "Post Clicks",
        },
        {
        type: "line",
        data: get_array(facebook_post_clicks_unique, facebook_created_time).reverse(),
        name: "Unique Post Clicks",
        },
        {
        type: "line",
        data: get_array(facebook_post_engaged_fan, facebook_created_time).reverse(),
        name: "Engaged Fans",
        },
        {
        type: "line",
        data: get_array(facebook_post_impressions, facebook_created_time).reverse(),
        name: "Post Impressions",
        },
        {
        type: "line",
        data: get_array(facebook_post_impressions_unique, facebook_created_time).reverse(),
        name: "Unique Post Impressions",
        },
        {
        type: "line",
        data: get_array(facebook_post_impressions_fan, facebook_created_time).reverse(),
        name: "Post Impressions Fan",
        },
        {
        type: "line",
        data: get_array(facebook_post_impressions_organic, facebook_created_time).reverse(),
        name: "Impression Organic",
        },
        {
        type: "line",
        data: get_array(facebook_comments, facebook_created_time).reverse(),
        name: "Comments",
        }
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

let facebookCombinedChart = new ApexCharts(document.querySelector("#facebook-combined-stats"), facebook_options);
facebookCombinedChart.render();

var facebook_page_fans_locale_opt = {
series: Object.values(facebook_page_fans_locale),
chart: {
width: '100%',
height: '250',
type: 'pie',
},
labels: Object.keys(facebook_page_fans_locale),
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

var facebook_page_fans_locale_chart = new ApexCharts(document.querySelector("#facebook_page_fans_locale"), facebook_page_fans_locale_opt);
facebook_page_fans_locale_chart.render();

var facebook_page_fans_city_opts = {
series: Object.values(facebook_page_fans_city),
chart: {
width: '100%',
height: '250',
type: 'pie',
},
labels: Object.keys(facebook_page_fans_city),
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

var facebook_page_fans_city_chart = new ApexCharts(document.querySelector("#facebook_page_fans_city"), facebook_page_fans_city_opts);
facebook_page_fans_city_chart.render();

var facebook_page_fans_gender_age_opts = {
    series: Object.values(facebook_page_fans_gender_age),
    chart: {
    width: '100%',
    height: '250',
    type: 'pie',
},
labels: Object.keys(facebook_page_fans_gender_age),
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

var facebook_page_fans_gender_age_chart = new ApexCharts(document.querySelector("#facebook_page_fans_gender_age"), facebook_page_fans_gender_age_opts);
facebook_page_fans_gender_age_chart.render();

var facebook_page_positive_feedback_by_type_opts = {
    series: Object.values(facebook_page_positive_feedback_by_type),
    chart: {
    width: '100%',
    height: '250',
    type: 'pie',
},
labels: Object.keys(facebook_page_positive_feedback_by_type),
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

var facebook_page_positive_feedback_by_type_chart = new ApexCharts(document.querySelector("#facebook_page_positive_feedback_by_type"), facebook_page_positive_feedback_by_type_opts);
facebook_page_positive_feedback_by_type_chart.render();
