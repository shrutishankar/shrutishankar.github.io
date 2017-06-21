define([], function () {

    var BrowserPie = function(renderTo) {
        this.chart = {
            renderTo : renderTo,
            type: 'pie'
        };
        this.title = {
            text: 'Browser<br>Traffic<br>'
        };
        this.legend ={
            enabled: true
        };
        this.tooltip= {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        this.plotOptions= {
            pie: {
                dataLabels: {
                    distance: -50
                }
            }
        },
        this.series = [{
                data: [
                        ['Firefox',   44.2],
                        ['IE',       26.6],
                        ['Safari',       20],
                        {
                            name: 'Chrome',
                            y: 3.1,
                            dataLabels: {
                                distance: 30 // Individual distance
                            }
                        },
                        ['Other',    5.4]
                ],
        }]
        this.credits= { enabled: false }
    
    };
    return BrowserPie;
});