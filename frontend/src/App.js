import React from "react";
// import Navigation from "./component/navbar/navigation";
import Login from "./component/login/login";
import Signup from "./component/signUp/signup";

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>

      {/* <Navigation /> */}
    </div>
  );
}

export default App;