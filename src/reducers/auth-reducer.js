import { ActionTypes } from '../actions';

const authReducer = (state = { authenticated: false, user: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true, user: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false, user: null };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
