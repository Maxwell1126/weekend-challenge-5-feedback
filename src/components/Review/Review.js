import React, { Component } from 'react';
import { connect } from 'react-redux';
class Review extends Component {
    render() {
        return (
            <div>
                <h1>Review your submission</h1>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Review);