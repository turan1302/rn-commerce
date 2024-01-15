import React, { Component, PureComponent } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as NavigationService from '../../NavigationService';

export default class HomeProductCardView extends Component {
  render() {

    const {item} = this.props; // number of lines ile sadece 1 satırda olmasını istedik

    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>NavigationService.navigate("ProductDetail",{
          id : item.p_id
        })}>
        <View style={styles.image_area}>
          <Image style={styles.image} source={{uri : item.p_image}}></Image>
          <View style={styles.item_detail_area}>
            <Text style={styles.item_detail_first_title} numberOfLines={1}>{item.p_title}</Text>
            <Text style={styles.item_detail_second_title} numberOfLines={1}>{item.p_description}</Text>
           <View style={styles.item_add_cart_area}>
             <Text style={styles.item_detail_third_title} numberOfLines={1}>{item.p_price} ₺</Text>
             <TouchableOpacity>
               <Icon name={"add-circle"} color={"#ccc"} size={30}/>
             </TouchableOpacity>
           </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item : {
    marginTop : 15,
    marginEnd : 22,
    backgroundColor : "#e4f3f6",
    width : 182,
    height : 200,
    borderRadius : 10,
    marginBottom : 30
  },
  image_area : {
    backgroundColor : "#e4f3f6",
    width : 178,
    height : 200,
    margin : 2,
    borderRadius : 10,
    overflow : "hidden"
  },
  image : {
    borderRadius : 10,
    resizeMode : "cover",
    aspectRatio : 1.5  // burada genişlik ve yükseklik oranı verdirdik
  },
  item_detail_area : {
    paddingHorizontal : 5,
    paddingBottom : 5
  },
  item_detail_first_title : {
    color : "black",
    fontFamily : "Poppins-Bold",
    fontSize : 15
  },
  item_detail_second_title : {
    color : "black",
  },
  item_detail_third_title : {
    color : "black",
  },
  item_add_cart_area : {flexDirection : "row",justifyContent : "space-between"}
})
