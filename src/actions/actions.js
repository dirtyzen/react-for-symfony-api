import {requests} from "../agent";
import {
    BLOG_POST_ERROR,
    BLOG_POST_LIST_ERROR,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_RECEIVED,
    BLOG_POST_REQUEST,
    BLOG_POST_UNLOAD,
    COMMENT_LIST_ERROR,
    COMMENT_LIST_RECEIVED,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_UNLOAD,
    USER_LOGIN_SUCCESS,
    USER_PROFILE_ERROR,
    USER_PROFILE_RECEIVED,
    USER_PROFILE_REQUEST,
    USER_SET_ID
} from "./constant";
import {SubmissionError} from "redux-form";


export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
    type: BLOG_POST_LIST_ERROR,
    error
});

export const blogPostListReceived = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});


export const blogPostListFetch = (page = 1) => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return requests.get(`/blog_posts?_page=${page}`)
            .then(response => dispatch(blogPostListReceived(response)))
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostRequest = () => ({
    type: BLOG_POST_REQUEST,
});

export const blogPostError = (error) => ({
    type: BLOG_POST_ERROR,
    error
});

export const blogPostReceived = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});

export const blogPostUnload = () => ({
    type: BLOG_POST_UNLOAD,
});

export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
            .then(response => dispatch(blogPostReceived(response)))
            .catch(error => dispatch(blogPostError(error)));
    }
};

export const commentListRequest = () => ({
    type: COMMENT_LIST_REQUEST,
});

export const commentListError = (error) => ({
    type: COMMENT_LIST_ERROR,
    error
});

export const commentListReceived = (data) => ({
    type: COMMENT_LIST_RECEIVED,
    data
});

export const commentListUnload = () => ({
    type: COMMENT_LIST_UNLOAD,
});

export const commentListFetch = (id, page = 1) => {
    return (dispatch) => {
        dispatch(commentListRequest());
        return requests.get(`/blog_posts/${id}/comments?_page=${page}`)
            .then(response => dispatch(commentListReceived(response)))
            .catch(error => dispatch(commentListError(error)));
    }
};


export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    }
};

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return requests.post('/login_check', {username, password}, false).then(
            response => dispatch(userLoginSuccess(response.token, response.id))
        ).catch(() => {
            throw new SubmissionError({
                _error: 'Username or password is invalid'
            })
        });
    }
};

export const userSetId = (userId) => {
    return {
        type: USER_SET_ID,
        userId
    }
};

export const userProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST
    }
};

export const userProfileError = () => {
    return {
        type: USER_PROFILE_ERROR
    }
};


export const userProfileReceived = (userId, userData) => {
    return {
        type: USER_PROFILE_RECEIVED,
        userData,
        userId
    }
};

export const userProfileFetch = (userId) => {
    return (dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/users/${userId}`, true)
            .then(response => dispatch(userProfileReceived(userId, response)))
            .catch(error => dispatch(userProfileError()));
    }
};

