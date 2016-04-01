import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.react';
import Store from './state/blogStore';
import { Provider } from 'react-redux';
import {fetchMenusAsync, fetchLatestPostAsync} from './state/actions';

class MyRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        Store.dispatch(fetchMenusAsync());
        Store.dispatch(fetchLatestPostAsync());
    }

    render() {
        return (
            <Provider store={Store}>
                <App/>
            </Provider>
        );
    }
}

ReactDom.render((
    <MyRouter />
), document.getElementById('app'));

