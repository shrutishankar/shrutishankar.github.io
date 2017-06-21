define([
    "./visitor-charts.js",
    "./browser-pie.js"
], function(
    TimeSeriesChart,
    BrowserPie
) {
    var HomeController = function($scope) {
        $scope.debug = false;
        this._scope = $scope;

        var my = this;
        var ChartWatch = this._scope.$watch(function() {
            return document.getElementById(my.VISITOR_CHART_ID);
        }, function(newValue, oldValue) {
            if (newValue) {
                my.initChart();
                ChartWatch();
            }
        })

        var PieWatch = this._scope.$watch(function() {
            return document.getElementById(my.BROWSER_PIE_ID);
        }, function(newValue, oldValue) {
            if (newValue) {
                my.initPie();
                PieWatch();
            }
        })

    };


    HomeController.getName = function() {
        return "HomeController";
    };

    HomeController.prototype = {

        VISITOR_CHART_ID: "home-chart-container",
        BROWSER_PIE_ID:  "browser-pie-container",

        initChart: function() {
            var chart = new TimeSeriesChart(this.VISITOR_CHART_ID);
            window.Highcharts.chart(chart);
        },

        initPie: function() {
            var chart = new BrowserPie(this.BROWSER_PIE_ID);
            window.Highcharts.chart(chart);
        },

        setupMultiselect: function() {
            this.multiselectOptions = [
                { label: "HF 770", value: "" },
                { label: "HF 750", value: "" },
                { label: "CS 603", value: "" },
                { label: "CS 881", value: "" },
                { label: "CS 753", value: "" },
                { label: "CS 675", value: "" },
                { label: "CS 651", value: "" }
            ];

            this.multiselectSelectedOptions = [];
        }


    };
    
    return HomeController;
});
