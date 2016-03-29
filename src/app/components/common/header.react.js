"use strict";
import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Non-o</Link>
                    </div>
                    <ul role="nav" className="nav navbar-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

