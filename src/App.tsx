import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import SearchBarWithJobBar from "./SearchBarWithJobBar";

function App() {
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
    company_name: "",
    logo: "",
  });
  const [loggedAsAdmin, setLoggedAsAdmin] = useState(false);
  return (
    <div id="Index">
      <div id="upperBackground">
        <Header
          setLoggedUser={setLoggedUser}
          loggedUser={loggedUser}
          loggedAsAdmin={loggedAsAdmin}
          setLoggedAsAdmin={setLoggedAsAdmin}
        ></Header>
      </div>
      <SearchBarWithJobBar
        loggedUser={loggedUser.company_name}
        loggedAsAdmin={loggedAsAdmin}
      ></SearchBarWithJobBar>
    </div>
  );
}

export default App;
