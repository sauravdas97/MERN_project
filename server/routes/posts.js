import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// All route starts from  localhost:5000/posts

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost);
router.delete('/:_id', deletePost);
router.patch('/:_id/likePost', likePost);


export default router;