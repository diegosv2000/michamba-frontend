import React from "react";
import { Home, SignIn, SignUp } from "views";
import { renderRoutes } from 'react-router-config';
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        {renderRoutes(routes)}
      </main>
    </div>
  );
}

export default App;
