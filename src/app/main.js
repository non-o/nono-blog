"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import PostPage from './components/post/postPage.react';
import About from './components/about/about.react';
import Home from './components/common/home.react';
import Header from './components/common/header.react';
import Title from './components/common/title.react';

class App extends React.Component {
    render() {
        var Child;
        switch (this.props.route) {
            case 'about': Child = About; break;
            case 'posts': Child = PostPage; break;
            default: Child = Home; break;
        }

        return (
            <div>
                <Title/>
                <Header/>
                <div className="container-fluid">
                    <Child/>
                </div>
            </div>
        );
    }
}

function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
