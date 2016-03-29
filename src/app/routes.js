import React from 'react'
import { Route, IndexRoute } from 'react-router'
import PostPage from './components/post/postPage.react';
import AboutPage from './components/about/aboutPage.react';
import HomePage from './components/home/homePage.react';
import App from './components/app.react';

module.exports = (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/posts" component={PostPage}/>
        </Route>
);

