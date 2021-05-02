import React, {useState} from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
    // переключение состояния залогина
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);


  return (
    <div className="page__content">
      <Header loggedIn={loggedIn} />
      <Main loggedIn={loggedIn} />
      <Footer />
    </div>
  );
}

export default App;
