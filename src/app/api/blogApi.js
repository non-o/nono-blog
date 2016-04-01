"use strict";
import Github from 'github-api';
import _ from 'lodash';

//Todo implement a toastr when an error occur on requesting pages
//Todo add test if the post is not correctly configured
//Todo for now we don't do anything with the front ;;; of pages

class BlogApi {

    constructor() {
        this.github = new Github({
            username: "",
            password: "",
            auth: "basic"
        });
        this.repo = this.github.getRepo('non-o', 'nono-blog');
        this.basePath = "test-blog";
        this.pathToPages = this.basePath + '/pages';
        this.pathToPosts = this.basePath + '/posts';
        this.branch = 'master';
        this.menus = [];
        this.isInitialized = false;
    }

    getPage(pagePath, callback) {
        this.repo.read(this.branch, pagePath, function(err, data) {
            let objasStr =  data.substring(0, data.indexOf(';;;')-1);
            let config = JSON.parse('{'+ objasStr + '}');
            let body = data.substring(data.indexOf(';;;') +3);
            var page = {
                content : body,
                title : config.title,
                author : config.author,
                url : pagePath
            }
            callback(page);
        });
    }
    
    getPost(postFileName, callback) {
        this.repo.read(this.branch, this.pathToPosts + '/' + postFileName, function(err, post) {
            let objasStr =  post.substring(0, post.indexOf(';;;')-1);
                    let config = JSON.parse('{'+ objasStr + '}');
                    let body = post.substring(post.indexOf(';;;') +3);
                    var newPost ={
                        url : postFileName,
                        author : config.author,
                        date : config.date,
                        title : config.title,
                        body : body
                    };
            callback(newPost);
        });
    }

    getMenus(callback) {
        if (!this.isInitialized) {
                var tempMenus = [];
                this.repo.contents(this.branch, this.pathToPages , function(err, contents) {
                    _.each(contents, function(value) {
                        let menuName = _.toUpper(value.name.substring(0, value.name.indexOf('.md')));
                        tempMenus.push({ name: menuName, path: value.path });
                });
                
                this.menus = tempMenus;
                
                this.isInitialized = true;

                callback(this.menus);
                
            }.bind(this));
        }
        else {
            callback(this.menus);
        }
    }
    
    getAllPosts(callbackOnNewPost) {
        var posts = [];
        this.repo.contents(this.branch, this.pathToPosts , function(err, contents) {
            console.log('requesting posts', this.pathToPosts, err, contents);
            _.each(contents, function(value) {
                this.getPost(value.name, function(newPost){ 
                    callbackOnNewPost(newPost);
                });
            }.bind(this));
            
        }.bind(this));
    }

}

export default new BlogApi();


