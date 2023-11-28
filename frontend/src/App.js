import React from "react";
import Login from "./component/login/login";
import Signup from "./component/signUp/signup";

function App() {
  return (
    <div className="App">
      <h1>Front Page</h1>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;