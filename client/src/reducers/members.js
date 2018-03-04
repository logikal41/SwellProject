import { ADD_MEMBER } from '../actions/invitations';
import { GET_MEMBERS} from '../actions/members';

const members = (state = [], action) => {
  switch(action.type) {
    case GET_MEMBERS: 
      return action.members;
    case ADD_MEMBER:
    	return [action.member, ...state];
   	// case DELETE_STUDENT:
   	// 	return state.filter(s => s.id !== action.id);
    default: 
    	return state;
  }
}

export default members;