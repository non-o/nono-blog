import React from 'react';
import MenuItem from './menuItem.react';

var PropTypes = React.PropTypes;


class MenuList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        var createMenuMarkup = function(menu) {
            return (
               <MenuItem key={menu.name} {...menu} onClick={() => this.props.onMenuClick(menu.path)}/>
            );
        };
        
        return (
            <div className='menuList'>
                <div className='brand' onClick={() => this.props.onBrandClick()}>NON-O</div>
                {this.props.menus.map(createMenuMarkup, this)}
                <div className='menuInfo'>{this.props.menuInfo}</div>
            </div>
        );
    }
}

MenuList.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onMenuClick: PropTypes.func.isRequired,
    onBrandClick: PropTypes.func.isRequired,
}

export default MenuList;



