import React, { Component } from 'react';
import { connect } from 'react-redux';
class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleNextButton = (event) => {
        const action = { type: 'SET_FEELINGS', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
        })
        this.props.history.push('/');
    }

    updateFeelings = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="number" placeholder="1-5, 5 is best"
                    onChange={this.updateFeelings} />
                <button onClick={this.handleNextButton}>Next</button>
                
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Understanding);