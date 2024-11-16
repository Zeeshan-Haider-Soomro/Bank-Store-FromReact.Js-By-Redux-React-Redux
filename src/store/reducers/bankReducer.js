const initialValue = {
  amount: 0,
};

export const BankReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "deposit":
      return { amount: state.amount + payload };
    case "widraw":
      return { amount: state.amount - payload };
    case "checkbalance":
      return state;
    default:
      return state;
  }
};
