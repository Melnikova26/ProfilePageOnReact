import { useEffect, useState, useMemo } from "react";
import Subheader from "../subheader/Subheader";
import st from "./time-page.module.scss";

function TimePage(props) {
  const { startTime } = props;
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function getTime() {
    const total = Date.parse(currentTime) - Date.parse(startTime),
      hours = Math.floor((+total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((+total / (1000 * 60)) % 60),
      seconds = Math.floor((+total / 1000) % 60);

    return {
      hours: getZero(hours),
      minutes: getZero(minutes),
      seconds: getZero(seconds),
    };
  }
  const total = useMemo(() => {
    return getTime();
  }, [currentTime]);

  return (
    <div className="wrapper">
      <div className={`${st.time} w-100`}>
        <Subheader descr="Timer" />
        <div
          className={st.time__main}
        >{`${total.hours}:${total.minutes}:${total.seconds}`}</div>
      </div>
    </div>
  );
}
export default TimePage;
