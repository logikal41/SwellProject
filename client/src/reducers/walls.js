
const walls = (state = [], action) => {
    switch (action.type) {
      case 'GET_WALLS':
        return action.walls;
      default:
        return state;
    }
  };

  export default walls;