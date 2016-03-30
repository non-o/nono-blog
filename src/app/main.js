import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Page from './components/pages/page.react';
import PostPage from './components/post/postPage.react';
import App from './components/app.react';

class MyRouter extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Page}/>
                    <Route path="test-blog/pages/:pageName" component={Page}/>
                    <Route path="posts" component={PostPage}/>
                </Route>
            </Router>
        );
    }
}

ReactDom.render((
    <MyRouter />
), document.getElementById('app'));

