import React from "react";
import { Link } from "react-router-dom";
import amLogo from "../../public/icons/am_logo.jpg"

function Navbar() {
    return (
        <div className="navbar">
            <div id="nav_logo_am_home">
                <Link to='/'>
                    <img id='am_logo' src={amLogo} alt='am_logo'></img>
                </Link>
            </div>
            <div className="nav_links">
                <Link className="nav_link" to='/Gallery'><h3>Gallery</h3></Link>
                <Link className="nav_link" to='/Delivery'><h3>Delivery</h3></Link>
                <Link className="nav_link" to='/Location'><h3>Location</h3></Link>
                <Link className="nav_link" to='/Contacts'><h3>Contacts</h3></Link>
                <Link className="nav_link" to='/Login'><h3>Login / Sign up</h3></Link>
            </div>
        </div>
    );
};

export default Navbar;