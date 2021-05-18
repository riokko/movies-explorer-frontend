import React, { useContext, useEffect, useState } from "react";
import Row from "../Row";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";

const FORM_INPUTS = {
    name: "name",
    email: "email",
};

function Profile({
    loggedIn,
    updateUserData,
    message,
    handleLogout,
}) {
    const {currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const  {email, name} = currentUser
    const [inEditing, setInEditing] = useState(false);

    const { register, handleSubmit, formState } = useForm({
        mode: "onChange",
        defaultValues: {
            name: name,
            email: email,
        },
    });
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
    const { errors } = formState;

    function handleOpenEditingForm() {
        setInEditing(true);
    }

    function onSubmit(data) {
        updateUserData(data);
    }

    useEffect(() => {
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
        <>
            <Header loggedIn={loggedIn} />
            <div className="profile">
                <Row>
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form
                        className="profile__form"
                        id="profile"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label className="profile__label">
                            Имя
                            <input
                                disabled={!inEditing}
                                className="profile__input"
                                type="text"
                                onChange={(e) => {
                                    setCurrentUser({...currentUser, name: e.target.value})
                                }}
                                defaultValue={name}
                                {...register(FORM_INPUTS.name, {
                                    required: {
                                        value: true,
                                        message: "Поле не может быть пустым",
                                    },
                                    pattern: {
                                        value: /^[а-яёa-z\s-]+$/i,
                                        message:
                                            "Поле имя может содержать только буквы или дефис",
                                    },
                                })}
                            />
                        </label>
                        {errors[FORM_INPUTS.name] && (
                            <span className="profile__error">
                                {errors[FORM_INPUTS.name].message}
                            </span>
                        )}
                        <hr className="profile__divider" />
                        <label className="profile__label">
                            E-mail
                            <input
                                disabled={!inEditing}
                                className="profile__input"
                                type="email"
                                onChange={(e) => {
                                    setCurrentUser({...currentUser, email: e.target.value})
                                }}
                                defaultValue={email}
                                {...register(FORM_INPUTS.email, {
                                    required: {
                                        value: true,
                                        message: "Поле не может быть пустым",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message:
                                            "Введите корректный адрес электронной почты",
                                    },
                                })}
                            />
                        </label>
                        {errors[FORM_INPUTS.email] && (
                            <span className="profile__error">
                                {errors[FORM_INPUTS.email].message}
                            </span>
                        )}
                    </form>
                    <div className="profile__buttons">
                        {inEditing ? (
                            <>
                                <span className="profile__status-message">
                                    {message}
                                </span>
                                <button
                                    className="profile__button_type_save"
                                    disabled={buttonIsDisabled}
                                    form="profile"
                                    type="submit"
                                >
                                    Сохранить
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="profile__button"
                                    type="button"
                                    onClick={handleOpenEditingForm}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className="profile__button profile__button_type_logout"
                                    type="button"
                                    onClick={handleLogout}
                                >
                                    Выйти из аккаунта
                                </button>
                            </>
                        )}
                    </div>
                </Row>
            </div>
        </>
    );
}

export default Profile;
