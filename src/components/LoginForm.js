import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderField} from "../form";
import { connect } from 'react-redux';
import {userLoginAttempt} from "../actions/actions";

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    userLoginAttempt
};

class LoginForm extends React.Component {

    componentDidUpdate(prevProps) {
        if(prevProps.token !== this.props.token){
            this.props.history.push('/');
        }
    }

    onSubmit(values){
        return this.props.userLoginAttempt(
            values.username,
            values.password
        );
    }


    render() {
        const {handleSubmit, error} = this.props;

        return(
            <div>
                {error && <div className="mt-4 alert alert-warning">{error}</div> }
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    <Field name="username" label="Username" type="text" component={renderField} />
                    <Field name="password" label="Password" type="password" component={renderField} />

                    <button type="submit" className="btn btn-block btn-primary">Submit</button>

                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));