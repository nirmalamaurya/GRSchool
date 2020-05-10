import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from 'react-native-vector-icons/Feather';

import {Text} from 'react-native-elements';

const ContactView = () => {
  return (
    <View>
        < Text style = {styles.heading}>Contact us</Text>
      <TouchableOpacity style={styles.link}>
        <FontAwesome5
          name="whatsapp-square"
          style={styles.icon}
          color="green"
          size={30}
        />
        <Text style={styles.text} size={30}>
          +91-1234567890
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Feather name="phone" style={styles.icon} color="black" size={30} />
        <Text style={styles.text} >
          +91-1234567890
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="email" style={styles.icon} color="black" size={30} />
        <Text style={styles.text} >
          abc@gmail.com
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Entypo name="facebook" style={styles.icon} color="blue" size={30} />
        <Text style={styles.text} >
          http://www/facebook.com/abc
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
   
  },
  text: {
    fontSize: 18,
    alignSelf:"center"
  },
  heading:{
      padding :10
  },
  link:{
    padding :5,
    flexDirection:'row'
  }
});

export default ContactView;
