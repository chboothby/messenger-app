import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import Chat from "./Components/Chat";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

function App() {
  const [loggedInUser, setUser] = useState({ name: "harry" });

  socket.on("data", () => {
    socket.emit("data");
  });

  useEffect(() => {});
  return (
    <div className="App">
      <Router>
        <LoginPage setUser={setUser} path="/" />
        <Chat loggedInUser={loggedInUser} path="/chat"></Chat>
      </Router>
    </div>
  );
}

export default App;
