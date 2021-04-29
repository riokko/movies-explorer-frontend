import React from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
    const loggedIn = true;
    // const loggedIn = false;
  return (
    <div className="page__content">
      <Header loggedIn={loggedIn} />
      <Main loggedIn={loggedIn} />
      <Footer />
    </div>
  );
}

export default App;
