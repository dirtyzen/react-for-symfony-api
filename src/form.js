import React from 'react';

export const renderField = ({ input, label, type, meta: {error} }) => {
    return(
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <input {...input} id={input.name} type={type} className="form-control" />
        </div>
    );
};