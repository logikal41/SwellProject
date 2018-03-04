
const areas = (state = [], action) => {
    switch (action.type) {
      case 'GET_AREAS':
        return action.areas;
      case 'DELETE_AREA':
        return state.filter( area => area.id !== action.id);
      case 'CREATE_AREA':
        return [action.area, ...state];
      case 'UPDATE_AREA':
        const originalState = state.filter(area => area.id !== action.area.id);
        return [ action.area, ...originalState];
      default:
        return state;
    }
  };

  export default areas;
  