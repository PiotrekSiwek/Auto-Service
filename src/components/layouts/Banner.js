import React from "react";
import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import "./banner.scss";

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-box">
                <div className="banner-wrap">
                    <Slide top>
                        <h1 className="banner__title">Serwis wszystkich </h1>
                        <p className="banner__title"> marek</p>
                        <p className="banner__text">
                            Sprawimy, że pokochasz swój samochód</p>
                        <Link className="banner__btn"
                              to={"service-section"}
                              smooth={true}>
                              Zapraszamy
                        </Link>
                    </Slide>
                </div>
            </div>
            <Fade left>
                <div className="banner-message">
                    <Link className="link" to="service-section" smooth={true}>
                        <span className="banner-icons ico1">
                            <i className="fas fa-tools"/>
                            Solidny i fachowy serwis
                        </span>
                    </Link>
                    <Link className="link" to="parts-section" smooth={true}>
                        <span className="banner-icons ico2">
                            <i className="fas fa-car"/>
                            Tylko najlpesze czesci i akcesoria
                        </span>
                    </Link>
                    <Link className="link" to="tires-section" smooth={true}>
                        <span className="banner-icons ico3">
                            <i className="fas fa-road"/>
                            Pewność i bezpieczeństwo na drodze
                        </span>
                    </Link>
                </div>
            </Fade>
        </section>
    )
}

export default Banner;