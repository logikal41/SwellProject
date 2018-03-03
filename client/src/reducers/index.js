import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import areas from './areas';
import selectedArea from './selectedArea';
import walls from './walls';

const rootReducer = combineReducers({
  user,
  flash,
  areas,
  selectedArea,
  walls,
});

export default rootReducer;
