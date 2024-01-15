import React, { Component, PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as NavigationService from '../../NavigationService';

export default class Headings extends PureComponent {
  render() {
    return (
     <View style={styles.body}>
       <View style={styles.headings_area}>
         <Text style={styles.headings_text}> New Rivals </Text>
        <TouchableOpacity onPress={()=>NavigationService.navigate("NewRivals")}>
          <Icon name={"grid"} color={"black"} size={24}/>
        </TouchableOpacity>
       </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    flex : 1
  },
  headings_area : {
    marginTop : 8,
    marginHorizontal : 12,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center"
  },
  headings_text : {
    marginTop : 12,
    fontFamily : "Poppins-Bold",
    fontSize : 20
  }
})
