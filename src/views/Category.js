import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

const CATEGORY = [
  "Watches",
  "Pens"
];

const WATCHES = [
  {
    id: 1,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch1",
    priceOne: 320,
    priceTwo: "$280"
  },
  {
    id: 2,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch2",
    priceOne: 200,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch3",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch4",
    priceOne: 280,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch5",
    priceOne:130,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/watch.jpg"),
    name: "Watch6",
    priceOne: 250,
    priceTwo: null
  }
];

const PENS = [
  {
    id: 1,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen1",
    priceOne: 120,
    priceTwo: "$180"
  },
  {
    id: 2,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen2",
    priceOne: 100,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen3",
    priceOne: 50,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen4",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen5",
    priceOne: 40,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/pen.jpg"),
    name: "Pen6",
    priceOne: 30,
    priceTwo: null
  }
];

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "black" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Watches = () => {
    return WATCHES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              id:item.id,
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Pens = () => {
    return PENS.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Watches();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Pens();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "grey",
            color: 'black',
            flexDirection: "row",
            paddingTop:10
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;
