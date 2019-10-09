import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import BlogPost from "./BlogPost";
import SpinnerMessage from "./SpinnerMessage";
import CommentListContainer from "./CommentListContainer";

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch,
    blogPostUnload
};

class BlogPostContainer extends React.Component {

    componentDidMount() {
        this.props.blogPostFetch(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.blogPostUnload();
    }

    render() {
        const {post, isFetching} = this.props;

        if(isFetching){
            return (<SpinnerMessage />)
        }

        return (
            <div>
                <BlogPost post={post} />
                { post && <CommentListContainer blogPostId={this.props.match.params.id} /> }
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);