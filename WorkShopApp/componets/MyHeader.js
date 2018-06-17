import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import { Header, Icon } from 'react-native-elements';



export default class MyHeader extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Header
          centerComponent={{ text: 'Water Flow', style: { color: '#fff' } }}
        />
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => MyHeader)