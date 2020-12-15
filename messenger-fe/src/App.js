import "./App.css";

import LoginPage from "./Components/LoginPage";
import openSocket from "socket.io-client";
import React, { useState, useEffect } from "react";
const socket = openSocket("http://localhost:3000");

function App() {
  const [isLoggedIn, updateLogin] = useState(false);
  
 useEffect(() => {
    console.log("test");
  });
  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage updateLogin={updateLogin} /> : null}
    </div>
  );

}

export default App;
