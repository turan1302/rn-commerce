import React, { Component, PureComponent } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from "./NavigationService";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Icon from 'react-native-vector-icons/Ionicons';


import { ACTIVE_COLOR,PASSIVE_COLOR }  from "./config";
import {Home,Profile,Search} from './screens'

// urun detay sayfası
import ProductDetail from "./screens/Product/ProductDetail";

// yeni urunler sayfası
import NewRivals from "./screens/NewRivals";

const screenOptions = ()=>{
  return {
    tabBarShowLabel : false,
    tabBarHideOnKeyboard : true,
    headerShown : false,
    tabBarStyle : {
      position : "absolute",
      bottom : 0,
      left : 0,
      right : 0,
      elevation : 0,
      height : 60,
      marginHorizontal : 15,
      marginVertical : 15,
      borderRadius : 20
    }
  }
}

export default class Router extends PureComponent {

  WelcomeRoute(){
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>

        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon : ({focused}) => {
            let icon = (focused) ? 'home' : 'home-outline';
            let color = (focused) ? ACTIVE_COLOR : PASSIVE_COLOR
            return (
              <Icon name={icon} color={color} size={24}/>
            )
          }
        }}></Tab.Screen>

        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon : ({focused}) => {
            let icon = (focused) ? 'search' : 'search-outline';
            let color = (focused) ? ACTIVE_COLOR : PASSIVE_COLOR
            return (
              <Icon name={icon} color={color} size={24}/>
            )
          }
        }}></Tab.Screen>

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon : ({focused}) => {
            let icon = (focused) ? 'person' : 'person-outline';
            let color = (focused) ? ACTIVE_COLOR : PASSIVE_COLOR
            return (
              <Icon name={icon} color={color} size={24}/>
            )
          }
        }}></Tab.Screen>
      </Tab.Navigator>
    )
  }


  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={"Welcome"} screenOptions={{
          headerShown : false,
        }}>
          <Stack.Screen name={"Welcome"} component={this.WelcomeRoute}></Stack.Screen>

          <Stack.Screen name={"NewRivals"} component={NewRivals}></Stack.Screen>
          <Stack.Screen name={"ProductDetail"} component={ProductDetail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
