/** Type wise housing distribution 2015*/
Highcharts.chart('construction-2015-chart-container', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'New Residential Construction: 2015'
  },
  subtitle: {
    text: '(in thousands)'
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Percent'
    }
  },
  legend: {
    enabled: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f})<br/>',
    split: true
  },
  plotOptions: {
    area: {
      stacking: 'percent',
      lineColor: '#ffffff',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#ffffff'
      }
    }
  },
  series: [{
    name: 'Completed',
    data: [952, 872, 790, 1005, 1028, 970, 992, 971, 1018, 986, 988, 1012]
  }, {
    name: 'Under Const',
    data: [833, 832, 845, 868, 877, 893, 906, 918, 937, 943, 964, 973]
  }, {
    name: 'Started',
    data: [116, 127, 131, 133, 140, 154, 148, 148, 135, 142, 142, 150]
  }, {
    name: 'Authorized Not Started',
    data: [116, 127, 131, 133, 140, 154, 148, 148, 135, 142, 142, 150]
  }, {
    name: 'Authorized by building permits',
    data: [1069, 1127, 1079, 1178, 1255, 1363, 1134, 1159, 1125, 1166, 1267, 1218]
  }],
   credits: { enabled: false }
});

/** Type wise housing distribution 2016*/
Highcharts.chart('construction-2016-chart-container', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'New Residential Construction: 2016'
  },
  subtitle: {
    text: '(in thousands)'
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Percent'
    }
  },
  legend: {
    enabled: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f})<br/>',
    split: true,

  },
  plotOptions: {
    area: {
      stacking: 'percent',
      lineColor: '#ffffff',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#ffffff'
      }
    }
  },
  series: [{
    name: 'Completed',
    data: [1051, 1045, 1019, 961, 1016, 1113, 1086, 1040, 1005, 1067, 1203, 1096]
  }, {
    name: 'Under Const',
    data: [975, 986, 988, 996, 1009, 1011, 1028, 1034, 1033, 1053, 1046, 1062]
  }, {
    name: 'Started',
    data: [771, 841, 748, 767, 732, 770, 772, 727, 783, 871, 823, 808]
  }, {
    name: 'Authorized Not Started',
    data: [151, 150, 147, 142, 141, 137, 131, 131, 139, 133, 139, 139]
  }, {
    name: 'Authorized by building permits',
    data: [1193, 1195, 1115, 1163, 1178, 1193, 1175, 1200, 1270, 1285, 1255, 1266]
  }],
   credits: { enabled: false }
});

/** Type wise housing distribution 2017*/
Highcharts.chart('construction-2017-chart-container', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'New Residential Construction: 2017'
  },
  subtitle: {
    text: '(in thousands)'
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Percent'
    }
  },
  legend: {
    enabled: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f})<br/>',
    split: true,

  },
  plotOptions: {
    area: {
      stacking: 'percent',
      lineColor: '#ffffff',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#ffffff'
      }
    }
  },
  series: [{
    name: 'Completed',
    data: [1083, 1161, 1210, 1106, null, null, null, null, null, null, null, null]
  }, {
    name: 'Under Const',
    data: [1071, 1080, 1074, 1074, null, null, null, null, null, null, null, null]
  }, {
    name: 'Started',
    data: [815, 877, 832, 835, null, null, null, null, null, null, null, null]
  }, {
    name: 'Authorized Started',
    data: [143, 135, 137, 136, null, null, null, null, null, null, null, null]
  }, {
    name: 'Authorized by building permits',
    data: [1300, 1219, 1260, 1229, null, null, null, null, null, null, null, null]
  }],
   credits: { enabled: false }
});

