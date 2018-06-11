/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Header, List, ListItem, Icon } from 'react-native-elements';



const list = [
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
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'App Workshop', style: { color: '#fff' } }}
          rightComponent={{ icon: 'sync', color: '#fff' }}
        />
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                hideChevron
              />
            ))
          }
        </List>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
