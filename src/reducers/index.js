import { combineReducers } from 'redux';

import PostsReducer from './post-reducer';

const rootReducer = combineReducers({
  count: PostsReducer,
});

export default rootReducer;
