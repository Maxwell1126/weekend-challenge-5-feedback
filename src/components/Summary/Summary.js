import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Summary extends Component {

    // On the click event, we will post all the reduxstore data,
    // in the feedback object, to the server to be added to the database.
    handleSubmit = () => {
        let feedback = {
            feelings: this.props.reduxStore.feelings,
            understanding: this.props.reduxStore.understanding,
            support: this.props.reduxStore.support,
            comments: this.props.reduxStore.comments
        }
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback,
        }).then((response) => {
            // Last, we move the user to the thanks page.
            this.props.history.push('/thanks');
        }).catch((error) => {
            //We catch errors if they occur.
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        });
        // We then set and dispatch the reduxstore data 
        // back to zeroes and an empty string, depending.
        const actionf = { type: 'SET_FEELINGS', payload: 0 };
        this.props.dispatch(actionf);
        const actionu = { type: 'SET_UNDERSTANDING', payload: 0 };
        this.props.dispatch(actionu);
        const actions = { type: 'SET_SUPPORT', payload: 0 };
        this.props.dispatch(actions);
        const actionc = { type: 'SET_COMMENTS', payload: '' };
        this.props.dispatch(actionc);
    }

    render() {

        let status = '';
        let buttonText = '';
        if (this.props.reduxStore.feelings === 0 ||
            this.props.reduxStore.understanding === 0 ||
            this.props.reduxStore.support === 0 ||
            this.props.reduxStore.comments === '') {
            buttonText = "Incomplete"
            status = true;

        } else {
            buttonText = "Submit"
            status = false;
        }

        return (
            <div className="container">
                <Card raised="true" className="card">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Review your feedback</h1>
                        <p>Feelings: {this.props.reduxStore.feelings}</p>
                        <p>Understanding: {this.props.reduxStore.understanding}</p>
                        <p>Support: {this.props.reduxStore.support}</p>
                        <p>Comments: {this.props.reduxStore.comments}</p>
                        <Button size="large" variant="contained"
                            type="submit" disabled={status}>{buttonText}</Button>
                    </form>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Summary);