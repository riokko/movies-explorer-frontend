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
                    id="name"
                    required
                />
            </label>
            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    id="email"
                    required
                />
            </label>

            <label htmlFor="password" className="form-page__label">
                Пароль
                <input
                    type="password"
                    className="form-page__input"
                    id="password"
                    autoComplete="on"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    required
                    minLength="8"
                />
            </label>
        </FormPage>
    );
}

export default Register;
