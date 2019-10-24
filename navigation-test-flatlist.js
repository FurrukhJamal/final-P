import React from "react";
import {FlatList, Text, Button, TextInput, View, StyleSheet } from "react-native";

const renderItem = obj =>{
  console.log(obj.item)
  return (
    <Text key = {obj.item.key}>{obj.item}</Text>
  )
}


export default class Todolist extends React.Component {
  render() {
    console.log("params are", this.props.navigation.getParam("list"))
    return (
      <View>
        <FlatList
          renderItem = {renderItem}
          data = {this.props.navigation.getParam("list")}
          keyExtractor = {(item, index) => index.toString()} />



          <Button title = "add more" onPress = {()=>{this.props.navigation.navigate("addtodo")}}></Button>
      </View>
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
