import React from "react";
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
import {connect} from "react-redux";

class Favorites extends React.Component {
  static navigationOptions = {
    headerTitle : "Saved News"
  }


  handleSelect = (savedNewsDetail) => {
    //console.log("Saved news detail is", savedNewsDetail)
    this.props.navigation.navigate("saved-detail", {savedDetail : savedNewsDetail})
  }
  render() {
    //console.log(this.props.savedNews)
    const data = this.props.savedNews
    data.map((obj) => {
      obj.onSelectDetail = this.handleSelect
    })
    return(
      <View style = {styles.container}>
        {(this.props.savedNews.length > 0) ?
          (<FlatList
            renderItem ={renderSavedNewsList}
            data ={data}
            keyExtractor = {(item, index) => index.toString()} />)
        : <Text>No News</Text>}
      </View>
    )
  }
}



const renderSavedNewsList = (obj) => (
  <TouchableOpacity
    key ={obj.item.key}
    style = {styles.listContainer}
    onPress = {() => obj.item.onSelectDetail(obj.item)}>
    <View style = {styles.newsLine}>
      <Image
        style = {{height : 60, width : 60}}
        source = {{uri : obj.item.image}}/>

      <Text style = {{paddingLeft : 10, fontSize : 15, flex: 1,  }}>{obj.item.title}</Text>
      {(obj.item.source === "bbc-news")?
        (<Image
          style = {{width:50 ,height : 50}}
          source = {require("./bbc-icon-14.jpg")}
          resizeMode = "stretch"/>)
          :
          (<Image
            style = {{width:50 ,height : 50}}
            source = {require("./cnn.jpg")}
            resizeMode = "stretch"/>)}
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center",
  },
  newsLine : {
    flexDirection : "row",
    alignItems : "center",
    width: Dimensions.get('window').width - 40,

  },
  listContainer : {
    padding : 15,
    borderColor: "grey",
    borderBottomWidth : 3,
  }
})


const mapStateToProps = (state) => ({
  savedNews : state.savedNews
})

export default connect(mapStateToProps)(Favorites)
