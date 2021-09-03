import "./App.css";
import { useEffect, useState } from "react";
import comic01 from "./assets/comic01.jpg";
import comic02 from "./assets/comic02.jpg";
import comic03 from "./assets/comic03.jpg";

function App() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: comic01,
    },
    {
      id: "2",
      image: comic02,
    },
    {
      id: "3",
      image: comic03,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default App;
