import React, { useReducer } from "react";
import "./App.css";
import bucketReducers from "./BucketReducer";

const PizzaList = ({ pizzas }) => {
  const [bucket, dispatch] = useReducer(bucketReducers, []);

  const addToBucket = (pizza) => {
    dispatch({
      type: "ADD_TO_BUCKET",
      pizza,
    });
  };

  const removeFromBucket = (pizza) => {
    dispatch({
      type: "REMOVE_FROM_BUCKET",
      pizza,
    });
  };

  const getTotalPrice = () => {
    return bucket.reduce(
      (total, pizza) => total + pizza.price * pizza.amount,
      0
    );
  };

  if (!pizzas.length) {
    return <h2>No pizzas available</h2>;
  }

  return (
    <div className="pizza-list-container">
      <div className="pizza-grid">
        {pizzas.map((pizza, index) => (
          <div className="pizza-card" key={index}>
            <img
              className="pizza-image"
              src={pizza.photoName}
              alt={pizza.name}
            />
            <div className="pizza-info">
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <p>{pizza.price} €</p>
            </div>
            <button className="add-button" onClick={() => addToBucket(pizza)}>
              Add +
            </button>
          </div>
        ))}
      </div>

      <div className="bucket-card">
        <h2 className="footerTitle">🧺 Your Bucket</h2>
        <div className="bucket-list">
          {bucket.length === 0 ? (
            <p className="bucket-empty">Your bucket is empty.</p>
          ) : (
            <ul>
              {bucket.map((bucketPizza, index) => (
                <li className="bucket-item" key={index}>
                  <span>
                    {bucketPizza.name} (x{bucketPizza.amount})
                  </span>
                  <button
                    className="remove-button"
                    onClick={() => removeFromBucket(bucketPizza)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bucket-total">
          <span>Total Price:</span>
          <span className="priceColor">{getTotalPrice().toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
