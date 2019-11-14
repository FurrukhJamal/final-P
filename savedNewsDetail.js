import React from "react";
import {ScrollView, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Linking} from "expo";

export default class SavedNewsDetail extends React.Component {

  getDetail = () => {
    Linking.openURL(this.props.navigation.getParam("savedDetail").fullDetail)
  }

  render() {
    const data = this.props.navigation.getParam("savedDetail")
    return (
      <ScrollView style = {styles.container}>
        <Image style = {styles.image}
          source = {{uri: data.image}}/>
        <Text style = {styles.heading}>{data.title}</Text>
        <Text style = {styles.detail}>{data.detail}</Text>
        <View style = {styles.source}>
          <Text style= {{fontWeight : "bold"}} >Source:</Text>
          {(data.source === "cnn") ? (<Text> CNN</Text>) : (<Text> BBC</Text>)}
        </View>
        <TouchableOpacity style = {{marginTop : 10}} onPress = {this.getDetail}>
          <Text style = {{color : "blue", textDecorationLine : "underline"}}>Read More</Text>
        </TouchableOpacity>
      </ScrollView>
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
    source : {
      flexDirection : "row",
      alignSelf: "flex-start",

      marginTop : 15,
      marginLeft : 25
    },
})
