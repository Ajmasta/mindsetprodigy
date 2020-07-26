import React, { useEffect } from "react";
import moment from "moment";
import blue from "@material-ui/core/colors/blue";
const AlbumCountdown = () => {
  const mom = moment("20200802 00:00:00", "YYYYMMDD HH:mm:ss");
  mom.diff(moment(), "s");

  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = mom.diff(moment(), "ms");
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector(".days");
      const hoursSpan = clock.querySelector(".hours");
      const minutesSpan = clock.querySelector(".minutes");
      const secondsSpan = clock.querySelector(".seconds");

      function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    initializeClock("clockdiv", deadline);
  }, [deadline, mom]);

  return (
    <>
      <div id="clockdiv">
        <span className="days"></span>
        <span className="smalltext"> </span>

        <span className="hours"></span>
        <span className="smalltext"> </span>

        <span className="minutes"></span>
        <span className="smalltext"> </span>

        <span className="seconds"></span>
        <span className="smalltext"> </span>
      </div>
    </>
  );
};

export default AlbumCountdown;
