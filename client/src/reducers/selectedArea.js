const selectedArea = (state = null, action) => {
    switch (action.type) {
      case 'SELECT_AREA':
        return action.area;
      default:
        return state;
    }
  };

  export default selectedArea;