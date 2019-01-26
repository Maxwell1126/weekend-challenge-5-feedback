import React, { Component } from 'react';
import { connect } from 'react-redux';
class Comments extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleNextButton = (event) => {
        const action = { type: 'SET_COMMENTS', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
        })
        this.props.history.push('/review');
    }

    updateComments = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="text" placeholder="Make any comments here."
                    onChange={this.updateComments} />
                <button onClick={this.handleNextButton}>Next</button>

            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Comments);