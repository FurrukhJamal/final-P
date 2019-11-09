import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Cnn extends React.Component {
  static navigationOptions = {
    headerTitle : () => {
      return (
        <Image
          style = {{width : 60, height : 60, resizeMode : "stretch"}}
          source = {require("./cnn.jpg")}/>
      )
    }
  }


  render() {
    return(
      <View style = {{flex : 1, backgroundColor : "grey"}}>
        <Text>Cnn page</Text>
        <TouchableOpacity onPress = {()=> this.props.navigation.navigate("newsdetail")}>
          <Text>touch</Text>
          <Text>{this.props.navigation.state.routeName}<Ionicons name = "ios-star" size = {40} color = "blue"/></Text>
        </TouchableOpacity>
      </View>
    )
  }
}
