import React from 'react';
import { format as Tarih } from 'timeago.js';
import SpinnerMessage from "./SpinnerMessage";

export default class BlogPost extends React.Component {
    render() {
        const {post} = this.props;

        if(post === null){
            return (<SpinnerMessage message="Blog post not avaible!" />)
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <h3>{ post.title }</h3>
                    <p className="card-text">{ post.content }</p>
                    <hr className="timeBorder" />
                    <small className="text-muted"><b>{ post.author.name }</b> / { Tarih(post.published, 'tr_TR') }</small>
                </div>
            </div>
        )
    }
}
