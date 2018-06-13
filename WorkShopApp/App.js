import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Layout from './componets/Layout'


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <Layout/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
