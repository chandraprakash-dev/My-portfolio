import React from "react";

function Header() {
    return(
        <header>
            <h1>Chandra Prakash</h1>
            <h3>Front end developer</h3>
            <p>Bangalore, India</p>
            <div className="social">
                <a target='_blank' href="https://github.com/chandraprakash-dev"><i className="fab fa-github fa-lg"></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/chandraprakash30/"><i className="fab fa-linkedin-in fa-lg"></i></a>
                {/*<a target='_blank' href=""><i className="far fa-envelope fa-lg"></i></a>*/}
            </div>
            {/*<div>*/}
            {/*    Resume*/}
            {/*</div>*/}
        </header>
    )
}

export default Header;