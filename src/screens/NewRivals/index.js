import React, { Component } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { API_URL } from "../../config";
import ProductCardView from "../../components/Product/ProductCardView";

export default class NewRivals extends Component {

  constructor() {
    super();
    this.state = {
      list : [],
      loading : true
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/product/list`).then((res)=>{
      if (res.data.success){
      this.setState({
        list : res.data.data,
        loading : false
      });
        }else{
        console.log(res.data.message);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  _renderItem = ({item})=>{
    return <ProductCardView item={item}></ProductCardView>
  }


  render() {
    const {navigation} = this.props;
    const {loading,list} = this.state;

    return (
      <SafeAreaView style={styles.body}>
       <TouchableOpacity onPress={()=>navigation.goBack()}>
         <View style={styles.header}>
           <Icon name={"chevron-back-circle"} color={"white"} size={22}/>
           <Text style={styles.header_text}>Products</Text>
         </View>
       </TouchableOpacity>

        <View style={styles.product_area}>
          {
            (loading) ?
              <ActivityIndicator style={styles.activity_indicator} size={30}>
              </ActivityIndicator>
              :
              <FlatList keyExtractor={(item)=>item.p_id} showsHorizontalScrollIndicator={false} numColumns={2} data={list} renderItem={this._renderItem}></FlatList>
          }
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    marginHorizontal : 8
  },
  header : {
    flexDirection : "row",
    alignItems : "center",
    alignContent : "center",
    backgroundColor : "#004b3e",
    marginTop : 12,
    borderRadius : 15
  },
  header_text: {
    marginTop : 3,
    paddingLeft :3,
    color : "white",
    fontFamily : "Poppins-SemiBold"
  },
  product_area : {
    marginTop : 10
  }
});
