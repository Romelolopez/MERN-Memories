import mongoose from "mongoose"

//schema is use to make documents that look completly different. uniformity. the structure of the post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

//create model
const postMessage = mongoose.model("PostMessage", postSchema)

export default postMessage