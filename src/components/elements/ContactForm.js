import React, {useState} from "react";
import classNames from "classnames";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./contactForm.scss"

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [check, setCheck] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);

    const errors = {
        nameError: false,
        emailError: false,
        messageError: false,
        checkError: false
    }
    const messages = {
        name: "musi zawierać przynajmniej dwie litery",
        email: "musi się składać z minimum 4 znaków i zawierać @",
        message: "musi zawierać minimum 10 znaków",
        check: "*"
    }
    const confirmMailClassname = classNames("message-sent", {
        "show-confirm": !confirmation
    })

    const handleName = (e) => setName(e.target.value);
    const handleMail = (e) => setEmail(e.target.value);
    const handleMessage = (e) => setMessage(e.target.value);
    const handleCheck = (e) => setCheck(e.target.checked);
    const handleCloseMessage = () => setConfirmation(false);
    const handleSubmit = () => {
        if (name.length < 3) {
            errors.nameError = true;
            setError1(true);
        } else {
            errors.nameError = false;
            setError1(false);
        }
        if (!email.includes("@") || email.length < 5) {
            errors.emailError = true;
            setError2(true)
        } else {
            errors.emailError = false;
            setError2(false)
        }
        if (message.length < 11) {
            errors.messageError = true;
            setError3(true)
        } else {
            errors.messageError = false;
            setError3(false)
        }
        if (!check) {
            errors.checkError = true;
            setError4(true)
        } else {
            errors.checkError = false;
            setError4(false)
        }
        if (!errors.nameError && !errors.emailError && !errors.messageError && !errors.checkError) {
            setConfirmation(true);
            setName("");
            setEmail("");
            setMessage("");
            setCheck(false);
        }
    }

    return (
        <Fade left>
            <form className="contact-form"
                  onSubmit={event => event.preventDefault()}>
                <h3 className="contact-form__title">
                    Napisz do nas lub zadzwoń!
                </h3>
                <div className="contact-form__mobile">
                    <i className="fas fa-phone"/>510 151 701
                </div>
                <Zoom bottom>
                    <div className={confirmMailClassname}>
                        <button className="message-btn"
                                onClick={handleCloseMessage}>
                            X
                        </button>
                        Wiadomość wysłana!
                    </div>
                </Zoom>
                <div className="contact-form__wrap">
                    <label className="contact-form__label">
                        imię {error1 && <span className="contact-form__message">{messages.name}</span>}
                    </label>
                    <input className="contact-form__input"
                           placeholder="imię"
                           type="text"
                           value={name}
                           onChange={handleName}/>
                </div>
                <div className="contact-form__wrap">
                    <label className="contact-form__label">
                        e-mail {error2 && <span className="contact-form__message">{messages.email}</span>}
                    </label>
                    <input className="contact-form__input"
                           placeholder="adres e-mail"
                           type="email"
                           value={email}
                           onChange={handleMail}/>
                </div>
                <div className="contact-form__wrap">
                    <label className="contact-form__label">
                        Wiadomość {error3 && <span className="contact-form__message">{messages.message}</span>}
                    </label>
                    <textarea className="contact-form__textarea"
                              placeholder="treść wiadomości"
                              value={message}
                              onChange={handleMessage}/>
                </div>
                <div className="contact-form__checkbox-wrap">
                    {error4 && <span className="contact-form__checkbox-message">{messages.check}</span>}
                    <input type="checkbox"
                           checked={check}
                           onChange={handleCheck}/>
                    <label className="contact-form__checkbox-label">Wyrażam zgodę na przetwarzanie przez Serwis
                        moich danych osobowych zawartych w
                        formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.</label>
                </div>
                <button className="contact-form__btn" onClick={handleSubmit}> Wyślij</button>
            </form>
        </Fade>
    )
}

export default ContactForm;