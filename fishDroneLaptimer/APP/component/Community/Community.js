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
  ScrollView
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Game from './Game';
import Music from './Music';
import Movia from './Movia';

export default class Community extends Component {
  render() {
    return (
      <ScrollableTabView>
        <Game tabLabel="Game" />
        <Music tabLabel="Music" />
        <Movia tabLabel="Movia" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
 
 
});
