import React, {useState} from "react";
import {Link} from "react-scroll";
import classNames from "classnames";
import "./menu.scss";

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleBtnMenu = () => {
        setShowMenu(prevState => !prevState)
    }
    const handleHideMenu = () => {
        setShowMenu(false)
    }

    const classWrapButton = classNames("button-menu", {
        "button-show": showMenu
    })
    const classWrapMenu = classNames("menu", {
        "menu-show": showMenu
    })

    return (
        <nav className="menu-navigation">
            <button className={classWrapButton} onClick={handleBtnMenu}>
                <span className="button-menu__burger"/>
                <span className="button-menu__burger"/>
                <span className="button-menu__burger"/>
            </button>
            <ul className={classWrapMenu}>
                <li className="menu__items">
                    <Link className="menu__links"
                          to="service-section"
                          onClick={handleHideMenu}
                          smooth={true}>
                          Serwis
                    </Link>
                </li>
                <li className="menu__items">
                    <Link className="menu__links"
                          to="tires-section"
                          onClick={handleHideMenu}
                          smooth={true}>
                          Opony
                    </Link>
                </li>
                <li className="menu__items">
                    <Link className="menu__links"
                          to="parts-section"
                          onClick={handleHideMenu}
                          smooth={true}>
                          Czesci
                    </Link>
                </li>
                <li className="menu__items">
                    <Link className="menu__links"
                          to="contact-section"
                          onClick={handleHideMenu}
                          smooth={true}>
                          Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Menu;