define([], function () {

    var BrowserPie = function (renderTo) {
        this.chart = {
            renderTo: renderTo,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            spacingTop: 20
        };
        this.title = {
            text: 'Browser Traffic'
        };
        this.legend = {
            enabled: true
        };
        this.tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        this.plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    distancec: -50
                },
                showInLegend: true
            }
        },
            this.series = [{
                name: "Brands",
                colorByPoint: true,
                data: [
                    ['Safari', 3.1],
                    ['IE', 26.6],
                    ['Firefox', 20],
                    {
                        name: 'Chrome',
                        y: 44.2,
                        sliced: true,
                        selected: true,
                        dataLabels: {
                            distance: 30 // Individual distance
                        }
                    },
                    ['Other', 5.4]
                ],
            }]
        this.credits = { enabled: false }

    };
    return BrowserPie;
});