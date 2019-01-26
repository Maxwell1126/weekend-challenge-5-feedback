import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Thanks extends Component {

    handleNextButton = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <Card className="card">
                    <h1>Thank you!</h1>
                    <Button variant="contained" color="primary" size="large"
                        onClick={this.handleNextButton}>Home</Button>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Thanks);