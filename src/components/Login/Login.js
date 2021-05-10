import React from "react";
import FormPage from "../FormPage/FormPage";

function Login() {
    return (
        <FormPage
            title={"Рады видеть!"}
            buttonText={"Войти"}
            underButtonText={"Ещё не зарегистрированы?"}
            underButtonLink={"/signup"}
            underButtonTextLink={"Регистрация"}
        >
            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    id="login-email"
                    required
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
                    minLength="8"
                />
                <span className="form-page__error" id="login-password-error">
                    {" "}
                </span>
            </label>
        </FormPage>
    );
}

export default Login;
