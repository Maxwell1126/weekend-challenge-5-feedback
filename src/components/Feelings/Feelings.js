import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
class Feelings extends Component {
    constructor(){
        super();
        this.state={
            input:'',
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
            <Header />
            <h1>How Are You Feeling Today?</h1>
            <input type="number" placeholder="1-5, 5 is best"
                OnChange={this.updateFeelings}/>
            <button onClick={this.handleNextButton}>Next</button>
            </div>
            )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Feelings);