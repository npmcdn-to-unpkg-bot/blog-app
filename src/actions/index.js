import { browserHistory } from 'react-router';
import axios from 'axios';

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=e_oberstein';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    console.log('fetching');
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: { all: response.data } });
    }).catch(error => {
      console.log('Error: could not fetch posts');
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      console.log(id);
      dispatch({ type: ActionTypes.FETCH_POST, payload: { post: response.data } });
    }).catch(error => {
      console.log('Error: could not fetch post');
    });
  };
}

export function createPost(props) {
  console.log(props);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, props).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error: could not post new post');
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then(response => {
    }).catch(error => {
      console.log('Error: could not update post');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error: could not delete post');
    });
  };
}
