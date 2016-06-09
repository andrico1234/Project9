/**
 * Created by Home on 26/05/2016.
 */

// chart global options
Chart.defaults.global.defaultFontFamily = "'Futura', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontColor = "#bcbcbc";


// line chart hourly start
var lineChartHourly = document.getElementById("line-chart-hourly");
var myChartH = new Chart(lineChartHourly, {

    type: 'line',
    data: {
        labels: ["00-02", "03-05", "06-08", "09-11", "12-14", "15-17", "18-20", "21-23"],
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
            data: [0, 2, 3, 5, 14, 12, 10, 4]
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
// line chart hourly end


// line chart daily start
var lineChartDaily = document.getElementById("line-chart-daily");
var myChartD = new Chart(lineChartDaily, {

    type: 'line',
    data: {
        labels: ["25", "26", "27", "28", "29", "30", "31"],
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
            data: [78, 90, 120, 190, 230, 472, 50]
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
// line chart daily end

// line chart weekly start
var lineChartWeekly = document.getElementById("line-chart-weekly");
var myChartW = new Chart(lineChartWeekly, {

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
// line chart weekly end

// line chart monthly start
var lineChartMonthly = document.getElementById("line-chart-monthly");
var myChartM = new Chart(lineChartMonthly, {

    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
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
            data: [1340, 2800, 2900, 4200, 3900, 3600, 3830]
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
// line chart Monthly end


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