/**
 * Created by summer on 2017/10/19.
 */
var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('tab',{
            url: "/tab",
            templateUrl: "./App/views/tab.html",
            controller:'myController'
        })
        .state('tab1',{
            url: "/tab1",
            templateUrl: "./App/views/tab1.html",
            controller:'myController1'
        });
    $urlRouterProvider.otherwise('/tab');
});