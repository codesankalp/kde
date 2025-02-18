let arch_name = {{arch_name}};
let arch_samples = {{arch_samples}};
let arch_count = {{arch_count}};
let arch_popularity = {{arch_popularity}};
let arch_startMonth = {{arch_startMonth}};
let arch_endMonth = {{arch_endMonth}};

var arch_options = {

    chart: {
        id: "arch-combined-stats-chart",
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
            data: get_array(arch_samples),
            name: "Samples",
        },
        {
            type: "line",
            data: get_array(arch_count),
            name: "Count",
        },
        {
            type: "line",
            data: get_array(arch_popularity),
            name: "Popularity",
        },
        {
            type: "line",
            data: get_array(arch_startMonth),
            name: "Start Month",
        },
        {
            type: "line",
            data: get_array(arch_endMonth),
            name: "End Month",
        },
    ],

    tooltip: {
        theme: "light"
    },

    xaxis: {
        categories: arch_name
    },

    yaxis: {
        min: 0,
        tickAmount: 4
    },
};

let archCombinedChart = new ApexCharts(document.querySelector("#arch-combined-stats"), arch_options);
archCombinedChart.render();