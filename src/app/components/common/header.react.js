"use strict";
import React from 'react';
import Title from './title.react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#posts">Posts</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

