
const areas = (state = [], action) => {
    switch (action.type) {
      case 'GET_AREAS':
        return action.areas;
      case 'DELETE_AREA':
        return state.filter( area => area.id !== action.area);
      default:
        return state;
    }
  };

  export default areas;
  