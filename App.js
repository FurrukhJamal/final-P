import React from 'react';
import {FlatList, TextInput, StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux'
import {createSwitchNavigator, createAppContainer} from "react-navigation";
import Todolist from "./navigation-test-flatlist"
import Addtodo from "./test-addtodo";
import store from "./store"

// const addtodo = (todo) => ({
//   type: "Add Item",
//   payload : todo
// })
//
//
//
// const todoReducer = (state = [], action) => {
//   console.log("into reducer")
//   console.log(action.type)
//   const payload = action.payload
//   if(action.type === "Add Item")
//   {
//     return [...state, payload]
//   }
//   return state
//
//
// }
//
// const reducer = combineReducers({
//   todo : todoReducer
// })
// const store = createStore(reducer)
//
//
//
//
// const renderItem = obj =>{
//   console.log(obj.item)
//   return (
//     <Text>{obj.item.text}</Text>
//   )
// }
//
//
// export default class App extends React.Component{
//   submit = (value) => {
//     const todo = value.nativeEvent.text
//     store.dispatch(addtodo(todo))
//     console.log("Store")
//     console.log(store.getState())
//
//   }
//
//
//
//     // //console.log("insdeender item")
//     // data = store.getState().todo
//     // data.map((each, key) => {
//     //     return (
//     //       <Text>{each}</Text>
//     //     )
//     // })
//
//
//
//   render () {
//     //console.log(this.props)
//     let testdata = store.getState()
//     console.log(testdata)
//     return (
//
//       <Provider store={store}>
//         <View style ={styles.container}>
//           <Text>Open up App.js to start working on your app!</Text>
//           <TextInput
//             placeholder = "Write something"
//             onSubmitEditing = {this.submit}/>
//
//             <View>
//               <FlatList
//                 renderItem = {renderItem}
//                 data = {this.props.data}/>
//             </View>
//
//         </View>
//       </Provider>
//
//     );
//   }
//
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     //justifyContent: 'center',
//   },
// });
//
//
// const mapStateToProps = state => ({
//   data: state.todo,
// })


//export default connect(mapStateToProps)(App)

const AppNavigator = createSwitchNavigator({
  "addtodo" : Addtodo,
  "todolist" : Todolist
})


const AppContainer = createAppContainer(AppNavigator)

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
