'use strict';
var canvas = document.getElementById("sales-canvas-dark");
// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};

// Gradient color - this week
var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientThisWeek.addColorStop(0, '#F9F7E3');
gradientThisWeek.addColorStop(1, '#F9F7E3');

// Gradient color - previous week
var gradientPrevWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientPrevWeek.addColorStop(0, '#FEB11F');
gradientPrevWeek.addColorStop(1, '#FEB11F');


var config = {
    type: 'line',
    data: {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [
          {
              label: 'Revenue this quater',
              data: [24, 18, 16, 18, 24, 36, 28],
              backgroundColor: gradientThisWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          },
          {
              label: 'Revenue last quater',
              data: [20, 22, 30, 22, 18, 22, 30],
              backgroundColor: gradientPrevWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          }
        ]
    },
    options: {
    		elements: { 
        	point: {
          	radius: 0,
          	hitRadius: 5, 
            hoverRadius: 5 
          } 
        },
    		legend: {
        		display: true,
        },
        scales: {
            xAxes: [{
            		display: true,
            }],
            yAxes: [{
            		display: true,
                ticks: {
                	beginAtZero: true,
              	},
            }]
        }
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);