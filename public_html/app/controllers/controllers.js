/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope', function BlogCtrl($scope) {
    $scope.blogList = [
        {
            "id": 1,
            "date": 1400623623107,
            "introText": "Esse é um blog sobre AngularJs",
            "blogText": "Esse é um blog sobre AngularJs, ele deve cobrir o projeto desde a criação até como adicionar comentários aos posts"
        },
        {
            "id": 2,
            "date": 1400623623107,
            "introText": "Post sobre como construir aplicações REST",
            "blogText": "Neste blog aprenderemos a constreuir aplicações beseadas em web services REST que contêsm a camada de negocios responsavel pela aplicação."
        }
    ];
}]);

blogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        var blogId = $routeParams.id;

        var blog1 = {
            "id": 1,
            "date": 1400623623107,
            "introText": "Esse é um blog sobre AngularJs",
            "blogText": "Esse é um blog sobre AngularJs, ele deve cobrir o projeto desde a criação até como adicionar comentários aos posts",
            "comments": [
                {
                    "commentText": "Ótimo post, perfeito"
                },
                {
                    "commentText": "Quando vamos aprender sobre services?"
                }
            ]
        };
        
        var blog2 = {
            "id": 2,
            "date": 1400623623107,
            "introText": "Post sobre como construir aplicações REST",
            "blogText": "Neste blog aprenderemos a constreuir aplicações beseadas em web services REST que contêsm a camada de negocios responsavel pela aplicação.",
            "comments": [
                {
                    "commentText": "REST é foda, quero aprender mais."
                },
                {
                    "commentText": "Podemos utilizar node.js para criar serviços REST."
                }
            ]
        };
        
        
        var blogEntry = null;
        switch(blogId) {
            case '1':
                blogEntry = blog1;
                break;
            case '2':
                blogEntry = blog2;
                break;
        }

        $scope.blogEntry = blogEntry;
}]);

