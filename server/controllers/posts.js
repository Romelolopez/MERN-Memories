//create handlers for our routes
import PostMessage from "../models/postMessage.js"
import mongoose from "mongoose"


export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        //return if its working, an array of post messages 
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    //access to body 
    const post = req.body
    //in "PostMessage" we pass the information that we can from the const above
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        //successful creation
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    console.log(req.params.id)
    const post = req.body;
    
    //checks if object id is valid 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});


    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    //gets id from params
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    console.log("delete")
    //removes
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostMessage.findById(id)
    //find by the id, update likeCount +1, give us back the new updated post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}