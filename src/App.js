import React from "react";
import "./App.css";
import Album from "./components/home";
import Login from "./components/login";
import Countdown from "react-countdown";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path={"/loggedIn"}>
              <Album />{" "}
            </Route>
            <Route path={"/"}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
