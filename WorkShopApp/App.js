/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  View, 
  ScrollView
} from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';



var list = [
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


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    //this.state ={ isLoading: true}
  }

  // componentDidMount(){
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.movies,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }
  render() {
    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20}}>
    //       <ActivityIndicator/>
    //     </View>
    //   )
    // }
    // keyExtractor = (item, index) => index

    // renderItem = ({ item }) => (
    //   <ListItem
    //     title={item.title}
    //     subtitle={item.releaseYear}
    //     leftIcon={{ name: 'stop' }}
    //   />
    // )

    // renderItem = ({ item }) =>(
    //   <ListItem title={item.title} subtitle={item.releaseYear} leftIcon={<Icon
    //     name='stop'
    //     color='#000' />}/>
    // ) 
    return (
      <View style={{flex: 1}}>
        <Header
          centerComponent={{ text: 'Workshop', style: { color: '#fff' } }}
          rightComponent={
            <Icon
              name='sync'
              color='#fff'
              onPress={() => {console.log('hello')}} 
              />
            
            }
        />

        {/* <FlatList
          data={this.state.dataSource}
          renderItem={renderItem}
          keyExtractor={this.keyExtractor}
        /> */}
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
    );
  }
}

const styles = StyleSheet.create({
 
});
