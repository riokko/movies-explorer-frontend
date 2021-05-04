import React from "react";
import Row from "../Row";
import "./Promo.css";

function Promo() {
    return (
        <div className="promo">
            <Row>
                <div className="promo__content">
                    <div className="promo__logo" />
                    <div className="promo__content-details">
                        <h1 className="promo__title">{`Учебный проект студента факультета Веб\u2011разработки.`}</h1>
                        <h3 className="promo__subtitle">
                            Листайте ниже, чтобы узнать больше про этот проект и
                            его создателя.
                        </h3>
                        <button className="promo__button" type="button">
                            Узнать больше
                        </button>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Promo;
