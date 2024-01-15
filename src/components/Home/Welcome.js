import React, { Component, PureComponent } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as NavigationService from '../../NavigationService';

export default class Welcome extends PureComponent {
  render() {

      const {navigation} = this.props;

    return (
     <View>
         <View style={styles.search_area_body}>
             <Text style={styles.search_first_title}> Find The Most </Text>
             <Text style={styles.search_second_title}> Luxurious Furniture </Text>
         </View>

         <View style={styles.search_area_container}>
            <Icon name={"search-outline"} color={"black"} size={24}></Icon>
             <TextInput style={styles.search_input} placeholder={"What are you looking for"}></TextInput>
             <TouchableOpacity onPress={()=>{
                 NavigationService.navigate("Search");
             }}>
                <View style={styles.search_button}>
                   <Icon name={"camera-outline"} size={24} color={"white"}/>
                </View>
             </TouchableOpacity>
         </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
    search_area_body : {
      marginHorizontal : 12
    },
    search_first_title : {
        fontFamily : "Poppins-SemiBold",
        fontSize : 35,
        marginTop : 10,
        color : "black"
    },
    search_second_title : {
        fontFamily : "Poppins-SemiBold",
        fontSize : 30,
        color : "#004b3e"
    },
    search_area_container : {backgroundColor : "#e4f3f6",height : 50, flexDirection : "row",alignItems : "center" ,marginTop : 12,marginHorizontal : 12,paddingLeft : 10,borderRadius : 15},
    search_input : {flex : 1,paddingLeft : 15},
    search_button : {width : 50,height : 50,backgroundColor : "#004b3e",justifyContent : "center",alignItems : "center",borderRadius : 15}
})
