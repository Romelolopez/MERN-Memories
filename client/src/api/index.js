import axios from "axios"

//returns all the posts we have in the database
// const url = 'http://localhost:5000/posts';
const url = 'http://full-stack-mern-app-memories.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
