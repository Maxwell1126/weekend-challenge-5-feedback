import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    handleNextButton = (event) => {
        this.props.history.push('/summary/feelings');
    }

    render() {
        return (
            <div>
                <h1>Ready to begin your feeback?</h1>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Home);