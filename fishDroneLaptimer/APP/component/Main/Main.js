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
  Image,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Entypo';

import Timer from '../Timer/Timer';
import Community from '../Community/Community';
import User from '../User/User';



export default class Main extends Component {
   
    constructor(){
        super();
        this.state = {
            selectedTab:'计时器'
        };
    }

  render() {
    return (
<TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === '计时器'}
    title="计时器"
    renderIcon={() => <Icon name="stopwatch" size={25} />}
    renderSelectedIcon={() => <Icon name="stopwatch" size={25} color="#4F8EF7"/>}
    onPress={() => this.setState({ selectedTab: '计时器' })}>
    <Timer/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === '社区'}
    title="社区"
    renderIcon={() => <Icon name="news" size={25} />}
    renderSelectedIcon={() => <Icon name="news" size={25} color="rgb(0,122,255)"/>}
    onPress={() => this.setState({ selectedTab: '社区' })}>
    <Community/>
  </TabNavigator.Item>
   <TabNavigator.Item
    selected={this.state.selectedTab === '我的'}
    title="我的"
    renderIcon={() => <Icon name="user" size={25} />}
    renderSelectedIcon={() => <Icon name="user" size={25} color="rgb(0,122,255)"/>}
    onPress={() => this.setState({ selectedTab: '我的' })}>
    <User/>
  </TabNavigator.Item>
</TabNavigator>

    );
  }
}

const styles = StyleSheet.create({
 iconstyle:{
     height:25,
     width:25,
 }
});
