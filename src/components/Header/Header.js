import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Header extends Component {
    render() {
        return (
            <header className="head">
                <h1 >Feedback</h1>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);