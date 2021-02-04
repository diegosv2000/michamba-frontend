import React from "react";
import { Header } from "components";
import { Home, SignIn, SignUp } from "views";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Home /> */}
        <SignUp />
      </main>
    </div>
  );
}

export default App;
