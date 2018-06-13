import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';

var list = [
  {
    title: 'teeste 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:12',
    icon: 'play-arrow'
  },
  {
    title: 'Sessao 13:14',
    icon: 'stop'
  },
  {
    title: 'Sessao 13:16',
    icon: 'stop'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:12',
    icon: 'play-arrow'
  },
  {
    title: 'Sessao 13:14',
    icon: 'stop'
  },
  {
    title: 'Sessao 13:16',
    icon: 'stop'
  },
  {
    title: 'Sessao 13:18',
    icon: 'stop'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  },
  {
    title: 'Sessao 13:10',
    icon: 'fast-forward'
  }

]


export default class ListTest extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))
        }
        </ScrollView>
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => ListTest)