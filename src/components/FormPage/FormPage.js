import React from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";

import Row from "../Row";
import Header from "../Header/Header";

function FormPage({
    title,
    buttonText,
    underButtonText,
    underButtonLink,
    underButtonTextLink,
    children,
}) {
    return (
        <>
            <div className="form-page">
                <Row>
                    <Link to="/" className="form-page__logo" />
                    <h1 className="form-page__title">{title}</h1>
                    <form className="form-page__form" id="spf">
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
                        <Link to={underButtonLink} className="spf__hint-link">
                            {underButtonTextLink}
                        </Link>
                    </p>
                </Row>
            </div>
        </>
    );
}

export default FormPage;
