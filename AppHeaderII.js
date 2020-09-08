import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeaderII extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>READ YOUR STORY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'rgb(250, 209, 221)',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

