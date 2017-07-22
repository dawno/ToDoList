import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View,
} from 'react-native';

export default class ToDoList extends Component {
  render() {
    return (
        <View style = {styles.container}>
          <View style = {styles.header}>
            <Text style = {styles.headerText}>- NOTER -</Text>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex :1,
},
    header : {
        backgroundColor: '#ffc300' ,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor : '#ddd'
    },
       headerText:{
       color:'white',
        fontSize : 18,
        padding:26,
    },

});

AppRegistry.registerComponent('ToDoList', () => ToDoList);
