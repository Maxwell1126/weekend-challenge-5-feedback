import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {

    render() {
        return (
            <div>
                <p>Feelings: {this.props.reduxStore.feelings}</p>
                <p>Understanding: {this.props.reduxStore.understanding}</p>
                <p>Support: {this.props.reduxStore.support}</p>
                <p>Comments: {this.props.reduxStore.feelings}</p>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Summary);