import * as api from '../api';

// Action Creators

const getPosts = () => {
    const asyncFunc = async (dispatch) => { // this is used for redux thunk since async calls are made
        try {
            const { data } = await api.fetchPosts();
            const action = { type : 'FETCH_ALL', payload : data }
            dispatch(action);
        } catch (error) {
            console.log(error.message);
        }
    }
    return asyncFunc;
}

const createPost = (post) => {
    const asyncFunc = async (dispatch) => {
        try {
            const { data } = await api.createPosts(post);
            const action = { type : 'CREATE', payload : data }
            dispatch(action)
        } catch (error) {
            console.log(error.message);
        }
    }
    return asyncFunc
}

const updatePost = (id, post) => {
    const asyncFunc = async (dispatch) => {
        try {
            const { data } = await api.updatePosts(id, post);
            const action = { type : 'UPDATE', payload : data };
            dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }
    return asyncFunc;
}


const deletePost = (id) => {
    const asyncFunc = async (dispatch) => {
        try {
            await api.deletePost(id);
            const action = { type: 'DELETE', payload : id};
            dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }
    return asyncFunc;
}

const likePost = (id) => {
    const asyncFunc = async (dispatch) => {
        try {
            const { data } = await api.likePost(id)
            const action = { type: 'LIKE', payload: data};
            dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }
    return asyncFunc;
}

export { getPosts, createPost, updatePost, deletePost, likePost };