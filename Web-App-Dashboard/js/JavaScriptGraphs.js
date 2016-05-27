/**
 * Created by Home on 26/05/2016.
 */


Chart.defaults.global.defaultFontFamily = "'Futura', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontColor = "#bcbcbc";
Chart.defaults.global.legend = false;

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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});
