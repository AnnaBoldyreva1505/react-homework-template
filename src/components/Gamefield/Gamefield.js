import { useEffect, useState } from "react";
import cx from "classnames";
import Windmill from "../Windmill/Windmill";
import Sky from "../Sky/Sky";
import "./Gamefield.style.css";

function Gamefield(props) {
  const [millCounter, setCounter] = useState(0);
  const [userTimer, setTimer] = useState(0);
  const [lamp, setLamp] = useState(false);

  useEffect(() => {
    setLamp(millCounter >= 2);
  }, [millCounter]);

  useEffect(() => {
    let id = null;
    if (lamp) {
      id = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
      setTimer(0);
    };
  }, [lamp]);

  const spinMill = () => {
    setCounter((counter) => counter + 1);
  };

  const stopMill = () => {
    setCounter((counter) => counter - 1);
  };

  const lampCn = cx("lamp", {
    isOn: lamp
  });

  return (
    <main className="game-field">
      <Sky />
      <section className="grass">
        <div className="mills">
          <Windmill spin={spinMill} stop={stopMill} />
          <Windmill spin={spinMill} stop={stopMill} />
          <Windmill spin={spinMill} stop={stopMill} />
        </div>
      </section>
      <section className={lampCn}></section>
      <section className="timer">{userTimer}</section>
    </main>
  );
}

export default Gamefield;
