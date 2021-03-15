import React from "react";
import "./footer.scss"

const Footer = () => {
    return(
        <footer className="footer">
            <div>
                <div className="footer__box">
                    <div className="company-address">
                    <p className="company-data">Auto <span>Serwis</span> Radzymin</p>
                    <p className="company-data">ul. Polna 4</p>
                    <p className="company-data">05-520 Radzymin</p>
                    </div>
                    <div className="company-hours">
                        <p className="company-data">Godziny otwarcia</p>
                        <p className="company-data">Pon - Pt: 9:00 - 21:00</p>
                        <p className="company-data">Sob: 9:00 - 18:00</p>
                    </div>
                    <div className="company-phone">
                        <p className="company-data">
                            <i className="fas fa-phone-alt"/>+48 510 151 701
                        </p>
                    </div>
                    <div className="company-media">
                        <i className="fab fa-facebook"/>
                        <i className="fab fa-twitter"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;