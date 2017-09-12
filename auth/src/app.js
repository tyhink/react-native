/**
 * Created by tyhink on 7/1/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common/commonIndex';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null, }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD6gLnEgHLjVIEMOQvOdfTZ8BeU0qsn6EU",
            authDomain: "react-auth-18c82.firebaseapp.com",
            databaseURL: "https://react-auth-18c82.firebaseio.com",
            projectId: "react-auth-18c82",
            storageBucket: "react-auth-18c82.appspot.com",
            messagingSenderId: "239834569811"
        });

        //Change Logged In State if user is signed In
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return <Button
                            style={Button.buttonStyle}
                            title="Log Out"
                            onPress={() => firebase.auth().signOut()}
                       >
                        Log Out
                       </Button>;
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        }

    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;