import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feelings.css';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

class Feelings extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleNextButton = (event) => {
        console.log('input', this.state.input);

        const action = { type: 'SET_FEELINGS', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
        })
        this.props.history.push('/summary/understanding');
    }

    updateFeelings = (event) => {
        console.log('update feelings');

        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <div className="container">
                <Card raised="true" className="card">
                    <h1>How are you feeling today?</h1>
                    <CardContent className="content">
                        <TextField variant="outlined"type="number" placeholder="1-5, 5 is best"
                            onChange={this.updateFeelings} />
                        <Button size="large"variant="contained" onClick={this.handleNextButton}>Next</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Feelings);