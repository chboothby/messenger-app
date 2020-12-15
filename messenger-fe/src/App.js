import "./App.css";
import openSocket from "socket.io-client";
import React, { useState, useEffect } from "react";
const socket = openSocket("http://localhost:3000");

function App() {
  useEffect(() => {
    console.log("test");
  });
  return <div className="App"></div>;
}

export default App;
