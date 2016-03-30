"use strict";
import React from 'react';
import {Link} from 'react-router';
import BlogApi from '../../api/blogApi';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { menus: [] };
    }
    
    componentDidMount() {
        this.loadMenus();
    }

    loadMenus(params) {
        // let pageName = params.pageName || 'home.md';

        var menus = BlogApi.getMenus(function(data) {
            this.setState({ menus: data });
        }.bind(this));
    }
    
    
    render() {
        var createMenuMarkup = function(menu){
            return(
                <li key={menu.name} ><Link to={menu.path}>{menu.name}</Link></li>
            );
        };
        
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Non-o</Link>
                    </div>
                    <ul role="nav" className="nav navbar-nav">
                        <li key='postMenuItem' ><Link to='/posts'>POSTS</Link></li>
                        {this.state.menus.map(createMenuMarkup, this)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

