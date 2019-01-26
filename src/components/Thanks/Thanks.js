import React, { Component } from 'react';
import { connect } from 'react-redux';
class Thanks extends Component {

    handleNextButton = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
                <button onClick={this.handleNextButton}>Home</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Thanks);