import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from "../form";
import { connect } from 'react-redux';
import {userLoginAttemp} from "../actions/actions";

const mapDispatchToProps = {
    userLoginAttemp
};

class LoginForm extends React.Component {

    onSubmit(values){
        this.props.userLoginAttemp(
            values.username,
            values.password
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return(
            <div>
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
})(connect(null, mapDispatchToProps)(LoginForm));