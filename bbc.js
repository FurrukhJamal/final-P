import React from "react";
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import Newslist from "./newslist"
import {getNewsData} from "./newsappi";

export default class Bbc extends React.Component {
  static navigationOptions = {
    //headerStyle: {display:"none"},
    headerTitle : () => {
      return (
        <Image
          style = {{width: 60, height: 60, resizeMode : "stretch"}}
          source = {require("./bbc-icon-14.jpg")}/>
      )
    }
  }

  state = {
    testdata : null
  }


  componentDidMount(){
    //console.log("component loaded")
    this.newssearch()
    setInterval(this.newssearch, 1000 * 60 * 5 )
  }


  newssearch = async() => {
    //console.log("inside")
    //for visual loading wheel everytime data is refreshed
    this.setState({
      testdata : null
    })


    let data = await getNewsData("bbc-news")
    //console.log(data)
    this.setState({
      testdata : data
    })

  }

  handleNewsdetail = (newsobject)=> {
    //console.log("News detail object is", newsobject)
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
