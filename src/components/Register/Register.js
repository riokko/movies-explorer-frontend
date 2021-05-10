import React from "react";
import FormPage from "../FormPage/FormPage";

function Register() {
    return (
        <FormPage
            title={"Добро пожаловать!"}
            buttonText={"Зарегистрироваться"}
            underButtonText={"Уже зарегистрированы?"}
            underButtonLink={"/signin"}
            underButtonTextLink={"Войти"}
        >
            <label htmlFor="name" className="form-page__label">
                Имя
                <input
                    type="text"
                    className="form-page__input"
                    placeholder="Виталий"
                    id="reg-name"
                    required
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
                />
                <span className="form-page__error" id="reg-password-error">
                    {" "}
                </span>
            </label>
        </FormPage>
    );
}

export default Register;
