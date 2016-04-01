import React from 'react';

let PropTypes = React.PropTypes;

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.onClick} className='menuItem'>{this.props.name}</div>
        );
    }
}


MenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired,
}

export default MenuItem;

