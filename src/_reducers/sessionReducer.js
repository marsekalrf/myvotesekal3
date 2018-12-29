import {
  SESSION_LOG,
  LOADING
} from '../_actions/types';

const initialState = {
  session_logs: false,
  id: '',
  temp: [],
  loading: false
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOG:
      return {
        ...state,
        temp: [...state.temp, action.payload.session],
        session_logs: action.payload.session.isAuth,
        _id: action.payload.session.id,
        timestamp: action.payload.session.timestamp,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}