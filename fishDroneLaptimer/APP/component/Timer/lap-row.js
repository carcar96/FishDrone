import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View
} from 'react-native';


class LapRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.lap}>
                <Text style={styles.lapLabel}>
                    第{this.props.index}圈
                </Text>

                <Text style={styles.lapTime}>
                   {this.props.time}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    },
    lapLabel: {
        fontSize: 16,
        color: 'rgb(175, 175, 175)'
    },
    lapTime: {
        fontSize: 20,
        fontWeight: '200',
        fontFamily: 'Helvetica Neue'
    }
});

export default LapRow