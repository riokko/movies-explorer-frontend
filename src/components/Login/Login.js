import React, { useState } from "react";
import FormPage from "../FormPage/FormPage";

function Login({ handleLogin }) {
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

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = data;

        if (!email || !password) {
            return;
        }
        handleLogin(email, password);
    }

    return (
        <FormPage
            title={"Рады видеть!"}
            buttonText={"Войти"}
            underButtonText={"Ещё не зарегистрированы?"}
            underButtonLink={"/signup"}
            underButtonTextLink={"Регистрация"}
            handleSubmit={handleSubmit}
        >
            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    id="login-email"
                    required
                    name="email"
                    onChange={handleChange}
                />
                <span className="form-page__error" id="login-email-error">
                    {" "}
                </span>
            </label>

            <label htmlFor="password" className="form-page__label">
                Пароль
                <input
                    type="password"
                    className="form-page__input"
                    id="login-password"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    required
                    minLength="2"
                    name="password"
                    onChange={handleChange}
                />
                <span className="form-page__error" id="login-password-error">
                    {" "}
                </span>
            </label>
        </FormPage>
    );
}

export default Login;
