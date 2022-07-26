/*
Template Name: Upcube -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Dashboard Init Js File
*/

// Email sent - area chart

var options = {
    series: [{
    name: 'series1',
    data: [0, 180, 60, 220, 85, 190, 70]
  }, {
    name: 'series2',
    data: [0, 15, 250, 21, 365, 120, 30]
  }],
    chart: {
    toolbar: {
        show: false,
    },
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
        formatter: function (value) {
            return value + "k";
        }
    },
    tickAmount: 4,
    min: 0,
    max: 400
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: true
        }
    },   
    yaxis: {
        lines: {
            show: true
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.8
    },  
    column: {
        colors: undefined,
        opacity: 0.8
    },  
    padding: {
        top: 10,
        right: 0,
        bottom: 10,
        left: 10
    },  
  },
  legend: {
        show: false,
  },
  colors: ['#0f9cf3', '#6fd088'],
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  };

  var chart = new ApexCharts(document.querySelector("#area_chart"), options);
  chart.render();

  // Revenue - column chart

var options = {
    series: [{
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }, {
        name: '2019',
        type: 'line',
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
    }],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 2.3],
        curve: 'straight'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '34%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: [0, 3.5],
        colors: ['#6fd088'],
        strokeWidth: 2,
        strokeColors: '#6fd088',
        hover: {
            size: 4,
        }
      },
    legend: {
        show: false,
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "k";
            }
        },
        tickAmount: 5,
        min: 0,
        max: 50
    },
    colors: ['#0f9cf3', '#6fd088'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

var chart = new ApexCharts(document.querySelector("#column_line_chart"), options);
chart.render();

// donut chart

var options = {
    series: [42, 26, 15],
    chart: {
        height: 286,
        type: 'donut',
    },
    labels: ["Market Place", "Last Week", "Last Month"],
    plotOptions: {
        pie: {
            donut: {
                size: '73%',
                    labels: {
                        show: true,
                        name: {
                        show: true,
                        fontSize: '18px',
                        offsetY: 5,
                        },
                        value: {
                        show: false,
                        fontSize: '20px',
                        color: '#343a40',
                        offsetY: 8,
                        },
                        total:{
                        show: true,
                        fontSize: '17px',
                        label: 'Ethereum',
                        color: '#6c757d',
                        fontWeight: 600,
                        }
                    }
            
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    colors: ['#0f9cf3', '#6fd088', '#ffbb44'],

};

var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
chart.render();
