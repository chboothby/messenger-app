import "./App.css";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, updateLogin] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage updateLogin={updateLogin} /> : null}
    </div>
  );
}

export default App;
