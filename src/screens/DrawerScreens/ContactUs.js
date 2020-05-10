import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Map from '../../components/Map';
import ContactView from '../../components/ContactView';
const ContactUs = () => {
  return (
    <View style={styles.container}>
     <Map/>
     <ContactView/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor: "white",
  },
  
});

export default ContactUs;
