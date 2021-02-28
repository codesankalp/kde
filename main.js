function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}
var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
    min: 30,
    max: 90
});
var options1 = {
    chart: {
        id: "chart2",
        type: "area",
        height: 230,
        foreColor: "#ccc",
        toolbar: {
            autoSelected: "pan",
            show: false
        }
    },
    colors: ["#00BAEC"],
    stroke: {
        width: 3
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
        gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0
        }
    },
    markers: {
        size: 5,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 3
    },
    series: [
        {
            data: data
        }
    ],
    tooltip: {
        theme: "dark"
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        min: 0,
        tickAmount: 4
    }
};

var chart1 = new ApexCharts(document.querySelector("#youtube-combined-stats-chart"), options1);
chart1.render();