import React, { Component} from 'react';

// Stateless, functional component

class NavBar extends Component {
    render() {
        console.log('NavBar - Rendered');
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Unique Items in Cart{' '}
                <span className='badge badge-pill badge-secondary'>
                {this.props.totalCounters}
            </span>
            </a>
        </nav>)
    }
}

export default NavBar;