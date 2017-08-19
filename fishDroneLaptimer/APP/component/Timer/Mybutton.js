/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

 class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
             stopwatchStart: false,
             stopwatchReset: false,
        };
    }
 
  ccc = () => { 
   const{ onPress } = this.props;
   onPress();
};
 toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
  render() {
      const { text,color }=this.props;     
    return (
      <View style={styles.container}>
        <TouchableHighlight 
        style={[styles.greenbutton,{backgroundColor:color} ]}
        onPress={this.ccc} 
        >
        <Text style={styles.buttontext}>  
        {text}
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


class Buttonc extends Component {
  ccc = () => {
   const{ onPress } = this.props;
   onPress();
  };
  render() {
      const { text,beijingyanse }=this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight    
        style={styles.greenbutton}      
        onPress={this.ccc} 
        >
        <Text style={styles.buttontext}
        >  
        {text}
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const object={
    Button,
    Buttonc,
    
};
export default object;
const styles = StyleSheet.create({
  redbutton:{
      height:100,
      width:100,
      borderRadius:50,
      backgroundColor:'red',
      justifyContent:'center',
      overflow:'hidden',
    },
    greenbutton:{
      height:100,
      width:100,
      borderRadius:50,
      backgroundColor:'green',
      justifyContent:'center',
      overflow:'hidden',

    },
  disabled:{
      backgroundColor:'red',
  },
  button:{
    height:40,
    width:100,
    borderRadius:20,
    backgroundColor:'green',
    justifyContent:'center',
    
  },
  buttontext:{
    textAlign:'center',
    color:'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


