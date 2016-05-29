/**
 * Created by Home on 26/05/2016.
 */

// chart global options
Chart.defaults.global.defaultFontFamily = "'Futura', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontColor = "#bcbcbc";


// line chart start
var lineChart = document.getElementById("line-chart");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(171, 174, 215, 0.6)',
            borderCapStyle: 'square',
            borderColor: "#7479BD",
            label: 'Traffic',
            pointBorderColor: '#4D4D71',
            pointBackgroundColor: '#f1f1f8',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [1000, 1400, 1700, 1340, 560, 720, 1250, 590, 340, 1230]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
// line chart end

// bar chart start
var barChart = document.getElementById("bar-chart");
var myChart2 = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Purchased',
                data: [23, 21, 30, 17, 43, 66, 76],
                backgroundColor: "rgba(171, 174, 215, 0.6)",
                borderWidth: 1,
                borderColor: "rgba(171, 174, 215, 1)"

            },
            {
                label: 'Browsed',
                data: [70, 60, 85, 75, 90, 115, 130],
                backgroundColor: "rgba(131, 200, 145, 0.6)",
                borderWidth: 1,
                borderColor: "rgba(131, 200, 145, 1)"

            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// bar chart end


// doughnut chart start
var doughnutChart = document.getElementById("pie-chart");
var myChart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop",
            "Other"
        ],
        datasets: [{
            data: [34, 27, 58, 19],
            backgroundColor: [
                "rgba(171, 174, 215, 1)",
                "rgba(131, 200, 145, 1)",
                '#749ebd',
                '#bd7479'
            ],
            hoverBackgroundColor: [
                "rgba(171, 174, 215, 1)",
                "rgba(131, 200, 145, 1)",
                '#749ebd',
                '#bd7479'
            ]
        }]
    }
});
// doughnut chart end