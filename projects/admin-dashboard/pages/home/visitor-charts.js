define([], function () {

    var VisitorChart = function (renderTo) {
        this.chart = {
            renderTo: renderTo,
            type: 'area',
            spacingTop: 20
        };
        
        this.title = {
            text: 'Visitor Statistics (in millions)'
        };
        
        this.xAxis = {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        };
        
        this.yAxis = {
            title: {
                text: 'Number of visitors (in millions)'
            },
            lineWidth: 1,
            maxPadding: 0.2,
            endOnTick: false
        };
        
        this.legend = {
            enabled: true
        };
        
        this.tooltip = {
            shared: true,
            useHTML: true,
            headerFormat: '<small><b>{point.key}</b></small><table>',
            pointFormat: '<tr><td>{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 0
        };
        
        this.plotOptions = {
            area: {
                stacking: 'normal',
                marker: {
                    radius: 2
                }
            }
        };

        this.series = [{
            name: 'Unique',
            data: [9, 2, 6, 10, 18, 20, 25, 35, 33, 37, 40, 42]
        }, {
            name: 'Recurring',
            data: [10, 27, 36, 11, 12, 20, 21, 18, 20, 25, 29, 30]
        }],
            this.credits = { enabled: false }

    };
    return VisitorChart;
});