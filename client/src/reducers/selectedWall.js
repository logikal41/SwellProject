const selectedWall = (state = null, action) => {
    switch (action.type) {
      case 'SELECT_WALL':
        return action.wall;
      default:
        return state;
    }
  };

  export default selectedWall;