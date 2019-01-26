import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    // On the click event, we will dispatch the previously mutated state,
    // and then reset the state to an empty string.
    // Last, we move the user to the comments page.
    handleNextButton = (event) => {
        const action = { type: 'SET_SUPPORT', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
        })
        this.props.history.push('/summary/comments');
    }

    updateSupport = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <div className="container">
                <Card raised="true" className="card">
                    <h1>How well are you being supported?</h1>
                    <CardContent className="content">
                        <TextField variant="outlined" type="number" placeholder="1-5, 5 is best"
                            onChange={this.updateSupport} />
                        <Button size="large" variant="contained" onClick={this.handleNextButton}>Next</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Understanding);