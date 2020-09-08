import React from 'react';
import { Text, View } from 'react-native';
import AppHeaderII from '../components/AppHeaderII';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1,  marginTop : 20 , }}>
                            <AppHeaderII />

          <Text>Yay!!!! Congratulations :) You have succesfully written a beautiful story for the world to read. But don't just leave yet read the wonderful stories written by other people right here so that you can be inspired to write more ! Happy Reading.. Enjoy and relax :)</Text>
          
        </View>
      );
    }
  }