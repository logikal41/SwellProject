import { SELECT_GROUP } from '../actions/groups';

const selectedGroup = (state = null, action) => {
    switch (action.type) {
      case SELECT_GROUP:
        return action.payload;
      default:
        return state;
    }
  };

  export default selectedGroup;
