import React from "react";
import "./service.scss";
import Gallery from "../elements/Carousel";
import Fade from 'react-reveal/Fade';

const Service = () => {
    return (
        <section className="service" id="service-section">
            <h2 className="service__title">Sprawdź nas!</h2>
            <div className="service__box">
                <div className="gallery">
                    <Gallery/>
                </div>
                <div className="service-details">
                    <Fade right>
                        <h3 className="service-details__title">5 stanowisk obsługi</h3>
                        <p className="service-details__text">U nas nie będziesz czekał na obsługę. Od kilku lat nas
                            warsztat
                            dynamicznie się rozwija, a wraz z nim grono zadowolonych klietów.
                        </p>
                    </Fade>
                    <Fade right>
                        <h3 className="service-details__title">Najlepsi mechanicy</h3>
                        <p className="service-details__text">Nasi mechanicy to doświadczeni specjaliści i miłośnicy
                            motoryzacji. Oddajesz auto na czas serwisu w sprawdzone ręce.
                        </p>
                    </Fade>
                    <Fade right>
                        <h3 className="service-details__title">Nowoczesne maszyny</h3>
                        <p className="service-details__text">Warsztat dysponuje najnowszym i profesjonalnym
                            oprzyrządowaniem
                            do serwisu aut.
                        </p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default Service;