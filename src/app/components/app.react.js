"use strict";
import React from 'react';
import { connect } from 'react-redux'
import MenuListContainer from './menu/menuListContainer';
import PageContainer from './pages/pageContainer';
import PostContainer from './post/postContainer';

class App extends React.Component {

    constructor(props) {
        super(props);
    }


    getContainerToRender() {
        
        if (this.props.display == 'POSTS') {
            return (<PostContainer/>);
        }
        if (this.props.display == 'PAGE') {
            return (<PageContainer/>);
        }
        else { // for POST display but will display only one post
            return (<PostContainer/>);
        }
    }


    render() {
        return (
            <div className='app'>
                <div className='menu'>
                    <MenuListContainer />
                </div>
                <div className='content'>
                    {this.getContainerToRender()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.display,
    }
};

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer;