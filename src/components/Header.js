import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {

    renderUser(){
        const {userData} = this.props;

        if(null === userData){
            return (<li className="nav-item"><i className="fas fa-spinner fa-spin mt-3"></i></li>);
        }

        return (<li className="nav-item"><Link to="#" className="nav-link disabled" aria-disabled="true">{ userData.name }</Link></li>);
    }

    render() {

        const {isAuthenticated} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/" className="navbar-brand">Blog</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        { isAuthenticated ? this.renderUser() : <li className="nav-item"><Link to="/login" className="nav-link">Sing-in</Link></li>}

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