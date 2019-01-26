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
            <input type="int" placeholder="1-5, 5 is best" 
                OnChange={this.updateFeelings}/>
            </div>
            )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Feelings);