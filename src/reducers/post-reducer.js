import { ActionTypes } from '../actions';

const postsReducer = (state = 0, action) => {
  const posts = {
    posts: {
      all: [],
      post: null,
    },
  };

  switch (action.type) {
    case ActionTypes.FETCH_POST:
      // do something
      return posts;
    case ActionTypes.FETCH_POSTS:
      // do something
      return posts;
    case ActionTypes.CREATE_POST:
        // do something
      return posts;
    case ActionTypes.UPDATE_POST:
        // do something
      return posts;
    case ActionTypes.DELETE_POST:
        // do something
      return posts;
    default:
      return posts;
  }
};

export default postsReducer;
