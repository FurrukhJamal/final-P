import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from "react-native";
import {Linking , WebBrowser} from "expo";
import store from "./store";
import {saveNews} from "./reducer";
import {connect} from "react-redux"


class Newsdetailpage extends React.Component {

  handlepress = () => {
    Linking.openURL(this.props.navigation.getParam("newsDetail").fullDetail)
    //WebBrowser.openBrowserAsync(this.props.navigation.getParam("newsDetail").fullDetail)
  }

  handleSave = (data) => {
    //USED WITH REDUX store.dispatch(saveNews(data));

    this.props.SAVE(data)
    //console.log("redux store is", store.getState())

    //redirecting to either bbc news page or cnn
    if (data.source === "cnn" || data.source === "bbc-news" )
    {
      this.props.navigation.navigate("news")
    }

  }

  render() {
    const data = this.props.navigation.getParam("newsDetail")
    // get the news from redux thats saved
    //USED WITH REDUX const savedNews = store.getState().savedNews

    const savedNews = this.props.savedNews
    //console.log("savednews is", savedNews)

    //add a boolean key in data to control the display of save button below
    data["issaved"] = false
    savedNews.forEach((item)=> {
      //comparing titles that is if title is already in savednews
      if (item.title === data.title)
      {
        data["issaved"] = true
      }

    })

    //console.log("news detail object with flag for button", data)
    return(
      <View style = {styles.container}>
        <Image style = {styles.image}
          source = {{uri: data.image}}/>
        <Text style = {styles.heading}>{data.title}</Text>
        <Text style = {styles.detail}>{data.detail}</Text>
        <TouchableOpacity onPress = {this.handlepress} style = {styles.link}>
          <Text style = {styles.linkText}>Read More</Text>
          {data.issaved ? null : (<Button title = "Save It" onPress = {()=> this.handleSave(data)}/>)}
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
    flexDirection : "row"
  },
  linkText : {
    textDecorationLine: "underline",
    fontSize : 15,
    color : "blue",
    marginRight : 20
  }
})



const mapStateToProps = state => ({
  savedNews : state.savedNews
})


export default connect(mapStateToProps, {SAVE : saveNews})(Newsdetailpage)
