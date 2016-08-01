import { ActionTypes } from '../actions';


const postsReducer = (state = { posts: { all: [], post: null } }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:

      // do something

      return state;
    case ActionTypes.FETCH_POSTS:

      // do something

      return state;
    default:
      return state;
  }
};

export default postsReducer;
