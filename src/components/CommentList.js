import React from 'react';
import SpinnerMessage from "./SpinnerMessage";
import {format as Tarih} from 'timeago.js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import "./CommentList.css";

export default class CommentList extends React.Component  {
    render() {

        const {comments} = this.props;

        if(comments === null){
            return (<SpinnerMessage message="No comments right now!" />)
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <TransitionGroup>
                    {
                        comments.map(comment => {
                            return (
                                <CSSTransition key={comment.id} timeout={500} classNames="fade">
                                    <div className="card-body border-bottom">
                                        <p className="card-text mb-0">{ comment.content }</p>
                                        <p className="card-text">
                                            <small className="text-muted"><b>{ comment.author.name }</b> / { Tarih(comment.published, 'tr_TR') }</small>
                                        </p>
                                    </div>
                                </CSSTransition>
                            );
                        })
                    }
                </TransitionGroup>
            </div>
        )
    }
}