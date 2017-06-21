define([], function () {

    var VisitorChart = function(renderTo) {
        this.chart = {
            renderTo : renderTo,
            type: 'area'
        };
        this.title = {
            text: 'Visitor Statistics'
        };
        this.xAxis= {
            categories: ["Jan", "Feb", "Mar", "Apr", "May"],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        };
        this.yAxis= {
            title: {
                text: 'Number of visitors'
            }
        };
        this.legend ={
            enabled: true
        };
        this.tooltip= {
            pointFormat: '{point.y}',
            split: true
        };
        this.plotOptions= {
            area: {
                stacking: 'normal'
            }
        },
        this.series = [{
                name: 'Unique',
                data: [9, 2, 6, 10, 18]
            },{
                name: 'Recurring',
                data: [10, 27, 36, 11, 12]
        }],
        this.credits= { enabled: false }
    
    };
    return VisitorChart;
});