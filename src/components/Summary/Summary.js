import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {

    render() {
        return (
            <div>
                <p>Feelings: {this.props.reduxStore.feelings}</p>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Summary);