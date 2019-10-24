import React from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import store from "./store";
import {addtodo} from "./reducer"

export default class Addtodo extends React.Component {

  state = {
    value : "",
    //todos : []
  }

  submit = ()=> {
    console.log("TextInput value is", this.state.value)
    /*Used when not using redux*/
    // this.setState(previousstate => {
    //
    //
    //   return {
    //     value : "",
    //     todos : [...previousstate.todos, this.state.value]
    //   }
    //
    // })

    this.setState({
      value: ""
    })

    store.dispatch(addtodo(this.state.value))

  }

  handlechange= (textvalue) => {
    this.setState({
      value : textvalue
    })
  }


  viewtodolist = () => {
    console.log("todos are", this.state)
    this.props.navigation.navigate("todolist", {list : this.state.todos})
  }

  render(){
    return (
      <View style ={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput placeholder = "Write something" onChangeText = {this.handlechange} value = {this.state.value}/>
        <Button title = "Add a todo" onPress = {this.submit} />
        <Button title = "List" onPress = {this.viewtodolist}/>
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
