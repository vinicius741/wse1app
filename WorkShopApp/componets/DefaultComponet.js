import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';



export default class DefaultComponet extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>

      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => DefaultComponet)