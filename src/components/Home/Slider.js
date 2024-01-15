import React, { Component, PureComponent } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";


export default class Slider extends PureComponent {

  constructor() {
    super();
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?home",
        "https://source.unsplash.com/1024x768/?estate",
        "https://source.unsplash.com/1024x768/?furniture",
        "https://source.unsplash.com/1024x768/?kitchen",
      ]
    };
  }

  render() {

    const slider_width = Dimensions.get("screen").width - 25;

    return (
      <View style={{flex : 1,justifyContent : "center",alignItems : "center"}}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          autoplay
          circleLoop
          autoplayInterval={5000}
          ImageComponentStyle={styles.slider}
          parentWidth={slider_width}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider : {
    width : "100%",
    marginTop : 25,
    marginHorizontal : 12,
    borderRadius : 15
  }
})
