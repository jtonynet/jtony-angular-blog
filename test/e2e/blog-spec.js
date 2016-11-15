/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//PROTRACTOR

describe("BlogAngular Blog Application Test", function() {
    var basePath = "http://localhost:8383/jtony-angular-blog/";
    
    it("should test the main blog page", function() {
        browser.get(basePath);
        expect(browser.getTitle("Angular Blog"));
        
        //obtem lista de postagens do blog
        var blogList = element.all(by.repeater('blogPost in blogList'));
        
        //testa o tamanho do blogList
        expect(blogList.count()).toEqual(2);
        
        browser.get(basePath+"#!/blogPost/1");
        expect(browser.getTitle()).toEqual("Angular Blog");
        
        var commentList = element.all(by.repeater('comment in blogEntry.comments'));
        expect(commentList.count()).toEqual(2);
    });
});