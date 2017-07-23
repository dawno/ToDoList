import React, { Component } from 'react';
import {

    StyleSheet,
    Text, TouchableOpacity, View,
} from 'react-native';

export default class ToDoList extends Component {
    render() {

        return (
            <View key = {this.props.keyval} style = {styles.note}>
                <Text style = {styles.noteText}>{this.props.date}</Text>
                <Text style = {styles.noteText}>{this.props.note}</Text>
                <TouchableOpacity onPress = {this.props.deleteMethod} style = {styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    note: {
        position : 'relative',
        padding : 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed',

    },
    noteText : {
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#ffc300'
    }
,
    noteDelete: {
        position:'absolute',
        backgroundColor:'#2980B9',
        alignItems : 'center',
        justifyContent:'center',
        padding: 10,
        top:10,
        right:10,
        bottom:10,
    },
    noteDeleteText:{
        color:'white',
    }
});

