import React from "react";
import { Text } from "react-native-elements";
import {Image, View,StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
const List = ({item, navigation}) => {

console.log("navigation = ", navigation);

  return (
<TouchableOpacity onPress = {()=>navigation.navigate('StaffDetail')}>
    <View style = {styles.listView}>
     <Image style  = {styles.image} source = {require('../../assets/kush.png')}/>
      <Text h5 style = {styles.text}> {item.name}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius : 50,
    marginRight : 10

  },
  listView: {
    flexDirection: "row",
    paddingLeft :20,
    marginTop:20
  },
  text:{
    alignSelf :'center'
  }
});

export default withNavigation(List);
