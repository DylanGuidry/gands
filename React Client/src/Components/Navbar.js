import React from "react";
import Logo from "../Images/logo.jpg"
import "../Styles/Navbar.css"


function Navbar() {

    return (
    <>
        <div class='main-container'>
            <a class='logo' ><img src={Logo} width='20%'/></a>
                <div class='navigation'>
                    <div>Recipes</div>
                    <div>About</div>
                    <div>Search</div>
                    <input type="text" placeholder="Search.."></input>
                </div>
        </div>
    </>
    )
}

export default Navbar