/**Region-wise distribution 2015 */
Highcharts.chart('region-2015-pie-container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'New Residential Construction: 2015'
  },
  subtitle: {
    text: 'Click the slices to view drilldown by region.'
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.0f}'
      }
    }
  },

  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>'
  },
  series: [{
    name: 'Totals',
    colorByPoint: true,
    data: [{
      name: 'Authorized by building permits',
      y: 11584,
      drilldown: 'Authorized by building permits'
    }, {
      name: 'Authorized Not Started',
      y: 1666,
      drilldown: 'Authorized Not Started'
    }, {
      name: 'Started',
      y: 13285,
      drilldown: 'Started'
    }, {
      name: 'Under Const',
      y: 10789,
      drilldown: 'Under Const'
    }, {
      name: 'Completed',
      y: 11584,
      drilldown: 'Completed'
    }]
  }],

  drilldown: {
    series: [{
      name: 'Authorized by building permits',
      id: 'Authorized by building permits',
      data: [
        ['Northeast', 1109],
        ['Midwest', 1835],
        ['South', 5873],
        ['West', 2767]
      ]
    },{
      name: 'Authorized Not Started',
      id: 'Authorized Not Started',
      data: [
        ['Northeast', 272],
        ['Midwest', 193],
        ['South', 864],
        ['West', 337]
      ]
    },{
      name: 'Started',
      id: 'Started',
      data: [
        ['Northeast', 1626],
        ['Midwest', 1804],
        ['South', 6675],
        ['West', 3180]
      ]
    },{
      name: 'Under Const',
      id: 'Under Const',
      data: [
        ['Northeast', 1864],
        ['Midwest', 1523],
        ['South', 4715],
        ['West', 2687]
      ]
    },{
      name: 'Completed',
      id: 'Completed',
      data: [
        ['Northeast', 1109],
        ['Midwest', 1835],
        ['South', 5873],
        ['West', 2767]
      ]
    }]

  },
  credits: { enabled: false }
});

/**Region-wise distribution 2016 */
Highcharts.chart('region-2016-pie-container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'New Residential Construction: 2016'
  },
  subtitle: {
    text: 'Click the slices to view drilldown by region.'
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.0f}'
      }
    }
  },

  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>'
  },
  series: [{
    name: 'Totals',
    colorByPoint: true,
    data: [{
      name: 'Authorized by building permits',
      y: 14488,
      drilldown: 'Authorized by building permits'
    }, {
      name: 'Authorized Not Started',
      y: 1680,
      drilldown: 'Authorized Not Started'
    }, {
      name: 'Started',
      y: 14127,
      drilldown: 'Started'
    }, {
      name: 'Under Const',
      y: 12221,
      drilldown: 'Under Const'
    }, {
      name: 'Completed',
      y: 12702,
      drilldown: 'Completed'
    }]
  }],

  drilldown: {
    series: [{
      name: 'Authorized by building permits',
      id: 'Authorized by building permits',
      data: [
        ['Northeast', 1394],
        ['Midwest', 2242],
        ['South', 7133],
        ['West', 3719]
      ]
    }, {
      name: 'Authorized Not Started',
      id: 'Authorized Not Started',
      data: [
        ['Northeast', 221],
        ['Midwest', 209],
        ['South', 825],
        ['West', 425]
      ]
    }, {
      name: 'Started',
      id: 'Started',
      data: [
        ['Northeast', 1396],
        ['Midwest', 2214],
        ['South', 7011],
        ['West', 3506]
      ]
    }, {
      name: 'Under Const',
      id: 'Under Const',
      data: [
        ['Northeast', 2265],
        ['Midwest', 1642],
        ['South', 5265],
        ['West', 3049]
      ]
    }, {
      name: 'Completed',
      id: 'Completed',
      data: [
        ['Northeast', 1176],
        ['Midwest', 1960],
        ['South', 6624],
        ['West', 2942]
      ]
    }]

  },
  credits: { enabled: false }
});




/**Unit-wise 2015 chart */
Highcharts.chart('unit-2015-stacked-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unit-wise distribution of new housing units in 2015'
    },
    xAxis: {
        categories: ['Authorized by building permits', 'Authorized Not Started', 'Started', 'Under Const.', 'Completed']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total number of units'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: '1 Unit',
        data: [ 8342 , 769, 8547, 4612, 7762]
    }, {
        name: '2-4 Unit',
        data: [384]
    }, {
        name: '5 Unit',
        data: [5414, 870, 4599, 6040, 3698]
    }],
     credits: { enabled: false }
});
/**Unit wise 2016 distribution */
Highcharts.chart('unit-2016-stacked-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Unit-wise distribution of new housing units in 2016'
    },
    xAxis: {
        categories: ['Authorized by building permits', 'Authorized Not Started', 'Started', 'Under Const.', 'Completed']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total number of units'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: '1 Unit',
        data: [  9027  , 812, 9413, 5188, 8835]
    }, {
        name: '2-4 Unit',
        data: [419]
    }, {
        name: '5 Unit',
        data: [5042, 848, 4575, 6904, 3738]
    }],
     credits: { enabled: false }
});