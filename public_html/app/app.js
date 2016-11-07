/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var blogApp = angular.module('blogApp', [
    'ngRoute', 
    'blogControllers'
]);

blogApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: "app/views/main.html",
                    controller: "BlogCtrl"
                })
                .when('/blogPost/:id', {
                    templateUrl: "app/views/blogPost.html",
                    controller: "BlogViewCtrl"
                });
                
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);