const initialValue = {
  count: 0,
};

export const CounterReducer = (state = initialValue, { type }) => {
  switch (type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
