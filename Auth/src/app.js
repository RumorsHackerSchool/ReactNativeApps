import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDb3qxKFhNZXikwFbwSCEDWm-ghrs0tKDc',
      authDomain: 'authentication-35af0.firebaseapp.com',
      databaseURL: 'https://authentication-35af0.firebaseio.com',
      projectId: 'authentication-35af0',
      storageBucket: 'authentication-35af0.appspot.com',
      messagingSenderId: '519594912664'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderCotent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View  style={styles.viewStyle}>
        <Header headerText="Authentication" />
          {this.renderCotent()}
      </View>
    );
  }
}

const styles = {
  viewStyle:{
    height:105,

  }
}
export default App;
