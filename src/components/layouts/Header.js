import React from "react";
import {Link} from "react-scroll";
import Menu from "../elements/Menu";
import "./header.scss";

const Header = () => {

    return (
        <>
        <div id="header-section"/>
        <header className="header" >
            <div className="container header__box">
                <div className="header__logo">
                    <Link to="header-section" smooth={true} className="logo-link" >
                        <span className="logo-text1">Auto
                             <span className="logo-text2">Serwis</span>
                        </span>
                        <p>Radzymin</p>
                    </Link>
                </div>
                <Menu/>
            </div>
        </header>
        </>
    )
}

export default Header;
