import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createDrawerNavigator} from "@react-navigation/drawer";

import Icon from "@expo/vector-icons/Ionicons";
import Home from "./src/views/Home";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";
import EditBasket from "./src/views/EditBasket";
import Address from "./src/views/Address";

import { store } from './src/redux_shop'
import { Provider } from 'react-redux'


const Stack=createStackNavigator();
const HomeStack = createStackNavigator();

const HomeDrawNavigator= createDrawerNavigator();


export default function App() {
  return (

    /*
     <NavigationContainer>
           <HomeStackScreen/>
    </NavigationContainer>

    */
   <Provider store={store}>
      <NavigationContainer>
            <HomeDrawNavigatorScreen/>
      </NavigationContainer>
    </Provider>
  );
}

function HomeStackScreen() {
  return (
      <HomeStack.Navigator
        initialRouteName="Home"
      >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options  ={({ navigation }) => ({
          headerTitle: "Home",
          headerTitleStyle: {
            color: "white"
          },
          headerStyle: {
            backgroundColor: "black"
          },
          headerLeft: () => (
            <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
          ),
          headerRight: () => (
            <Text style={{color:'white',paddingRight:15,fontSize: 20}}>Dummy Store</Text>
          )
        })}
      />
      <HomeStack.Screen
        name="Category"
        component={Category}
        options={({ navigation }) => {
          return {
            headerTitle: navigation.name,
            headerTitleStyle: {
              color: "white"
            },
            headerStyle: {
              backgroundColor: "black"
            },
            headerLeft: () => (
              <Icon
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              color="white"
              size={30}
              style={{
                paddingLeft: 10
              }}
            />
            ),
            headerRight: () => (
              <Text style={{color:'white',paddingRight:15,fontSize: 20}}>Dummy Store</Text>
            )
          };
        }
      }
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              color: "white"
            },
            headerStyle: {
              backgroundColor: "black"
            },
            headerTitle: navigation.detailName,
            gesturesEnabled: false,
            headerLeft: () => (
              <Icon
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              color="white"
              size={30}
              style={{
                paddingLeft: 10
              }}
            />
            ),
            headerRight: () => (
              <Text style={{color:'white',paddingRight:15,fontSize: 20,fontSize: 20}}>Dummy Store</Text>
            )
          };
        }

        }
      />
       <HomeStack.Screen
        name="Basket"
        component={Basket}
        options={({ navigation }) => {
          return {
            headerTitle: navigation.name,
            headerTitleStyle: {
              color: "white"
            },
            headerStyle: {
              backgroundColor: "black"
            },
            headerLeft: () => (
              <Icon
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              color="white"
              size={30}
              style={{
                paddingLeft: 10
              }}
            />
            ),
            headerRight: () => (
              <Text style={{color:'white',paddingRight:15,fontSize: 20,fontSize: 20}}>Dummy Store</Text>
            )
          };
        }
      }
      />
    </HomeStack.Navigator>
  );
}

function HomeDrawNavigatorScreen(){
  return (
    <HomeDrawNavigator.Navigator drawerContentOptions={{
      activeTintColor: '#ed7a0e',
      itemStyle: { marginVertical: 5 , borderWidth: 1 , borderColor:'#ed7a0e'},
    }}>
    <HomeDrawNavigator.Screen
      name="Home"
      component={HomeStackScreen} 
    />
    <HomeDrawNavigator.Screen
      name="Basket"
      component={Basket} 
    />
  </HomeDrawNavigator.Navigator>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
