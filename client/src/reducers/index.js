import { combineReducers } from 'redux';
import user from './reducer_user';
import flash from './reducer_flash';
import areas from './reducer_areas';
import members from './reducer_members';
import walls from './reducer_walls';
import selectedArea from './reducer_selectedArea';
import selectedWall from './reducer_selectedWall';

const rootReducer = combineReducers({
  user,
  flash,
  areas,
  selectedArea,
  walls,
  selectedWall,
  members,
});

export default rootReducer;
