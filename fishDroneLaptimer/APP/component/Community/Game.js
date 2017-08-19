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
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';


import GameData from './GameData.json';
import Dimensions from 'Dimensions';
var {width} = Dimensions.get('window');

export default class Game extends Component {
  constructor() {
  super();
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(GameData),
  };}
  

  render() {
    return (
      <ListView
             dataSource={this.state.dataSource}  // 数据源
             renderRow={this.renderRow}
             initialListSize={10}
             style={{width:width}}
         />
    );
  }

  renderRow(rowData){
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.renderRow}>
          <View>
            <Image source={{uri:rowData.image}} style={styles.GameDataImage}/>
          </View>
          <View style={styles.GameDataTitle}>
            <Text style={{fontSize:20,color:'black',}}>{rowData.Title}</Text>
            <Text>{rowData.SecondTitle}</Text>
        </View>
            <View style={styles.GameDataIcon}>
               <TouchableOpacity>
                  <Icon name="heart-outlined" size={20} color="#ccc" />
                </TouchableOpacity>
             <Icon name="chevron-thin-right" size={40} color="#ccc" />
            </View>
        </View>
       </TouchableOpacity>
    )
  }
 

 
}

const styles = StyleSheet.create({
 renderRow:{
   flexDirection:'row',
   padding:(10,0,10,10),
   borderBottomWidth:0.3,
   borderColor:'#ccc'
 },
 GameDataImage:{
   width:60,
   height:60,
 },
 GameDataTitle:{
   marginLeft:15,
 },
 GameDataIcon:{
   flexDirection:'row',
   alignItems:'center',
   position:'absolute',
   right:5,
   bottom:20
 },
});
