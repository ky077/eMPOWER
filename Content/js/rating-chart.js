//chart plugins [customAxisTitle]
const customAxisTitle = {
    id: 'customAxisTitle',
    afterDraw: (chart, args, options) => { 
        const {ctx, 
               chartArea: {top, bottom, left, right},
               scales: {x, y}
              } = chart;

        ctx.save();

        ctx.font = '15px';
        ctx.fillStyle = Chart.defaults.color;
        ctx.fillText(options.xText, right + 10, bottom + 5);
        ctx.fillText(options.yText, left - 25, top - 25);

        ctx.restore();
    }    
} 

//chart plugins [canvasAxislonger]
const canvasAxislonger = {
    id: 'canvasAxislonger',
    afterDraw: (chart, args, options) => { 
        const {ctx, 
               chartArea: {top, bottom, left, right},
               scales: {x, y}
              } = chart;

        ctx.save();

        ctx.fillStyle = Chart.defaults.borderColor;

        //y上方線
        ctx.fillRect(left, top - 15, 1, 15);    

        ctx.restore();
    }    
}
    
const ctx = document.getElementById('rating-chart');
    
Chart.defaults.backgroundColor = "#ffffff";
Chart.defaults.borderColor     = "#cccccc";
Chart.defaults.color           = "#6C757D";

let ratingChart = new Chart(ctx, {
    responsive: true,
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            barPercentage: 0.8,
            data: [0, 0, 0, 0, 0],
            backgroundColor: ['#3DBCBA', '#3DBCBA', '#3DBCBA', '#3DBCBA', '#3DBCBA'] //藍#3DBCBA，黃(.top1)#FFEB76
        }]
    },
    options: {
        layout: {
            padding: {
                top: 40,
                right: 50
            }
        }, 
        scales: {
            x: {
                title: {
                    display: false,
                }, 
                grid: {
                    display: false
                },
               
            },
            y: {
                title: {
                    display: false,
                },
                grid: {
                    tickColor: 'white'
                },
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20, 
                }
            }  
        },
        plugins: {
            legend: false, 
            tooltip: {
                enabled: false,
            },
            customAxisTitle:{
                xText: '滿意度',
                yText: '百分比(%)',
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                offset: 0,
                font: {
                    size: 18,
                    weight: 'bold'
                },
                formatter: function(value, context) {
                    return value + '%';
                }
            }
        },
        animation: { 
            onComplete: function () {
                let chartImg = document.querySelector('.chart-img')
                if(chartImg){
                    chartImg.src = ratingChart.toBase64Image();   
                }
            },
        } 
    },
    plugins: [customAxisTitle, canvasAxislonger, ChartDataLabels]
});