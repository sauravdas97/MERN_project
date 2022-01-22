import axios from 'axios';

const url = "http://localhost:5000/posts";

const fetchPosts = () => {return axios.get(url)}
const createPosts = (newPost) => {return axios.post(url, newPost)}
const updatePosts = (id ,updatedPost) => {return axios.patch(`${url}/${id}`, updatedPost)};
const deletePost = (id) => {return axios.delete(`${url}/${id}`)};
const likePost = (id) => {return axios.patch(`${url}/${id}/likePost`)};

export { fetchPosts, createPosts, updatePosts, deletePost, likePost };