import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import intro from "../Intro.mp3";
const Login = () => {
  let loadingSentences = [
    "Entering the Hyperbolic Time Chamber",
    "Resurrecting Goku",
    "Collecting the Dragon Balls",
    "Cleaning Up the Hyperbolic Time Chamber",
    "Holding the tower like Dende",
    "Asking Badidi for the M ",
    "Exiting Hyperbolic Time Chamber",
  ];
  const audio = document.querySelector("#introAudio");
  let [loggedin, setLoggedIn] = useState(false);
  let [progress, setProgress] = useState(0);
  let [index, setIndex] = useState(0);
  let [ended, setEnded] = useState(false);
  if (loggedin) {
    setTimeout(() => setProgress(progress + 0.135), 100);
    setTimeout(() => setIndex(index + 1), 10500);
    audio.play();
    audio.onended = () => setEnded(true);
  }
  console.log(progress);

  return (
    <>
      <audio src={intro} autoplay id="introAudio">
        <source src={intro}></source>
      </audio>
      <div class="container">
        <div class="loginPage" style={{ backgroundSize: "cover" }}>
          <div className={loggedin ? "login1 slideUp" : "login1"}>
            <input
              id="passwordInput"
              type="password"
              onChange={(e) => {
                e.target.value === process.env.REACT_APP_LOGIN_PASSWORD
                  ? setLoggedIn(true)
                  : setLoggedIn(false);
              }}
            />
          </div>
          <div className={loggedin ? "login2 slideDown" : "login2"}></div>
          {loggedin ? (
            <>
              <div class="loading-dots">
                <h1 id="loadingText">{loadingSentences[index]}</h1>
                <h1 class="dot one">.</h1>
                <h1 class="dot two">.</h1>
                <h1 class="dot three">.</h1>
              </div>
              <p></p>
              <h1 id="loginYearOne">2017</h1>
              <h3 id="loginTitleOne">MINDSET OF A PRODIGY</h3>
              <h3 id="loginYearTwo">2020</h3>
              <CircularProgress
                color="primary"
                variant="determinate"
                id="loadingIcon"
                value={progress}
              />
            </>
          ) : (
            ""
          )}{" "}
          {ended || progress >= 96 ? <Redirect to="/loggedin" /> : ""}
        </div>
      </div>
    </>
  );
};
export default Login;
