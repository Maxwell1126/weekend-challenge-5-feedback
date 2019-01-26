import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
class Home extends Component {

    // On the click event, we move the user to the feelings page.
    handleNextButton = (event) => {
        this.props.history.push('/summary/feelings');
    }
    //Renders a card that is styled in app.css.
    //The card contains the button with this components click event.
    render() {
        return (
            <div className="container">
                <Card raised="true" className="card">
                    <h1>Ready to begin your feeback?</h1>
                    <h3>Click next to start your feedback</h3>
                    <Button size="large" variant="contained"
                        onClick={this.handleNextButton}>Next</Button>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Home);