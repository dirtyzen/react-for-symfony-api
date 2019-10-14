import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import auth from "./reducers/auth";
import { reducer as ReduxForm } from 'redux-form';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    router: routerReducer,
    form: ReduxForm
});