import * as PostsApiUtil from '../util/posts_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = (posts) => {
    return ({
        type: RECEIVE_POSTS,
        posts,
    })
}

export const fetchPosts = () => dispatch => {
    return PostsApiUtil.fetchPosts().then(
        (posts) => {
            debugger
            dispatch(receivePosts(posts))
        }
    )
}