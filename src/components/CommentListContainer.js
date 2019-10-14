import React from 'react';
import {commentListFetch, commentListUnload} from "../actions/actions";
import {connect} from "react-redux";
import CommentList from "./CommentList";
import SpinnerMessage from "./SpinnerMessage";
import CommentForm from "./CommentForm";

const mapStateToProps = state => ({
    ...state.commentList,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    commentListFetch,
    commentListUnload
};

class CommentListContainer extends React.Component {

    componentDidMount() {
        this.props.commentListFetch(this.props.blogPostId);
    }

    componentWillUnmount() {
        this.props.commentListUnload();
    }

    render() {
        const {comments, isFetching, isAuthenticated, blogPostId} = this.props;

        if(isFetching){
            return (<SpinnerMessage />)
        }

        return (
            <div>
                <CommentList comments={comments} />
                { isAuthenticated && <CommentForm blogPostId={blogPostId}/> }
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);