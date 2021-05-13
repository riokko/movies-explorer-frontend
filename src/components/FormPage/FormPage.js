import React from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";

import Row from "../Row";

function FormPage({
    title,
    buttonText,
    underButtonText,
    underButtonLink,
    underButtonTextLink,
    children,
    handleSubmit
}) {



    return (
        <div className="form-page">
            <Row>
                <div className="form-page__content">
                    <Link to="/">
                        <div className="form-page__logo" />
                    </Link>
                    <h1 className="form-page__title">{title}</h1>
                    <div className="form-page__form-content">
                        <form className="form-page__form" id="form-page" onSubmit={handleSubmit}>
                            {children}
                        </form>
                        <button
                            form="form-page"
                            className="form-page__button"
                            type="submit"
                        >
                            {buttonText}
                        </button>
                        <p className="form-page__under-button-text">
                            {underButtonText}{" "}
                            <Link
                                to={underButtonLink}
                                className="form-page__under-button-link"
                            >
                                {underButtonTextLink}
                            </Link>
                        </p>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default FormPage;
