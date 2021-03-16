import React, {useState, useEffect} from "react";
import Fade from 'react-reveal/Fade';

import "./weather.scss";

const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

const Weather = () => {

    const [weather, setWeather] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}q=Radzymin&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Fade right>
            <div className="weather">
                <h3 className="weather__title"> Przyjedź do nas!</h3>
                <p className="address"> Jesteśmy w Radzyminie przy ulicy Polnej 4</p>
                <a className="navi" href="https://goo.gl/maps/WGwephUF8QeAsSeJ8">
                    <i className="fas fa-map-marker-alt"/>
                </a>
                <p className="weather__date">{days[new Date().getDay()]}, {new Date().getDate()} {months[new Date().getMonth()]}</p>
                <p className="weather__subtitle">Aktualne warunki pogodowe:</p>

                {weather &&
                <div className="weather__box">
                    <img className="weather__image"
                         alt=""
                         src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    <p className="weather__temp upper">  {Math.floor(weather.main.temp)} &deg; C </p>
                    <p className="weather__temp"> Temperatura
                        odczuwalna: {Math.floor(weather.main.feels_like)} &deg; C </p>
                    <p className="weather__temp"> Wilgotność: {Math.floor(weather.main.humidity)} % </p>
                    <p className="weather__temp"> Ciśnienie: {Math.floor(weather.main.pressure)} hPa </p>
                    <p className="weather__temp"> Prędkość wiatru: {Math.floor(weather.wind.speed)} m/s </p>
                </div>
                }
            </div>
        </Fade>
    )
}
export default Weather;