import { SELECT_WALL } from '../actions/walls';

const selectedWall = (state = null, action) => {
    switch (action.type) {
      case SELECT_WALL:
        return action.payload;
      default:
        return state;
    }
  };

  export default selectedWall;