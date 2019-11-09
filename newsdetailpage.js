import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Linking , WebBrowser} from "expo";

export default class Newsdetailpage extends React.Component {

  handlepress = () => {
    Linking.openURL(this.props.navigation.getParam("newsDetail").fullDetail)
    //WebBrowser.openBrowserAsync(this.props.navigation.getParam("newsDetail").fullDetail)
  }

  render() {
    const data = this.props.navigation.getParam("newsDetail")
    return(
      <View style = {styles.container}>
        <Image style = {styles.image}
          source = {{uri: data.image}}/>
        <Text style = {styles.heading}>{data.title}</Text>
        <Text style = {styles.detail}>{data.detail}</Text>
        <TouchableOpacity onPress = {this.handlepress} style = {styles.link}>
          <Text style = {styles.linkText}>Read More</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    //justifyContent : "center",
    alignItems : "center",
  },
  heading : {
    fontSize: 20,
    fontWeight: "bold",
    textTransform : "capitalize",
    marginBottom : 15,

  },
  image: {
    width : 200,
    height : 200,
    marginBottom : 10
  },
  detail : {
    marginLeft : 25,
    marginRight : 25,
    fontSize : 15,
  },
  link : {
    alignSelf : "flex-start",
    marginLeft : 25,
    marginTop : 10,
  },
  linkText : {
    textDecorationLine: "underline",
    fontSize : 15,
    color : "blue"
  }
})
