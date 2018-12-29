import {
  VOTING,
  LOGIN_VOTER,
  REGISTER_VOTER,
  GET_VOTER,
  VERIFY_VOTER,
  LOGOUT_VOTER,
  LOADING
} from '../_actions/types';

const initialState = {
  users: [],
  session_logs: { id: '', isAuth: false},
  loading: false
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VOTER:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case LOGIN_VOTER:
      return {
        ...state,
        session_logs: {...state.session_logs, id: action.payload.session.id, isAuth: action.payload.session.isAuth},
        loading: false
      }
    case LOADING:
      return {...state, loading: true}
    default:
      return state;
  }
}