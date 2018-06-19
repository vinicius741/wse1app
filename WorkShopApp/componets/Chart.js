import React, { Component } from 'react'
import {AppRegistry, View,Text, StyleSheet} from 'react-native'
import { StockLine } from 'react-native-pathjs-charts'
import TimerMixin from 'react-timer-mixin';


export default class Chart extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: `StockLine - Dynamic Labels`,
  });
  constructor(props) {
    super(props)
    this.state = { data: [
      [
        {
          "date": 0,
          "value": 4.731333333333334
        }
      ]
    ] }

    
    fetch('https://workshop-c1d2d.firebaseio.com/.json')
    .then((response) => response.json())
    .then((responseJson) => {
        
      this.state.data[0].pop()
      let i = 0
      for (var key in responseJson) {

        if (responseJson.hasOwnProperty(key)) {
            this.state.data[0].push({ "value": responseJson[key].value, "date": i })
            i++
        }
      }
      this.state.data[0].reverse()

    })
    .catch((error) => {
      console.error(error);
    });
  }

  
  
  render() {

    

      
    const options = {
      width: 250,
      height: 250,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        // labelFunction: ((v) => {
        //   let d = v.split('_')
        //   let ds = d[0].split('-')
        //   let hs = d[1]

        //   return `${ds[2]}/${ds[1]}/${ds[0]} ${hs}`
        // }),
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    };
    
    return (
      <View style={styles.container}>
        <StockLine 
        data={this.state.data} 
        options={options} 
        xKey='date' 
        yKey='value' />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

AppRegistry.registerComponent('WorkShopApp', () => Chart)