import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetch posts');
    fetch('http://localhost:5000/restaurant')
    .then(res => res.json())
    .then(posts => dispatch(
        {
            type: FETCH_POSTS,
            payload: posts

        }
    ));
}


export const createPost = (postData) => dispatch => {
    console.log('create post action');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch(
        {
            type: NEW_POST,
            payload: post

        }
    ));
}