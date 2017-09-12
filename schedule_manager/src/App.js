/**
 * Created by tyhink on 7/22/17.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyALJuvDhBFHvJEm1lB1DjpoIZI0x-aCxDE",
            authDomain: "schedule-manager-70fdc.firebaseapp.com",
            databaseURL: "https://schedule-manager-70fdc.firebaseio.com",
            projectId: "schedule-manager-70fdc",
            storageBucket: "schedule-manager-70fdc.appspot.com",
            messagingSenderId: "444849074717"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;