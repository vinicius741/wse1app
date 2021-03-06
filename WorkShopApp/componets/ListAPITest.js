import React, { Component } from 'react';

import { TouchableOpacity, 
         AppRegistry, 
         View, 
         StyleSheet, 
         FlatList, 
         ActivityIndicator, 
         ScrollView,
         RefreshControl } from 'react-native';

import { ListItem, Icon } from 'react-native-elements';

import Chart from './Chart'



export default class ListAPITest extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
    this.state = { refreshing: false };
    this.state = { listChart: [] }
  }
  componentDidMount() {
    return fetch('https://workshop-c1d2d.firebaseio.com/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let list = [ ]
        

        for (var key in responseJson) {

          if (responseJson.hasOwnProperty(key)) {
              list.push(responseJson[key]);
              this.state.listChart.push({ "v": responseJson[key].value, "name": responseJson[key].date })
          }
        }
        list.reverse()
        
        this.setState({
          isLoading: false,
          dataSource: list,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  _keyExtractor = (item, index) => item.date;

  formateDate(data){
    let d = data.split('_')
    let ds = d[0].split('-')
    let hs = d[1]

    return `${ds[2]}/${ds[1]}/${ds[0]} ${hs}`
  }

  geticon(val){
    if(val == 0){
      return 'stop'
    }
    else if(val > 0 && val < 20){
      return 'play-arrow'
    } else {
      return 'fast-forward'
    }
  }
  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://workshop-c1d2d.firebaseio.com/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let list = [ ]
        for (var key in responseJson) {

          if (responseJson.hasOwnProperty(key)) {
              list.push(responseJson[key]);
          }
        }
        list.reverse()
        
        this.setState({
          isLoading: false,
          dataSource: list,
        }, function(){

        });

      }).then(()=>{
        this.setState({refreshing: false});
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
          title = { item.value.toFixed(2).toString() + " L/m" }
          subtitle = { this.formateDate(item.date) }
          keyExtractor={this._keyExtractor}
          leftIcon = {
            <Icon
              name = { this.geticon(item.value) }
              color = '#000' />
          }
          
        />
      </TouchableOpacity>

    ) 

    return(
      <View>

        <ScrollView
          
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }>
          <View style={{flex:1}}>
            {/* <Chart style = {styles.chartstyle}
            /> */}
            <FlatList
              data = { this.state.dataSource }
              renderItem = { renderItem }
              
            />
          </View>
          
          <View style={styles.sizecontrol}></View>
        </ScrollView>
      </View>
    )
    
  }
}
const styles = StyleSheet.create({
  sizecontrol: {
    width: 50, 
    height: 90
  },
  chartstyle: {
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('WorkShopApp', () => ListAPITest)