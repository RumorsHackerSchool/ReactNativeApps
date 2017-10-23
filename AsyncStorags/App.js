/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  Button,
} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  getInitialState(){
    return { };
  };

componentDidMount(){
  console.log(this.state)
  AsyncStorage.getItem("myKey1").then((value) => {
    console.log(value)}).done();
    AsyncStorage.getItem("myKey2").then((value) => {
      console.log(value)}).done();
      AsyncStorage.getItem("myKey3").then((value) => {
        console.log(value)}).done();
};

saveData(){
  AsyncStorage.setItem("values",this.state);
};

state = {
  myKey1: '',
  myKey2: '',
  myKey3: ''
}

  render() {
    return (
      <View style={styles.container}>
        <Text stryle={styles.saved}>
          {this.state.myKey1}
        </Text>
        <View>
          <TextInput
            style={styles.formInput}
            onChangeText={(text1) => this.setState({"myKey1": text1})}
            value={this.state.myKey1}/>
        </View>
        <Text stryle={styles.saved}>
          {this.state.myKey2}
        </Text>
        <View>
          <TextInput
            style={styles.formInput}
            onChangeText={(text2) => this.setState({"myKey2": text2})}
            value={this.state.myKey2}/>
        </View>
        <Text stryle={styles.saved}>
          {this.state.myKey3}
        </Text>
        <View>
          <TextInput
            style={styles.formInput}
            onChangeText={(text3) => this.setState({"myKey3": text3})}
            value={this.state.myKey3}/>
        </View>
        <Text style={styles.instructions}>
          Type someting into the box and restart your application to see if it is still there.
        </Text>
        <Button
          onPress={this.saveData}
          title="Save data"
          color="#841584"
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:30,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  formInput: {
    height: 40,
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#555555'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  saved: {
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
});
