import { useEffect, useState } from "react";
import "./Sky.style.css";
import { getWheather } from "../../api/getCurrentWeather";

function Sky(props) {
  const [currentWheather, setWheather] = useState("sunny");

  // Делаем запрос на сервер и исходя из полученной погоды меняем фон
  useEffect(() => {
    getWheather()
      .then(({ weather }) => {
        setWheather(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cn = `sky ${currentWheather}`;

  return <section className={cn}></section>;
}

export default Sky;
