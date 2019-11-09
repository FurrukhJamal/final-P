import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class News extends React.Component {
  static navigationOptions = {
  headerStyle: {display:"none"},

  }

  render() {
    return(
      <View>
        <Text style = {{fontSize: 50}}>News page</Text>
        <TouchableOpacity onPress = {()=> this.props.navigation.navigate("newsdetail")}>
          <Text>touch</Text>
          <Text>{this.props.navigation.state.routeName}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
