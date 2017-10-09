import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';



class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDb3qxKFhNZXikwFbwSCEDWm-ghrs0tKDc',
      authDomain: 'authentication-35af0.firebaseapp.com',
      databaseURL: 'https://authentication-35af0.firebaseio.com',
      projectId: 'authentication-35af0',
      storageBucket: 'authentication-35af0.appspot.com',
      messagingSenderId: '519594912664'
    });
  }
  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
