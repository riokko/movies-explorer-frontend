import React, { useContext } from "react";
import Row from "../Row";
import "./Profile.css";
import Header from "../Header/Header";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ loggedIn }) {
    // const currentUser = useContext(CurrentUserContext);
    const [name, setName] = React.useState("Виталий");
    const [email, setEmail] = React.useState("pochta@yandex.ru");

    return (
        <>
            <Header loggedIn={loggedIn} />
            <div className="profile">
                <Row>
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form className="profile__form" id="profile">
                        <label className="profile__label" htmlFor="name">
                            Имя
                            <input
                                className="profile__input"
                                type="text"
                                id="name"
                                value={name}
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <span
                                className="form-page__error"
                                id="login-email-error"
                            >
                                {" "}
                            </span>
                        </label>
                        <hr className="profile__divider" />
                        <label className="profile__label" htmlFor="email">
                            Почта
                            <input
                                className="profile__input"
                                type="text"
                                id="email"
                                value={email}
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <span
                                className="form-page__error"
                                id="login-password-error"
                            >
                                {" "}
                            </span>
                        </label>
                    </form>
                    <div className="profile__buttons">
                        <button
                            className="profile__button"
                            type="submit"
                            form="profile"
                        >
                            Редактировать
                        </button>
                        <button
                            className="profile__button profile__button_type_logout"
                            type="button"
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </Row>
            </div>
        </>
    );
}

export default Profile;
