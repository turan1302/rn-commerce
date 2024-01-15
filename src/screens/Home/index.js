import React, { Component, PureComponent } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Welcome from "../../components/Home/Welcome";
import Slider from "../../components/Home/Slider";
import Headings from "../../components/Home/Headings";
import HomeProductRow from "../../components/Home/HomeProductRow";

export default class Home extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.header}>
          <Icon name={"location-outline"} color={"black"} size={30}/>
          <Text style={styles.home_header_location_text}>Konya / Turkey</Text>

          <TouchableOpacity>
            <View>
              <View style={styles.header_cart}>
                <Text style={{color : "white"}}>15</Text>
              </View>
              <Icon name={"cart-outline"} size={30} color={"black"}/>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.welcome_area_scroll} showsVerticalScrollIndicator={false}>
          <Welcome />
          <Slider/>
          <Headings/>
          <HomeProductRow/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
  },
  header : {
    marginHorizontal : 22,
    marginTop : 12,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between"
  },
  header_cart : {
    width : 20,
    height : 20,
    backgroundColor : "green",
    position : "absolute",
    zIndex : 1,
    right : -4,
    top : -4,
    borderRadius : 10,
    alignItems : "center",
  },
  home_header_location_text : {
    fontFamily : "Poppins-SemiBold",
    color : "black",
  },
  welcome_area_scroll : {
    marginTop : 10
  }
})
