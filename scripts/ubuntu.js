
let ubuntu_name = {{ubuntu_name}};
let ubuntu_inst = {{ubuntu_inst}};
let ubuntu_vote = {{ubuntu_vote}};
let ubuntu_old = {{ubuntu_old}};
let ubuntu_recent = {{ubuntu_recent}};

var ubuntu_options = {

    chart: {
        id: "ubuntu-combined-stats-chart",
        width: '100%',
        height: 600,
        foreColor: "#373d3f",
        toolbar: {
            show: true
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
            data: get_array(ubuntu_inst),
            name: "Inst",
        },
        {
            type: "line",
            data: get_array(ubuntu_vote),
            name: "Votes",
        },
        {
            type: "line",
            data: get_array(ubuntu_old),
            name: "old",
        },
        {
            type: "line",
            data: get_array(ubuntu_recent),
            name: "recent",
        },
    ],

    tooltip: {
        theme: "light"
    },

    xaxis: {
        categories: ubuntu_name
    },

    yaxis: {
        min: 0,
        tickAmount: 4
    },
};

let ubuntuCombinedChart = new ApexCharts(document.querySelector("#ubuntu-combined-stats"), ubuntu_options);
ubuntuCombinedChart.render();
