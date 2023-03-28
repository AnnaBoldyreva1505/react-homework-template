import { useEffect, useState } from "react";
import cx from "classnames";
import "./Windmill.style.css";

function Windmill(props) {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    // Функция, которая прекращает вращение через 10 секунд
    if (spin) {
      setTimeout(() => {
        props.stop();
        setSpin(false);
      }, 10000);
    }
  }, [spin]);

  //Функция, которая поможет нашему пропеллеру динамически вращаться
  const setSpinner = () => {
    if (!spin) {
      props.spin();
      setSpin(true);
    }
  };

  const cn = cx("vanes", {
    spin
  });

  return (
    <div className="windmill">
      <div className={cn} onClick={setSpinner}></div>
    </div>
  );
}

export default Windmill;
