import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from "../constants/actionTypes"
//state always has to equal something, state is actually posts because this is a posts reducer
export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload //these are our actual post
        case CREATE:
            return [...posts, action.payload]
        case UPDATE:
            return posts.map((post) => post.id === action.payload.id ? action.payload : post) 
        case DELETE:
            //keep all the post except the one that is equal to the action.payload
            //this needs post._id but the others dont need the underscore? why
            return posts.filter((post) => post._id !== action.payload)
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        default:
            return posts;
    }
}