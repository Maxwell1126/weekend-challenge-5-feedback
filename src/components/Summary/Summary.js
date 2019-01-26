import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {

    render() {
        let status = '';
        let buttonText = '';
        if (this.props.reduxStore.feelings==''||
            this.props.reduxStore.understanding == '' ||
            this.props.reduxStore.support == '' ||
            this.props.reduxStore.comments == ''){
                buttonText = "Incomplete"
            status = true;
                
        }else{
            buttonText = "Submit"
            status = false;
        }
        return (
            <form>
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