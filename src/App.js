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
        <Router>
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/loggedin"}>
              <Album />{" "}
            </Route>
            <Route path={process.env.PUBLIC_URL + "/"}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
