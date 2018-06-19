import React, { Component } from 'react'
import {AppRegistry, View,Text, StyleSheet} from 'react-native'
import { Scatterplot,SmoothLine,StockLine, Bar } from 'react-native-pathjs-charts'


export default class Chart extends Component{
  constructor(props){
    super(props);
    this.props.Lista
    this.props.Lista.reverse()

    if(this.props.Lista.length >= 4){
      this.props.Lista = this.props.Lista.slice(0,3)
    }
  }
  render() {
    
  
    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
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
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
  
    return (
      <View>
        <Bar data={this.props.List} options={options} accessorKey='v'/>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('WorkShopApp', () => Chart)