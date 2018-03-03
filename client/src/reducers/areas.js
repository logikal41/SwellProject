
const areas = (state = [], action) => {
    switch (action.type) {
      case 'GET_AREAS':
        return action.areas;
      case 'UPDATE_AREA':
        return {};
      default:
        return state;
    }
  };

  export default areas;
  