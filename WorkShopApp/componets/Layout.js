import React, { Component } from 'react';
import { AppRegistry, View,  StyleSheet } from 'react-native';
import MyHeader from './MyHeader';
import ListTest from './ListTest';
import ListAPITest from './ListAPITest';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {

    return (

      <View>
      
        <MyHeader/>
   
        <ListAPITest/>
        {/* <ListTest/> */}

      </View>

    )
  }
}

const styles = StyleSheet.create ({
 
});

AppRegistry.registerComponent('WorkShopApp', () => Layout)