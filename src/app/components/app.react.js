"use strict";
import React from 'react';
import { connect } from 'react-redux'
import MenuListContainer from './common/menuListContainer';
import PageContainer from './pages/pageContainer';
import PostContainer from './post/postContainer';

// const style = {
//     menu: {
//         display: 'inline-block',
//         position: 'fixed',
//         backgroundColor: '#888',
//         float: 'left',
//         width: 150,
//         height: '100%',
//         paddingLeft: 8,
//         borderRightStyle: 'solid',
//         borderRightColor: '#777',
//         borderRightWidth: 2,
//     },
//     content: {
//         display: 'inline-block',
//         width: '100%',
//         padding: '0 0 0 172'
//     }
// }

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
        else {
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