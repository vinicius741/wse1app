import React, { Component } from 'react';

import { TouchableOpacity, 
         AppRegistry, 
         View, 
         StyleSheet, 
         FlatList, 
         ActivityIndicator, 
         ScrollView } from 'react-native';

import { ListItem, Icon } from 'react-native-elements';



export default class ListAPITest extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch('https://192.168.1.3:5002/readings')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.readings,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return(
        <View style = {{ flex: 1, padding: 20 }}>
          <ActivityIndicator/>
        </View>
      )
    }

    _onPress = ({ item }) => (
      console.log("item pressed.")
    )

    renderItem = ({ item }) => (

      <TouchableOpacity onPress = { this._onPress } >
        <ListItem 
          title = { item.sensor } 
          leftIcon = {
            <Icon
              name = { item.icon }
              color = '#000' />
          }
        />
      </TouchableOpacity>

    ) 

    return(
      <View>
        <ScrollView>
        <FlatList
          data = { this.state.dataSource }
          renderItem = { renderItem }
        />
        </ScrollView>
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => ListAPITest)