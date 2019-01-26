import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {

    render() {
        let buttonText = '';
        if (this.props.reduxStore.feelings==''||
            this.props.reduxStore.understanding == '' ||
            this.props.reduxStore.support == '' ||
            this.props.reduxStore.comments == ''){
                buttonText = "Incomplete"
        }else{
            buttonText = "Submit"
        }
        return (
            <div>
                <p>Feelings: {this.props.reduxStore.feelings}</p>
                <p>Understanding: {this.props.reduxStore.understanding}</p>
                <p>Support: {this.props.reduxStore.support}</p>
                <p>Comments: {this.props.reduxStore.comments}</p>
                <button onClick>{buttonText}</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Summary);