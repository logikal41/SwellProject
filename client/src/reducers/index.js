import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import areas from './areas';
import selectedArea from './selectedArea';
import walls from './walls';
import selectedWall from './selectedWall';

const rootReducer = combineReducers({
  user,
  flash,
  areas,
  selectedArea,
  walls,
  selectedWall,
});

export default rootReducer;
