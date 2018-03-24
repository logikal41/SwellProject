

const initialValues = (state = {} , action) => {
    switch (action.type) {
      case 'GET_VALUES':
        return action.payload;
      default:
        return state;
    }
  };

  export default initialValues;