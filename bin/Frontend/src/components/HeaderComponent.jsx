import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <a className="text-light"><div><h3>Car Parking App</h3></div></a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;