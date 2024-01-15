import React, { Component, PureComponent } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeProductCardView from "./HomeProductCardView";
import axios from "axios";
import { API_URL } from "../../config";

export default class HomeProductRow extends PureComponent {


  constructor() {
    super();



    this.state = {
      list : [],
      loading : true
    }
  }


  _renderItem = ({item})=>{
    return <HomeProductCardView item={item}></HomeProductCardView>
  }


  componentDidMount() {
    axios.get(`${API_URL}/product/list`).then((res)=>{
      if (res.data.success) {
     this.setState({
       list : res.data.data,
       loading : false
     });
        }else{
        console.log(res.data.message)
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {

    const {list,loading} = this.state;

    return (
      <SafeAreaView style={styles.body}>
        {
          (loading) ?
       <ActivityIndicator style={styles.activity_indicator} size={30}>
       </ActivityIndicator>
            :
       <FlatList keyExtractor={(item)=>item.p_id} showsHorizontalScrollIndicator={false} horizontal={true} data={list} renderItem={this._renderItem}></FlatList>
        }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    marginHorizontal : 12,
  },
  activity_indicator : {flex : 1,flexDirection : "row",justifyContent : "center",alignItems : "center",marginTop : 50}
})
