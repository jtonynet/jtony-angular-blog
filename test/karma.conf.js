/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(config) {
    config.set({
        basePath: '../',
        files: [
            "public_html/libs/angular/angular.js",
            "public_html/libs/angular-mocks/angular-mocks.js",
            "public_html/libs/angular-route/angular-route.js",
            "public_html/app/controllers/*.js",
            "public_html/app/*.js",
            "test/**/*Spec.js"
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });
};