const reducer = (state = null, action) => {
  switch (action.type) {
    case 'set':
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
