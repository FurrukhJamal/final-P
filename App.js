import React from 'react';
import {FlatList, TextInput, StyleSheet, Text, View, Image } from 'react-native';
import {createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux'
import {createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
//import Todolist from "./navigation-test-flatlist"
//import Addtodo from "./test-addtodo";
import store from "./store"
import Cnn from "./cnn";
import Bbc from "./bbc";
import Favorites from "./favorites.js"
import Newsdetailpage from "./newsdetailpage";
import Ionicons from "react-native-vector-icons/Ionicons";
import SavedNewsDetailPage from "./savedNewsDetail";

/*BUG FIX*/
/*START*/
/*was getting an error
"Setting a timer for a long period of time, i.e. multiple minutes,
 is a performance and correctness issue on Android as it keeps the
 timer module awake, and timers can only be called when
 the app is in the foreground."

 So found on stackoverflow to paste the below code at the start of
 codebase in the following link

 https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes*/
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
/*END*/

const BbcStack = createStackNavigator({
  "news": Bbc,
  "newsdetail" : Newsdetailpage
},
  {
    initialRouteName : "news",
    headerLayoutPreset: 'center',
  })


  BbcStack.navigationOptions = {
    tabBarIcon : ({tintColor}) => {
      return (
        <Image
          style = {{width: 30, height: 30, resizeMode : "stretch"}}
          source = {require("./bbc-icon-14.jpg")}/>
      )
    }
  }


  const CnnStack = createStackNavigator({
    "news": Cnn,
    "newsdetail" : Newsdetailpage
  },
    {
      initialRouteName : "news",
      headerLayoutPreset : "center"
    })

    CnnStack.navigationOptions = {
      tabBarIcon : () => {
        return(
          <Image
            style = {{width: 30, height : 30, resizeMode : "stretch"}}
            source = {require("./cnn.jpg")}/>
        )
      }
    }


const savedStack = createStackNavigator({
  "savedpage" : Favorites,
  "saved-detail" : SavedNewsDetailPage
},
 {
   initialRouteName : "savedpage"
 })



 savedStack.navigationOptions = {
     tabBarIcon : ({focused, tintColor}) => (
     <Ionicons name = "ios-star" size = {20} color = {tintColor} />
   )

 }







const MainTabs = createBottomTabNavigator({
  "cnn" : CnnStack,
  "bbc" : BbcStack,
  "favorites": savedStack
},
  {
    tabBarOptions: {
      activeTintColor : "blue",
      labelStyle: {
        fontSize : 20
      },
      showLabel: true,
      style : {
        height : 65
      },
    },

  })



const AppContainer = createAppContainer(MainTabs)

export default class App extends React.Component {
  render(){
    return(
      <Provider store= {store}>
        <AppContainer/>
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
