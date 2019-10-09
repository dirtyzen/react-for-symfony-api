import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/" className="navbar-brand">Blog</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Sing-in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Link</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Header;