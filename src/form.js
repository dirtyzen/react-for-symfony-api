import React from 'react';
import classNames from 'classnames';

export const renderField = ({ input, label, type, meta: {error} }) => {

    const classes = classNames(
        'form-control',
        {
            'is-invalid': error
        }
    );

    return(
        <div className="form-group">
            { label !== null && label !== undefined && label !== '' && <label htmlFor={input.name}>{label}</label> }
            { type !== 'textarea' && <input {...input} id={input.name} type={type} className={classes} /> }
            { type === 'textarea' && <textarea {...input} id={input.name} type={type} className={classes} /> }
            { error && <small className="text-danger">{error}</small> }
        </div>
    );
};