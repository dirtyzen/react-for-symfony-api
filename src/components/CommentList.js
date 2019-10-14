import React from 'react';
import SpinnerMessage from "./SpinnerMessage";
import {format as Tarih} from 'timeago.js';

export default class CommentList extends React.Component  {
    render() {

        const {comments} = this.props;

        if(comments === null){
            return (<SpinnerMessage message="Comments not avaible!" />)
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">

                {
                    comments.map(comment => {
                        return (
                            <div className="card-body border-bottom" key={comment.id}>
                                <p className="card-text mb-0">{ comment.content }</p>
                                <p className="card-text">
                                    <small className="text-muted"><b>{ comment.author.name }</b> / { Tarih(comment.published, 'tr_TR') }</small>
                                </p>
                            </div>
                        );
                    })
                }

            </div>
        )
    }
}