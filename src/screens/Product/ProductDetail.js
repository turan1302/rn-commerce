import React, { Component, PureComponent } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { API_URL } from "../../config";

export default class ProductDetail extends PureComponent {

  constructor() {
    super();
    this.state = {
      veto : 10,
      ratings : 5,
      product : {}
    }
  }

  _renderRatings = ()=>{
    const { ratings } = this.state;
    const ratings_data = [];
    for (let i=0; i < ratings; i++) {
      ratings_data.push(
        <Icon key={"item_"+i} name={"star"} color={"orange"} size={20} />
      );
    }
    return ratings_data;
  }


  componentDidMount() {
    const {params} = this.props.route;
    axios.get(`${API_URL}/product/detail/${params.id}`).then((res)=>{
      if (res.data.success) {
      this.setState({product: res.data.data});
        }else{
        console.log(res.data.message);
      }
    }).catch((err)=>{
      console.log(err);
    });
  }

  render() {
    const {navigation} = this.props;
    const {veto,product} = this.state;

    return (
      <SafeAreaView style={styles.body}>
       <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.header}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Icon name={"chevron-back-circle"} color={"black"} size={24}/>
           </TouchableOpacity>

           <TouchableOpacity>
             <Icon name={"heart"} color={"black"} size={24}/>
           </TouchableOpacity>
         </View>

        <View>
          <Image style={styles.image} source={{uri : "https://source.unsplash.com/1024x768/?estate"}}></Image>
        </View>

         <View style={styles.details_area}>
            <View style={styles.details_title_area}>
              <View style={{width : "70%"}}>
                <Text style={styles.details_title} numberOfLines={2}>{product.p_title}</Text>
              </View>
              <View style={styles.price_area}>
                <Text style={styles.price}>{product.p_price} ₺</Text>
              </View>
            </View>

           <View style={styles.rating_area}>
            <View style={styles.rating_left}>
              {this._renderRatings()}
              <Text style={styles.rating_left_average}>4.5</Text>
            </View>

             <View style={styles.rating_right}>
               <TouchableOpacity onPress={()=>this.setState({veto : veto+1})}>
                 <Icon name={"add-circle-outline"} color={"black"} size={23}></Icon>
               </TouchableOpacity>
               <Text style={styles.rating_right_vote}>{veto}</Text>
               <TouchableOpacity onPress={()=>this.setState({veto : veto-1})}>
                 <Icon name={"remove-circle-outline"} color={"black"} size={23}></Icon>
               </TouchableOpacity>
             </View>
           </View>

           <View style={styles.description_area}>
              <Text style={styles.description_title}>Ürün Açıklaması</Text>
              <Text style={styles.description_desc}>{product.p_description}</Text>
           </View>

           <View style={styles.location_area}>
            <View style={styles.location_info}>
              <Icon name={"location-outline"} color={"black"} size={24}></Icon>
              <Text style={styles.location_text}>{product.p_location}</Text>
            </View>

             <View style={styles.order_info}>
               <Icon name={"cart-outline"} color={"black"} size={24}></Icon>
               <Text style={styles.order_text}>Hızlı Teslim</Text>
             </View>
           </View>

           <View style={styles.buy_area}>
             <TouchableOpacity>
              <View style={styles.buy_button}>
                <Text style={styles.buy_button_text}>Buy Now</Text>
              </View>
             </TouchableOpacity>

             <TouchableOpacity>
               <View style={styles.add_cart}>
                 <Icon name={"card-outline"} color={"white"} size={34}></Icon>
               </View>
             </TouchableOpacity>
           </View>
         </View>
       </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    backgroundColor : "white"
  },
  header : {
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    position : "absolute",
    paddingLeft : 20,
    top : 10,
    width : "97%",
    zIndex : 99
  },
  image : {
    aspectRatio : 1,
    resizeMode : "cover"
  },
  details_area : {paddingHorizontal : 10,backgroundColor : "white",flex : 1,borderTopLeftRadius : 20,borderTopRightRadius : 20,marginTop : -20},
  details_title_area : {paddingTop : 10,flex : 1,flexDirection : "row",justifyContent : "space-between",alignItems : "center",width : "100%"},
  details_title : {fontSize : 24,fontFamily : "Poppins-SemiBold",color : "black"},
  price_area : {
    backgroundColor : "#e4f3f6",
    padding : 10,
    borderRadius : 20
  },
  price : {
    fontFamily : "Poppins-Bold",
    fontSize : 13,
    color : "black"
  },
  rating_area : {flexDirection : "row",alignItems : "center",justifyContent : "space-between",marginTop : 10},
  rating_left : {flexDirection : "row",alignItems : "center",justifyContent : "center"},
  rating_right :{flexDirection : "row",alignItems : "center",justifyContent : "space-evenly"},
  rating_left_average : {marginLeft : 12,fontSize : 15,fontFamily : "Poppins-Bold"},
  rating_right_vote : {marginHorizontal : 5},

  description_area : {
    flex : 1,
    marginTop : 15
  },
  description_title: {
    color : "black",
    fontFamily : "Poppins-Bold"
  },
  description_desc : {
    color : "black"
  },
  location_area : {
    marginVertical : 10,
    backgroundColor : "#e4f3f6",
    padding : 8,
    borderRadius : 15,
    flexDirection : "row",
    justifyContent : "space-between"
  },
  location_info : {
    flexDirection : "row",
    alignItems : "center"
  },
  location_text : {
    marginLeft : 8,
    color : "black"
  },
  order_info : {
    flexDirection : "row",
    alignItems : "center"
  },
  order_text : {
    marginLeft : 8,
    color : "black"
  },
  buy_area : {
    marginVertical : 10,
    flexDirection : "row",
    justifyContent : "space-between"
  },
  buy_button : {
    backgroundColor : "black",
    flex : 1,
    padding : 8,
    justifyContent : "center",
    alignItems : "center",
    width : Dimensions.get("screen").width / 1.30,
    borderRadius : 20
  },
  buy_button_text : {
    color : "white",
    fontFamily : "Poppins-Bold"
  },
  add_cart : {
    backgroundColor : "black",
    padding : 8,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 30
  }
})
