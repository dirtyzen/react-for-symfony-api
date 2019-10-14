import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {renderField} from "../form";
import {commentAdd} from "../actions/actions";

const mapDispatchToProps = {
    commentAdd
};

class CommentForm extends React.Component {

    onSubmit(values) {
        const { commentAdd, blogPostId, reset } = this.props;
        return commentAdd(values.content, blogPostId).then(() => reset());
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                        <Field label="Do you want to comment?" name="content" type="textarea" component={renderField} />
                        <button type="submit" className="btn btn-block btn-primary" disabled={submitting}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'CommentForm'
})(connect(null, mapDispatchToProps)(CommentForm));