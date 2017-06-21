define([
    "./monthly-income-chart"
], function (
    MonthlyIncomeChart
) {

    var WidgetsController = function ($scope) {
        this._scope = $scope;
        this.initMap();

        var my = this;
        var monthIncomeChartWatch = this._scope.$watch(function() {
            return document.getElementById(my.MONTHLY_INCOME_CHART_ID);
        }, function(newValue, oldValue) {
            if (newValue) {
                my.addMonthlyIncomeChart();
                monthIncomeChartWatch();
            }
        })
    };

    WidgetsController.getName = function () {
        return "WidgetsController";
    }

    WidgetsController.prototype = {

        _scope: undefined,

        LOCATION_MAP_ID: "location-map-container",
        MONTHLY_INCOME_CHART_ID: "widgets-monthly-income-chart-container",


        initMap: function () {
            var my = this;
            
            require(['async!http://maps.googleapis.com/maps/api/js?key=AIzaSyAC3DOWGF1WB1iFKamkhb0ZQ0zxUxZtvnU!callback'], function () {
                var uluru = { lat: 42.3856989, lng: -71.22168 };
                var map = new google.maps.Map(document.getElementById(my.LOCATION_MAP_ID), {
                    zoom: 14,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
            });
        },

        addMonthlyIncomeChart: function() {
            var chart = new MonthlyIncomeChart(this.MONTHLY_INCOME_CHART_ID);
            window.Highcharts.chart(chart);
        }
    };

    return WidgetsController;
})