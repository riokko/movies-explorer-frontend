import React, { useEffect, useState } from "react";
import FormPage from "../FormPage/FormPage";
import { useForm } from "react-hook-form";

const FORM_INPUTS = {
    name: "name",
    email: "email",
    password: "password",
};

function Register({ handleRegister, handleLogin }) {
    const { register, handleSubmit, formState } = useForm({
        mode: "onChange",
    });
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
    const { errors } = formState;

    function onSubmit(data) {
        const { name, email, password } = data;
        handleRegister(name, email, password).then(() => {
            handleLogin(email, password);
        });
    }

    useEffect(() => {
        Object.values(FORM_INPUTS).every((input) => {
            console.log(
                "formState.touchedFields:",
                Object.keys(formState.touchedFields)
            );
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

    return (
        <FormPage
            title={"Добро пожаловать!"}
            buttonText={"Зарегистрироваться"}
            underButtonText={"Уже зарегистрированы?"}
            underButtonLink={"/signin"}
            underButtonTextLink={"Войти"}
            handleSubmit={handleSubmit(onSubmit)}
            buttonDisabled={buttonIsDisabled}
        >
            <label htmlFor="name" className="form-page__label">
                Имя
                <input
                    type="text"
                    className="form-page__input"
                    placeholder="Виталий"
                    name="name"
                    {...register(FORM_INPUTS.name, {
                        required: {
                            value: true,
                            message: "Поле не может быть пустым",
                        },
                        pattern: {
                            value: /^[а-яёa-z\s\-]+$/i,
                            message:
                                "Поле имя может содержать только буквы или дефис",
                        },
                    })}
                />
                {errors[FORM_INPUTS.name] && (
                    <span className="form-page__error">
                        {errors[FORM_INPUTS.name].message}
                    </span>
                )}
            </label>

            <label htmlFor="email" className="form-page__label">
                E-mail
                <input
                    type="email"
                    className="form-page__input"
                    placeholder="pochta@yandex.ru"
                    {...register(FORM_INPUTS.email, {
                        required: {
                            value: true,
                            message: "Поле не может быть пустым",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid e-mail address",
                        },
                    })}
                />
                {errors[FORM_INPUTS.email] && (
                    <span className="form-page__error">
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

export default Register;
