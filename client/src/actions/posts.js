import * as api from "../api"
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from "../constants/actionTypes"

//action creators
//fucntions that return an action
//an action is object that has a type and a payload

//to fetch all the post was have to use async (redux thunk)
export const getPosts = () => async (dispatch) => {
    try {
      //getting the response from api, getting the data
      const { data } = await api.fetchPosts();
      console.log(data)
      //payload is the data where we store our post 
      //instead of return, we dispatch the action
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }

  export const deletePost = (id) => async (dispatch) => {
    try {
      //since we dont need return data we cant write it like this
      await api.deletePost(id);
      console.log(api.deletePost(id))
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  }

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }

