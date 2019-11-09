import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Favorites extends React.Component {
  static navigationOptions = {
    headerTitle : "Saved News"
  }

  render() {
    return(
      <View>
        <Text>Favorites page</Text>
        <TouchableOpacity onPress = {()=> this.props.navigation.navigate("saved-detail")}>
          <Text>touch</Text>
          <Text>{this.props.navigation.state.routeName}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
