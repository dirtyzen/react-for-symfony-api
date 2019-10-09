import React from 'react';
import { format as Tarih } from 'timeago.js';
import {Link} from "react-router-dom";
import SpinnerMessage from "./SpinnerMessage";

class BlogPostList extends React.Component {

    render() {
        const {posts} = this.props;

        if(posts === null || posts.length === 0){
            return (<SpinnerMessage message="There is no blog posts!" />)
        }

        return(
            <div>
                { posts && posts.map(post => (
                    <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
                        <div className="card-body">
                            <h4>
                                <Link to={`/blog-post/${post.id}`}>{post.title}</Link>
                            </h4>
                            <hr className="timeBorder" />
                            <p className="card-text">
                                <small className="text-muted">{ Tarih(post.published, 'tr_TR') }</small>
                            </p>
                        </div>
                    </div>
                )) }
            </div>
        )
    }
}

export default BlogPostList;