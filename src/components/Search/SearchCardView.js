import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as NavigationService from '../../NavigationService';

export default class SearchCardView extends Component {
  render() {
      const {item} = this.props;

    return (
      <TouchableOpacity onPress={()=>NavigationService.navigate('ProductDetail',{id : item.p_id})}>
        <View style={styles.product_item}>
          <Image style={styles.product_image} source={{uri : item.p_image}}></Image>
          <View style={styles.product_detail}>
            <Text style={styles.product_title}>{item.p_title}</Text>
            <Text style={styles.product_supplier}>{item.p_supplier}</Text>
            <Text style={styles.product_price}>{item.p_price} ₺</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  product_item : {
    flexDirection : "row",
    backgroundColor : "white",
    marginHorizontal : 8,
    marginVertical : 8,
    padding : 8,
    height : 80,
    borderRadius : 10
  },
  product_image : {
    resizeMode : "cover",
    aspectRatio : 1.5,
    borderRadius : 10
  },
  product_detail : {
    marginLeft : 10
  },
  product_title : {
    color : "black",
    fontFamily : "Poppins-SemiBold"
  },
  product_supplier : {
    color : "black",
    fontSize : 13,
    fontFamily : "Poppins-Light"
  },
  product_price : {
    color : "black",
    fontFamily : "Poppins-SemiBold"
  }
})
