import { browserHistory } from 'react-router';
import axios from 'axios';

const ROOT_URL = 'https://emma-blog-auth.herokuapp.com/api';
const API_KEY = '';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function fetchPosts() {
  return (dispatch) => {
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
      dispatch({ type: ActionTypes.FETCH_POST, payload: { post: response.data } });
    }).catch(error => {
      console.log('Error: could not fetch post');
    });
  };
}

export function createPost(props) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, props, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error: could not post new post');
    });
  };
}

export function updatePost(id, post) {
  console.log(localStorage.getItem('token'));
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
    }).catch(error => {
      console.log('Error: could not update post');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).
    then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('Error: could not delete post');
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser(email, password) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/`, { email, password }).
    then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser(email, password) {
  // takes in an object with email and password (minimal user object)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/`, { email, password }).
    then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
      console.log(response);
    }).catch(error => {
      localStorage.removeItem('token');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
