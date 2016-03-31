import React from 'react';
import {Link} from 'react-router';
import BlogApi from '../../api/blogApi';

const styles = {
    brand:{
        fontSize : 20,
        fontWeight: 'bold',
        padding:'5 0 20 0'
    },
    menus:{
        fontSize : 15,
        padding:'8 0 0 0'
    }
};

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menus: [] };
    }

    componentDidMount() {
        this.loadMenus();
    }

    loadMenus(params) {
        var menus = BlogApi.getMenus(function(data) {
            this.setState({ menus: data });
        }.bind(this));
    }

    render() {

        var createMenuMarkup = function(menu) {
            return (
                <div key={menu.name} style={styles.menus}><Link  Link to={menu.path}>{menu.name}</Link></div>
            );
        };

        return (
            <div>
                <div key='non-o' style={styles.brand}>NON-O</div>
                <div key='posts' style={styles.menus}><Link to='posts'>POSTS</Link></div>
                {this.state.menus.map(createMenuMarkup, this) }
            </div>
        );
    }
}

export default Menu;

