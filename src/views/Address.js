import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

class Address extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            paddingBottom: 15,
            paddingHorizontal: 15,
            marginTop: 20
          }}
        >
          <KeyboardAwareScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
            <Text label="Your name" value="Johnny" widthHalf={true} />
              <Text value="Doe" widthHalf={true} />
            </View>
            <Text label="Address line" value="11144 Military Trail (North)" />
            <Text label="Address line 2" value="Apartment #3122" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Text label="City" value="Palo Alto" widthHalf={true} />
              <Text label="Zip" value="23122" widthHalf={true} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Text label="State" value="California" widthHalf={true} />
              <Text label="Country" value="United States" widthHalf={true} />
            </View>
          </KeyboardAwareScrollView>
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              paddingBottom: 5
            }}
          >
            Shipping Options
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingBottom: 5
            }}
          >
            Please ship to another address
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Shipping")}
              style={{
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Address;
