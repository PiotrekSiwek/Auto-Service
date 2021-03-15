import React from "react";
import CalculatorForm from "../elements/CalculatorForm";

import "./tires.scss";

const Tires = () => {
    return (
        <section className="tires" id="tires-section">
            <div className="container">
                <h2 className="tires__title"> Sezonowa Wymiana Opon</h2>
                <div className="tires__offer ">
                    <h3 className="offer-title">Sprawdź koszt usługi i zrezerwuj termin</h3>
                    <div className="offer-box">
                        <CalculatorForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tires;