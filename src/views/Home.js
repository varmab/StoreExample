import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          <HomeCategory
            imageUri={require("../../assets/watch.jpg")}
            titleFirst="Watches"
            titleSecond="Fashion"
            subTitle="Specials!"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/pen.jpg")}
            titleFirst="Pens"
            titleSecond="Latest"
            subTitle="New Pens"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/shoe.jpg")}
            titleFirst="Shoes"
            titleSecond="Fashion"
            subTitle="Latest fashions!"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/watch.jpg")}
            titleFirst="Watches"
            titleSecond="Fashion"
            subTitle="Specials!"
            {...this.props}
        />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
