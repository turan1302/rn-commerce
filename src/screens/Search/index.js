import React, { Component, PureComponent } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { API_URL } from "../../config";
import axios from "axios";
import SearchCardView from "../../components/Search/SearchCardView";

export default class Search extends PureComponent {

  constructor() {
    super();
    this.state = {
      search : true,
      searchText : '',
      list : [
        {id : 1,name : "Ahmet", image : "https://source.unsplash.com/1024x768/?home"},
        {id : 2,name : "Mehmet", image : "https://source.unsplash.com/1024x768/?estate"},
        {id : 3,name : "Sabri", image : "https://source.unsplash.com/1024x768/?furniture"},
        {id : 4,name : "Nuri", image: "https://source.unsplash.com/1024x768/?kitchen"},
      ]
    }
  }


  _emptyList = ()=>{
    return (
      <View style={{alignItems : "center"}}>
        <Text>Herhangi Veri Bulunamadı</Text>
      </View>
    )
  }
  _renderItem = ({item,index})=>{
    return (
      <SearchCardView item={item}></SearchCardView>
    )
  }

  _searchProduct = ()=>{
    const {searchText,list} = this.state;
    if (searchText!='') {
      axios.post(`${API_URL}/product/search`, {
        p_title: searchText
      }).then((res) => {
        if (res.data.success) {
        this.setState({
          search : false,
          list: res.data.data
        });
         }else{
          console.log(res.data.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    }else{
      alert("Arama Kısmı Boş Olamaz");
    }
  }

  render() {

    const {navigation} = this.props;
    const {list,search,searchText} = this.state;

    return (
      <SafeAreaView style={{flex : 1}}>
        <View style={styles.search_area_body}>
          <View style={styles.search_area_container}>
            <Icon name={"search-outline"} color={"black"} size={24}></Icon>
            <TextInput value={searchText} onChangeText={(searchText)=>this.setState({searchText})} style={styles.search_input} placeholder={"What are you looking for"}></TextInput>
            <TouchableOpacity onPress={()=>{
              this._searchProduct();
            }}>
              <View style={styles.search_button}>
                <Icon name={"camera-outline"} size={24} color={"white"}/>
              </View>
            </TouchableOpacity>
          </View>

          {
            (search) ?

              <View style={styles.search}>
                <Image style={styles.search_image} source={require('../../../assets/images/product_search.png')}/>
              </View>

              :

          <View style={styles.product_list}>
            <FlatList ListEmptyComponent={this._emptyList} data={list} keyExtractor={(item)=>item.p_id} renderItem={this._renderItem} />
          </View>
          }
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  search_area_body : {
    flex : 1,
    marginTop : 15,
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
  search_area_container : {backgroundColor : "#e4f3f6",height : 50, flexDirection : "row",alignItems : "center" ,marginHorizontal : 12,paddingLeft : 10,borderRadius : 15},
  search_input : {flex : 1,paddingLeft : 15},
  search_button : {width : 50,height : 50,backgroundColor : "#004b3e",justifyContent : "center",alignItems : "center",borderRadius : 15},
  search : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  search_image : {
    aspectRatio : 1,
    resizeMode : "cover",
  },
  product_list : {
    marginTop : 20
  }
})
