import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import auth from "./reducers/auth";
import { reducer as ReduxForm } from 'redux-form';

export default combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    form: ReduxForm
});