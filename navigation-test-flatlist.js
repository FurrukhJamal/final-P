import React from "react";
import {FlatList, Text, Button, TextInput, View, StyleSheet } from "react-native";
// used with redux import store from "./store"
import {connect} from "react-redux";

const renderItem = obj =>{
  console.log(obj.item)
  return (
    <Text key = {obj.item.key}>{obj.item}</Text>
  )
}


class Todolist extends React.Component {
  render() {
    //console.log("params are", this.props.navigation.getParam("list"))
    //used with redux const todos = store.getState().todo
    return (
      <View>
        <FlatList
          renderItem = {renderItem}
          //used when redux is not used data = {this.props.navigation.getParam("list")}
          // used with redux data = {todos}
          data = {this.props.todos}
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



//React Redux
const mapStateToProps = state => ({
  todos : state.todo
})

export default connect(mapStateToProps)(Todolist)
