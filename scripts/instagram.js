let instagram_id = {{instagram_id}};
let instagram_comments_count = {{instagram_comments_count}};
let instagram_like_count = {{instagram_like_count}};
let instagram_permalink = {{instagram_permalink}};
let instagram_Audience_gender_age = {{instagram_Gender_and_age}};
let instagram_Audience_town_city = {{instagram_Audience_town_city}};

var instagram_options = {

chart: {
    id: "instagram-combined-stats-chart",
    width: '100%',
    height: 460,
    foreColor: "#373d3f",
    toolbar: {
        show: true
    },
    events: {
        dataPointSelection: function(event, chartContext, opts) {
            const url = `${instagram_permalink[opts.dataPointIndex]}`;
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
        data: get_array(instagram_like_count),
        name: "Likes",
    },
    {
        type: "line",
        data: get_array(instagram_comments_count),
        name: "Comments",
    },      
],

tooltip: {
    theme: "light"
},

xaxis: {
    categories: instagram_id
},

yaxis: {
    min: 0,
    tickAmount: 4
},
};

let instagramCombinedChart = new ApexCharts(document.querySelector("#instagram-combined-chart"), instagram_options);
instagramCombinedChart.render();


var instagram_Audience_gender_age_opts = {
series: Object.values(instagram_Audience_gender_age),
chart: {
width: '100%',
height: '250',
type: 'pie',
},
labels: Object.keys(instagram_Audience_gender_age),
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

var instagram_Audience_gender_age_chart = new ApexCharts(document.querySelector("#instagram_Audience_gender_age"), instagram_Audience_gender_age_opts);
instagram_Audience_gender_age_chart.render();

var instagram_Audience_town_city_opts = {
    series: Object.values(instagram_Audience_town_city),
    chart: {
    width: '100%',
    height: '250',
    type: 'pie',
},
labels: Object.keys(instagram_Audience_town_city),
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

var instagram_Audience_town_city_chart = new ApexCharts(document.querySelector("#instagram_Audience_town_city"), instagram_Audience_town_city_opts);
instagram_Audience_town_city_chart.render();
