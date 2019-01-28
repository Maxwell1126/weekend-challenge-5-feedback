import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//This reducer keeps the value we assign on the feelings page to be used
//in the project whenever its called. We later reset it back to zero when we 
//submit to the database.
const feelings = (state = 0, action) => {
    if (action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    return state;
}



//This reducer keeps the value we assign on the understanding page to be used
//in the project whenever its called. We later reset it back to zero when we 
//submit to the database.
const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

//This reducer keeps the value we assign on the support page to be used
//in the project whenever its called. We later reset it back to zero when we 
//submit to the database.
const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

//This reducer keeps the value we assign on the comments page to be used
//in the project whenever its called. We later reset it back to an empty string 
//when we submit to the database.
const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

//reducers to be used in our reducerstore.
const storeInstance = createStore(
    combineReducers({
        feelings,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
