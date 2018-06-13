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
          rightComponent={
            <Icon
              name='sync'
              color='#fff'
              onPress={() => {console.log('hello')}} 
              />
            }
        />
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => MyHeader)