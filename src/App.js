import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PizzaList from "./PizzaList";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.mockfly.dev/mocks/c6d1c526-d78c-4ea7-b1f6-bbe5414dd323/roi-pizza`
      )
      .then((response) => setPizzas(response.data))
      .catch(() => setError(true));
  }, []);

  return (
    <div className="App">
      <div className="ribbon"></div>
      <h1 className="App-title">ROI Pizza's</h1>
      {error ? <p>Error fetching pizzas</p> : <PizzaList pizzas={pizzas} />}
    </div>
  );
};

export default App;
