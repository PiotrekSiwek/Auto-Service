import React from "react";
import parts1 from "../../images/parts-car.jpg";
import parts2 from "../../images/brands.png";
import parts3 from "../../images/parts.jpg"

import "./parts.scss";

const Parts = () => {
    return (
        <section className="parts" id="parts-section">
            <h2 className="parts__title">Części</h2>
            <div className="container">
                <div className="parts__box">
                    <div className="column">
                        <img className="column__pic" src={parts1} alt="parts"/>
                        <h4 className="column__title">Producentów Spejcalistycznych</h4>
                        <p className="column__text"> Wielu znanych producentów tworzy także akcesoria samochodowe.
                            Możemy do nich zaliczyć takie firmy jak Bosch, Varta, Philiphs, InterCars i wiele innych. To
                            sprawdzona jakość i rozsądna cena.
                        </p>
                        <button className="column__button">SPRAWDŹ</button>
                    </div>
                    <div className="column">
                        <img className="column__pic" src={parts2} alt="parts"/>
                        <h4 className="column__title">Oryginalne Części</h4>
                        <p className="column__text">Jak zapewne każdy stwierdzi najlepsze, bo takie właśnie produkuje
                            bądź markuje swoją firmą producent naszego auta. Dla wszystkich tych dla których marka ma
                            znaczenie.
                        </p>
                        <button className="column__button">SPRAWDŹ</button>
                    </div>
                    <div className="column">
                        <img className="column__pic" src={parts3} alt="parts"/>
                        <h4 className="column__title">Sprawdzone Zamienniki</h4>
                        <p className="column__text"> Wykorzystujemy części zamienne mniej znanych producentów, które na
                            przestrzeni lat sprawdziły się i co do któych mamy gwarancję niezawodności. Nie mamy w
                            ofercie części ido których nie mam zaufania.
                        </p>
                        <button className="column__button">SPRAWDŹ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Parts;