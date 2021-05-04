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
                    className="form-page__label"
                    placeholder="email@yandex.com"
                    id="email"
                    required
                />
            </label>

            <label htmlFor="password" className="form-page__label">
                Пароль
                <input
                    type="password"
                    className="form-page__label"
                    id="password"
                    autoComplete="on"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    required
                    minLength="4"
                />
            </label>
        </FormPage>
    );
}

export default Login;
