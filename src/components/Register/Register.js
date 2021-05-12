import React, { useState } from "react";
import FormPage from "../FormPage/FormPage";

function Register() {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    function handleRegister() {

    }


    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = data;
        handleRegister(email, password);
    }

    return (
        <FormPage
            title={"Добро пожаловать!"}
            buttonText={"Зарегистрироваться"}
            underButtonText={"Уже зарегистрированы?"}
            underButtonLink={"/signin"}
            underButtonTextLink={"Войти"}
            handleSubmit={handleSubmit}
        >
            <label htmlFor="name" className="form-page__label">
                Имя
                <input
                    type="text"
                    className="form-page__input"
                    placeholder="Виталий"
                    id="reg-name"
                    required
                    onChange={handleChange}
                />
                <span className="form-page__error" id="reg-name-error">
                    {" "}
                </span>
            </label>

            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    id="reg-email"
                    required
                    onChange={handleChange}
                />
                <span className="form-page__error" id="reg-email-error">
                    {" "}
                </span>
            </label>

            <label htmlFor="password" className="form-page__label">
                Пароль
                <input
                    type="password"
                    className="form-page__input"
                    id="reg-password"
                    autoComplete="on"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    required
                    minLength="8"
                    onChange={handleChange}
                />
                <span className="form-page__error" id="reg-password-error">
                    {" "}
                </span>
            </label>
        </FormPage>
    );
}

export default Register;
