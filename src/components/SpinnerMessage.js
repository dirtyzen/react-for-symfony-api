import React from 'react';

export default class SpinnerMessage extends React.Component {
    render() {
        const {message} = this.props;
        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body fa-3x text-center">
                    { message ? `${message}` : <i className="fas fa-spinner fa-spin"></i> }
                </div>
            </div>
        )
    }
}
