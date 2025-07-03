const bucketReducers = (state, action) => {
  if (action.type === "ADD_TO_BUCKET") {
    return state
      .map((bucketPizza) =>
        bucketPizza.name === action.pizza.name
          ? { ...bucketPizza, amount: bucketPizza.amount + 1 }
          : bucketPizza
      )
      .concat(
        state.some((bucketPizza) => bucketPizza.name === action.pizza.name)
          ? []
          : [{ ...action.pizza, amount: 1 }]
      );
  }

  if (action.type === "REMOVE_FROM_BUCKET") {
    return state
      .map((bucketPizza) =>
        bucketPizza.name === action.pizza.name
          ? { ...bucketPizza, amount: bucketPizza.amount - 1 }
          : bucketPizza
      )
      .filter((bucketPizza) => bucketPizza.amount > 0);
  }

  return state;
};

export default bucketReducers;
