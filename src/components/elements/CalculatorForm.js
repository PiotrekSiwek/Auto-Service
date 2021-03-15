import React, {useState} from "react";
import classNames from "classnames";
import Pulse from "react-reveal/Pulse";

import "./calculatorForm.scss"

const sumCost = [0];

const CalculatorForm = () => {

    const [carType, setCarType] = useState("Kliknij aby wybrać");
    const [tireType, setTireType] = useState("Kliknij aby wybrać");
    const [tireSize, setTireSize] = useState("Kliknij aby wybrać");
    const [sum, setSum] = useState({
        option1: false,
        option2: false,
        option3: false,
        summary: false
    });
    const [showNumber, setShowNumber] = useState(false);

    const handleCarType = (e) => {
        setCarType(e.target.value);
        if (sum.option2 && sum.option3) {
            sumCost[3] = 100;
        }
        setSum({...sum, option1: true, summary: true})
    }
    const handleTireType = (e) => {
        setTireType(e.target.value);
        if (sum.option1 && sum.option3) {
            sumCost[3] = 100;
        }
        setSum({...sum, option2: true, summary: true})
    }
    const handleTireSize = (e) => {
        setTireSize(e.target.value);
        if (sum.option1 && sum.option2) {
            sumCost[3] = 100;
        }
        setSum({...sum, option3: true, summary: true})
    }
    const handleShowNumber = () => {
        if (!showNumber) {
            return setShowNumber(true)
        } else if (showNumber) {
            return setShowNumber(false)
        }
    }

    const priceCarType = () => {
        let type = 0;
        if (carType === "osobowy") type = 5;
        else if (carType === "dostawczy") type = 10;
        else if (carType === "ciężarowy") type = 15;
        sumCost[0] = type;
        return type;
    }
    const priceTireType = () => {
        let type = 0;
        if (tireType === "aluminiowa") type = 20;
        else if (tireType === "stalowa") type = 10;
        sumCost[1] = type;
        return type;
    }
    const priceTireSize = () => {
        let type = 0;
        if (tireSize === "15'" || tireSize === "16'") type = 10;
        else if (tireSize === "18'" || tireSize === "20'") type = 15;
        else if (tireSize === "22'" || tireSize === "24'") type = 15;
        sumCost[2] = type;
        return type;
    }

    const mobileClassnameWrap = classNames("fas fa-phone-square", {
        "anim": !showNumber
    })

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-box">
                    <div className="select">
                        <label className="select__label" htmlFor="car-type">Wybierz rodzaj auta</label>
                        <select id="car-type"
                                className="select__input"
                                value={carType}
                                onChange={handleCarType}>
                            <option disabled>Kliknij aby wybrać</option>
                            <option>osobowy</option>
                            <option>dostawczy</option>
                            <option>ciężarowy</option>
                        </select>
                    </div>
                    <div className="select">
                        <label className="select__label" htmlFor="tire-type">Wybierz rodzaj felgi</label>
                        <select id="tire-type"
                                className="select__input"
                                value={tireType}
                                onChange={handleTireType}>
                            <option disabled>Kliknij aby wybrać</option>
                            <option>aluminiowa</option>
                            <option>stalowa</option>
                        </select>
                    </div>
                    <div className="select">
                        <label className="select__label" htmlFor="tire-size">Wybierz rozmiar felgi</label>
                        <select id="tire-size"
                                className="select__input"
                                value={tireSize}
                                onChange={handleTireSize}>
                            <option disabled>Kliknij aby wybrać</option>
                            <option>15'</option>
                            <option>16'</option>
                            <option>18'</option>
                            <option>20'</option>
                            <option>22'</option>
                            <option>24'</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="form-summary">
                <h4 className="form-summary__title">Kalkulator wymiany</h4>
                {!sum.summary &&
                <div className="configuration">
                    Skonfiguruj ofertę wybierając wszystkie opcje
                </div>
                }
                {sum.option1 &&
                <Pulse>
                    <p>samochód {carType}: {priceCarType()} zł</p>
                </Pulse>
                }
                {sum.option2 &&
                <Pulse>
                    <p>opona {tireType}: {priceTireType()} zł </p>
                </Pulse>
                }
                {sum.option3 &&
                <Pulse>
                    <p>felga ({tireSize}): {priceTireSize()} zł </p>
                </Pulse>
                }
                {sum.option1 && sum.option2 && sum.option3 &&
                    <>
                    <p>usługa wymiany: 100 zł</p>
                    <i className={mobileClassnameWrap} onClick={handleShowNumber}/>
                    {showNumber && <span className="mobile-number">510-151-701</span>}
                    </>
                }
                <p>suma {sumCost.reduce((a, b) => a + b)} zł</p>
            </div>
        </>
    )
}

export default CalculatorForm;