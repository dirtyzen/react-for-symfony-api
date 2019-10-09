import React from 'react';
import {commentListFetch, commentListUnload} from "../actions/actions";
import {connect} from "react-redux";
import CommentList from "./CommentList";
import SpinnerMessage from "./SpinnerMessage";

const mapStateToProps = state => ({
    ...state.commentList
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
        const {comments, isFetching} = this.props;

        if(isFetching){
            return (<SpinnerMessage />)
        }

        return(<CommentList comments={comments} />)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);