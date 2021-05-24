import React, { useState, useEffect } from "react";
import FormPage from "../FormPage/FormPage";
import { useForm } from "react-hook-form";

const FORM_INPUTS = {
    email: "email",
    password: "password",
};

function Login({ handleLogin }) {
    const { register, handleSubmit, formState } = useForm({
        mode: "onChange",
    });
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
    const { errors } = formState;

    useEffect(() => {
        Object.values(FORM_INPUTS).every((input) => {
            // console.log(
            //     "formState.touchedFields:",
            //     Object.keys(formState.touchedFields)
            // );
            return Object.keys(formState.touchedFields).includes(input);
        });
        setButtonIsDisabled(
            !(
                formState.isValid &&
                Object.values(FORM_INPUTS).every((input) =>
                    Object.keys(formState.touchedFields).includes(input)
                )
            )
        );
    }, [formState]);

    function onSubmit(data) {
        const { email, password } = data;
        handleLogin(email, password);
    }

    return (
        <FormPage
            title={"Рады видеть!"}
            buttonText={"Войти"}
            underButtonText={"Ещё не зарегистрированы?"}
            underButtonLink={"/signup"}
            underButtonTextLink={"Регистрация"}
            handleSubmit={handleSubmit(onSubmit)}
            buttonIsDisabled={buttonIsDisabled}
        >
            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    name="email"
                    {...register(FORM_INPUTS.email, {
                        required: {
                            value: true,
                            message: "Поле не может быть пустым",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Введите корректный адрес электронной почты",
                        },
                    })}
                />
                {errors[FORM_INPUTS.email] && (
                    <span className="form-page__error" id="login-email-error">
                        {errors[FORM_INPUTS.email].message}
                    </span>
                )}
            </label>

            <label htmlFor="password" className="form-page__label">
                Пароль
                <input
                    type="password"
                    className="form-page__input"
                    autoComplete="on"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    name="password"
                    {...register(FORM_INPUTS.password, {
                        required: {
                            value: true,
                            message: "Поле не может быть пустым",
                        },
                        minLength: {
                            value: 6,
                            message:
                                "Пароль должен содержать не менее 6 символов",
                        },
                    })}
                />
                {errors[FORM_INPUTS.password] && (
                    <span className="form-page__error">
                        {errors[FORM_INPUTS.password].message}
                    </span>
                )}
            </label>
        </FormPage>
    );
}

export default Login;
