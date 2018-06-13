import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';



export default class ListAPITest extends Component{
  constructor(props){
    super(props)
    this.state ={ isLoading: true }
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    keyExtractor = (item, index) => index

    renderItem = ({ item }) => (
      <ListItem
        title={item.title}
        subtitle={item.releaseYear}
        leftIcon={{ name: 'stop' }}
      />
    )

    renderItem = ({ item }) =>(
      <ListItem title={item.title} subtitle={item.releaseYear} leftIcon={<Icon
        name='stop'
        color='#000' />}/>
    ) 
    return(
      <View>
        <ScrollView>
        <FlatList
          data={this.state.dataSource}
          renderItem={renderItem}
          keyExtractor={this.keyExtractor}
        />
        </ScrollView>
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => ListAPITest)