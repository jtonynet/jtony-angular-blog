/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe(('AngularJS Blog Application', function(){
    beforeEach(module('blogApp'));
    describe('BlogCtrl', function() {
        var scope, ctrl;
        
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('BlogCtrl', {$scope: scope});
        }));
        
        it('should create show blog entry count', function() {
            console.log("bloglist: "+scope.blogList.length);
            expect(scope.blogList.length).toEqual(2);
        });
    });
    
    describe('BlogViewCtrl', function() {
        var scope, ctrl, $httpBackend;
        
        beforeEach(inject(function(_$httpBackend_, $routeParams, $rooteScope, $controller){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('blogPost').respond({_id:1});
            
            $routeParams.id = 1;
            
            scope = $rootScope.$new();
            
            ctrl = $controller('BlogViewCtrl', {$scope: scope});
        }));
        
        it('should show blog entry id ', function() {
           expect(scope.blogEntry._id).toEqual(1); 
        });
    });
}));
