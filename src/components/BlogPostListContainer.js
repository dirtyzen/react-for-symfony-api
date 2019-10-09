import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";
import SpinnerMessage from "./SpinnerMessage";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
};

class BlogPostListContainer extends React.Component {

    componentDidMount() {
        this.props.blogPostListFetch();
    }

    render() {
        const {posts, isFetching} = this.props;

        if(isFetching){
            return (<SpinnerMessage />)
        }

        return (<BlogPostList posts={posts}  />)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);