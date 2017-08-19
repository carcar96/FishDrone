import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight,ListView,ScrollView } from 'react-native';
import  Stopwatch from './stopwatch';
import object from './Mybutton';
import LapRow from './lap-row';

let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class Jishi extends Component {
  constructor(props) {
    super(props);

     this.interval = null;
    this.lapTimeInterval = null;

    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
            lapTimeElapsed: null,
            timeElapsed: null,
            running: false,
            canReset: false,
            lapStartTime: null,
            startTime: null,
            laps: [],
            dataSource: ds.cloneWithRows([]),
            lapsCount: 0,
            canLap: false,
            showLapMessage: false,
            formatTime:'00:00:00:000',
    };
   
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
       clearInterval(this.interval);

        this.setState({
            lapTimeElapsed: null,
            timeElapsed: null,
            running: false,
            canReset: false,
            startTime: null,
            laps: [],
            dataSource: ds.cloneWithRows([]),
            lapsCount: 0,
            
            stopwatchStart: false, stopwatchReset: true
        });
    
  }

 renderLap(rowData, sectionID, rowID) {
        return (
            <LapRow index={this.state.lapsCount - rowID} time={this.state.formatTime} />
        );
    }
    
     _startLapTimeInterval() {
        this.setState({
            lapStartTime: new Date()
        });

        this.lapTimeInterval = setInterval(() => {
            this.setState({
                lapTimeElapsed: new Date() - this.state.lapStartTime
            });
        }, 30);
    }
 handleResetPress() {
        clearInterval(this.interval);

        this.setState({
            lapTimeElapsed: null,
            timeElapsed: null,
            running: false,
            canReset: false,
            startTime: null,
            laps: [],
            dataSource: ds.cloneWithRows([]),
            lapsCount: 0
        });
    }
handleLapPress() {
        let lap = this.state.timeElapsed,
            laps = this.state.laps.concat([lap]);

        this.setState({
            laps: laps.reverse(), // 列出来
            dataSource: ds.cloneWithRows(laps),
            lapsCount: 1 + this.state.lapsCount
        });
  }

  render() {
    return (
      <View style={styles.container}>
        <Stopwatch msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
         options={options}/>
          <View style={styles.background}>
        <object.Button onPress={this.toggleStopwatch}
          text={!this.state.stopwatchStart ? "开始" : "暂停"}
          color={!this.state.stopwatchStart ? "green" : "red"}
        />
        <object.Buttonc onPress={this.handleLapPress.bind(this)}
         text="记录"
        />
        <object.Buttonc onPress={this.resetStopwatch } 
         text="重置"
        />
        </View >
          <View style={styles.footer}>
               
                 <View style={styles.lapWrapper}>
                    <ListView enableEmptySections={true} dataSource={this.state.dataSource} renderRow={this.renderLap.bind(this)} />
                </View>
               
         </View>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
 const options = {
  container: {
   
    backgroundColor: '#FFF',
    
    borderRadius: 5,
  },
  text: {
    textAlign:'center',
    fontSize: 50,
    color: '#000',
    marginLeft: 7,
  },
    title:{
        textAlign:'center',
        fontSize: 30,
       
        color: '#000',
      }
 
};
const styles = StyleSheet.create({
  buttonWrapper: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: '#e5e5e5'
    },
  footer: {
        flex: 6,
        backgroundColor: '#F5F6FA',
        borderTopColor: '#e5e5e5',
        borderTopWidth: 1
    },
    lapWrapper: {
        flex: 5
    },
   redbutton:{
      height:100,
      width:100,
      borderRadius:20,
      backgroundColor:'red',
      justifyContent:'center',
      overflow:'hidden',
    },
    greenbutton:{
      height:100,
      width:100,
      borderRadius:20,
      backgroundColor:'green',
      justifyContent:'center',
      overflow:'hidden',
    },
  background:{
      
      
       borderColor: '#dedede',
       margin: 5,
       flexDirection: 'row',
  },
  
  gray:{
    backgroundColor:'gray',
  },
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  timer: {
    fontSize:50,
    backgroundColor:'#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
});
 
