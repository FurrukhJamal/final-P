import React from "react";
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import Newslist from "./newslist"
import {getNewsData} from "./newsappi";
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


  state = {
    testdata : null
  }


  componentDidMount(){
    console.log("component loaded")
    this.newssearch()
    // this.setState({
    //   onSelect : this.handleNewsdetail
    // })
  }


  newssearch = async() => {
    console.log("inside")
    let data = await getNewsData("cnn")
    console.log(data)
    this.setState({
      testdata : data
    })

  }

  handleNewsdetail = (newsobject)=> {
    console.log("News detail object is", newsobject)
    this.props.navigation.navigate("newsdetail", {newsDetail : newsobject})

  }


  render() {
    if(this.state.testdata)
    {
      //adding a onSelect to each data object
      let dataWithFunction = this.state.testdata.map((obj)=> {
        return ({
          ...obj,
          onSelect : this.handleNewsdetail
        })
      })
      return (
        <View style ={styles.container}>
          <Text>Bbc page</Text>
          <TouchableOpacity
            onPress = {()=> this.props.navigation.navigate("newsdetail")}>
            <Text>touch</Text>
            <Text>{this.props.navigation.state.routeName}</Text>
          </TouchableOpacity>

            <Newslist
              newsData = {dataWithFunction}
              />

        </View>


          )
    }
    else
    {
      return (
        <View style = {styles.loading}>
          <Image
              style = {{width: 50,height: 50}}
              source = {require("./ajax-loader.gif")}/>
        </View>)
    }

  }
}



const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    //backgroundColor : "red",

  },

  loading : {
    flex : 1,
    justifyContent : 'center',
    alignItems : "center",
    //backgroundColor : "blue"


  }
})
