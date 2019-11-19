import React, { Component } from "react";
import { createAppContainer,  createSwitchNavigator , } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import main from "./screens/main/index";
import barcode from "./screens/barcode/inde";
import combustivel from "./screens/combustivel/index";
import filtro from "./screens/filtro/index";
import lista from "./screens/list/index";
import {  Avatar2 } from './screens/main/styles'
const TabNavigator = createBottomTabNavigator({
  Combustivel: {
    screen:combustivel,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./assets/fuelstation.png')} /> 
      )
     
    },
  },
  BarCode:{ 
    screen:barcode,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./assets/bar_code.png')} />
      )
    },
  },
  Filtro:{ 
    screen:filtro,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./assets/filter.png')} />
      )
    },
  },
  List:{ 
    screen:lista,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./assets/clipboard.png')} />
      )
    },
  }
  
},
{
  tabBarOptions : {
    style: {
      borderTopColor: '#fff',
      borderColor:'#fff',
      backgroundColor: '#fff',
    }
  }
});
  const navigator = createStackNavigator({
    Post: {
      screen: main,
      navigationOptions: {
        header: null
      }
    },
    Tab:{
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
  })

  export default createAppContainer(navigator);