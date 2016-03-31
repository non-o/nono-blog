"use strict";
import React from 'react';
import Menu from './common/menu.react';

const style = {
    menu: {
        display:'inline-block',
        position:'fixed',
        backgroundColor:'#888',
        float: 'left',
        width: 150,
        height:'100%',
        paddingLeft:8,
        borderRightStyle: 'solid',
        borderRightColor: '#777',
        borderRightWidth: 2,
    },
    content: {
        display:'inline-block',
        width:'100%',
        padding:'0 0 0 172'
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        return (
            <div>
                <div style={style.menu}>
                    <Menu />
                </div>
                <div style={style.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;