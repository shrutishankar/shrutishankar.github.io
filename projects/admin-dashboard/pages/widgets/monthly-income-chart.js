define([], function () {

    var MonthlyIncomeChart = function(renderTo) {
        this.chart = {
            renderTo : renderTo,
            backgroundColor: '#FCFFC5',
        };

        this.credits = {
            enabled: false
        };

        this.exporting = {
            enabled: false
        };

        this.title = {
            align: "left",
            text: "Average Monthly Income",
            style: { "fontSize": "12px", "fontWeight": "bold" }
        };

        this.subtitle = {
            enabled: false
        };

        this.xAxis = {
            text: null,
            labels: {
                enabled: false
            },
            visible: false
        };

        this.yAxis = {
            title: {
                text: null,
            },
            labels: {
                enabled: false
            },
            gridLineWidth: 0
        };

        this.tooltip = {
    		headerFormat: "",
            pointFormat: "<b>{point.y}</b>"
        };

        this.legend = {
            enabled: false
        };

        this.series = [{
            name: 'Average Monthly Income',
            data: [43934, 52503, 97031, 69658, 57177, 119931, 137133, 154175],
            color: "#FF0000",
            marker: {
                enabled: false,
                radius: 3
            }
        }];

    }
    

    return MonthlyIncomeChart;
});