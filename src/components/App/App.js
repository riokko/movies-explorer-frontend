import React, { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";

function App() {
    // переключение состояния залогина
    const [loggedIn, setLoggedIn] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className="page__content">
            <Header loggedIn={loggedIn} />
            {loggedIn ? <Main /> : <Movies />}
            <Footer />
        </div>
    );
}

export default App;

// TODO Шапка на главной меняется в зависимости от состояния логина
