"use strict";
var posts = require('./postData').posts;
var _ = require('lodash');

var _clone = function(item)
{
    return JSON.parse(JSON.stringify(item));
}

var PostApi = {
    getAllPosts : function(){
        return _clone(posts);
    }
}

module.exports = PostApi;