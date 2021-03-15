import React from "react";
import ContactForm from "../elements/ContactForm";
import Weather from "../elements/Weather";
import "./contact.scss";

const Contact = () => {

    return (
        <section className="contact" id="contact-section">
            <div className="container">
                <h2 className="contact__title"> Kontakt</h2>
                <div className="contact__box">
                    <ContactForm/>
                    <Weather/>
                </div>
            </div>
        </section>
    )
}
export default Contact;