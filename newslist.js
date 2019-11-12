import React from "react";
import {TouchableOpacity, Text, FlatList, StyleSheet, Image, View, Dimensions} from "react-native";
import PropTypes from "prop-types"

const renderNewsList = (obj) => (
  <TouchableOpacity
    key ={obj.item.key}
    style = {styles.container}
    onPress = {() => obj.item.onSelect(obj.item)}>
    <View style = {styles.newsLine}>
      <Image
        style = {{height : 60, width : 60}}
        source = {{uri : obj.item.image}}/>

      <Text style = {{paddingLeft : 10, fontSize : 15, flex: 1,  }}>{obj.item.title}</Text>

    </View>
  </TouchableOpacity>
)


const NewsList = props => (
  <FlatList
    renderItem = {renderNewsList}
    data = {props.newsData}
    keyExtractor = {(item, index) => index.toString()}/>
)


NewsList.propTypes = {
  newsData : PropTypes.array,
  //onSelect :  PropTypes.function
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding : 15,
    borderColor: "grey",
    borderBottomWidth : 3,
    //added
    //flexDirection : "row"

  },

  newsLine : {
    flexDirection : "row",
    alignItems : "center",
    //added
    //flex: 1
    width: Dimensions.get('window').width - 40,

  }
})

export default NewsList;
