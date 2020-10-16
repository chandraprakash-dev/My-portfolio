import React from "react";

function Header() {
    return(
        <header>
            <h1>Chandra Prakash</h1>
            <h3>Front end developer</h3>
            <p>Bangalore, India</p>
            <div className="social">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="far fa-envelope"></i>
            </div>
            <div>
                Resume
            </div>
        </header>
    )
}

export default Header;