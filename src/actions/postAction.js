import { FETCH_POSTS } from './types';

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

