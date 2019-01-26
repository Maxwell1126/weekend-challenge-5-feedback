import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Summary extends Component {

    handleSubmit = () => {
        let feedback = {
            feelings: this.props.reduxStore.feelings,
            understanding: this.props.reduxStore.understanding,
            support: this.props.reduxStore.support,
            comments: this.props.reduxStore.comments
        }
        console.log(feedback);
        
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback,
        }).then((response) => {
            console.log(response);
            this.props.history.push('/thanks');
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        });
    }

    render() {

        let status = '';
        let buttonText = '';
        if (this.props.reduxStore.feelings === '' ||
            this.props.reduxStore.understanding === '' ||
            this.props.reduxStore.support === '' ||
            this.props.reduxStore.comments === ''){
                buttonText = "Incomplete"
            status = true;
                
        }else{
            buttonText = "Submit"
            status = false;
        }
        
        return (
            <form onSubmit= {this.handleSubmit}>
                <p>Feelings: {this.props.reduxStore.feelings}</p>
                <p>Understanding: {this.props.reduxStore.understanding}</p>
                <p>Support: {this.props.reduxStore.support}</p>
                <p>Comments: {this.props.reduxStore.comments}</p>
                <button id ="submit"type="submit" disabled={status}>{buttonText}</button>
            </form>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Summary);