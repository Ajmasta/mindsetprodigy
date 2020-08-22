import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import intro from "../Intro.mp3";
import { IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
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
  let [loaded, setLoaded] = useState(false);
  let [progress, setProgress] = useState(0);
  let [index, setIndex] = useState(0);
  let [ended, setEnded] = useState(false);
  let [password, setPassword] = useState("");
  let [hiddenLoad, setHiddenLoad] = useState(false);
  window.onload = () => setLoaded(true);
  if (loggedin) {
    setTimeout(() => setIndex(index + 1), 10500);
    setTimeout(() => {
      document.querySelector("#loginTitleOne") &&
        document.querySelector("#loginTitleOne").classList.remove("hidden");
    }, 5000);
    setTimeout(() => {
      document.querySelector("#loginYearTwo") &&
        document.querySelector("#loginYearTwo").classList.remove("hidden");
      setTimeout(() => {
        setHiddenLoad(true);
      }, 4500);
    }, 41000);
    if (hiddenLoad) setTimeout(() => setProgress(progress + 0.3333), 100);
    audio.play();
    audio.onended = () => setEnded(true);
  }
  

  return (
    <body id="loginBody">
      <audio src={intro} autoplay id="introAudio">
        <source src={intro}></source>
      </audio>
      <div class="container">
        <div class="loginPage" style={{ backgroundSize: "cover" }}>
          <div className={loggedin ? "login1 slideUp" : "login1"}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password === process.env.REACT_APP_LOGIN_PASSWORD) {
                  setLoggedIn(true);
                  audio.play();
                } else {
                  setLoggedIn(false);
                }
              }}
            >
              <div className="loginInfos">
                <input
                  id="passwordInput"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <IconButton id="loginIcon" type="submit/Play">
                  {" "}
                  <PlayArrowIcon />
                </IconButton>
              </div>
            </form>
          </div>
          <div className={loggedin ? "login2 slideDown" : "login2"}></div>
          {loggedin && loaded ? (
            <>
              <div class="loading-dots">
                <h1 id="loadingText">{loadingSentences[index]}</h1>
                <h1 class="dot one">.</h1>
                <h1 class="dot two">.</h1>
                <h1 class="dot three">.</h1>
              </div>
              <p></p>
              <h1 id="loginYearOne">2017</h1>
              <h3 id="loginTitleOne" className="hidden">
                {" "}
                MINDSET OF A PRODIGY
              </h3>
              <h3 id="loginYearTwo" className="hidden">
                2020
              </h3>
              {hiddenLoad ? (
                <CircularProgress
                  color="primary"
                  variant="determinate"
                  id="loadingIcon"
                  className="hidden"
                  value={progress}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}{" "}
          {ended || progress >= 86 ? <Redirect to="/loggedin" /> : ""}
        </div>
      </div>
    </body>
  );
};
export default Login;
