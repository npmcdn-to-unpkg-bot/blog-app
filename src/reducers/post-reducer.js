import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return { ...state, all: state.all, post: action.payload.post };
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload.all, post: state.post };
    default:
      return state;
  }
};

export default postsReducer;
