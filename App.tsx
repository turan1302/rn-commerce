import React, { Component, PureComponent } from "react";
import { Text, View } from 'react-native'
import Router from "./src/Router";

export default class App extends PureComponent {
  render() {
    return (
      <Router/>
    )
  }
}
