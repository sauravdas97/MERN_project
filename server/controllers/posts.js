import mongoose from 'mongoose';
import PostMessage from '../models/postMessages.js'

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.send(404).json({ message : error });
    }
};

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message : error });
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const _id = id;
    const post = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No post with id: ${_id}`)
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id:_id}, { new : true });
        res.json(updatedPost).status(201);
    } catch (e) {
        console.log(e);
    }
}

const deletePost = async(req, res) => {
    const{_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No post with id: ${_id}`)
    else {
        try {
            const delPost = await PostMessage.findByIdAndRemove(_id);
            res.json(delPost).status(201);
        } catch (error) {
            console.log(error);
        }
    }
}

const likePost = async (req, res) => {
    const { _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No post with id: ${_id}`)
    try {
        const post = await PostMessage.findById(_id);
        const likedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount : post.likeCount+1 }, { new : true });
        res.json(likedPost);
    } catch (e) {
        console.log(e);
    }

}


export { getPosts, createPost, updatePost, deletePost, likePost };