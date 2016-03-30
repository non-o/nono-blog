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

    getPage(pageName, callback) {
        this.repo.read(this.branch, this.pathToPages + '/' + pageName, function(err, data) {
            let objasStr =  data.substring(0, data.indexOf(';;;')-1);
            let config = JSON.parse('{'+ objasStr + '}');
            let body = data.substring(data.indexOf(';;;') +3);
            callback(body);
        });
    }
    
    getPost(postFileName, callback) {
        this.repo.read(this.branch, this.pathToPosts + '/' + postFileName, function(err, data) {
            callback(data);
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
    
    getAllPosts(callback) {
        var posts = [];
        this.repo.contents(this.branch, this.pathToPosts , function(err, contents) {
            _.each(contents, function(value) {
                this.getPost(value.name, function(post){ 
                    let objasStr =  post.substring(0, post.indexOf(';;;')-1);
                    let config = JSON.parse('{'+ objasStr + '}');
                    let body = post.substring(post.indexOf(';;;') +3);
                    posts.push({
                        url : value.name,
                        author : config.author,
                        date : config.date,
                        title : config.title,
                        body : body
                    });
                });
            }.bind(this));
            
            callback(posts);
            
        }.bind(this));
    }

}

export default new BlogApi();


