import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from 'redux';
//import rootReducer from "./reducers/index";
import { featureReducer } from "./reducers/featureReducer"

import 'bulma/css/bulma.css';
import './styles.scss';

//const store = createStore(rootReducer);
const store = createStore(featureReducer);
console.log('State is:');
console.log(store.getState());

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
