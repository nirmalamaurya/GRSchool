import React from "react";
import { StyleSheet, View, Text , FlatList} from "react-native";
import List from '../../components/List';
import Staff from '../../resource/Staff.json';
import MenuButton from "../../components/MenuButton";
const StaffScreen = () => {
  const staff =   Staff;
  return (
    <View style={styles.container}>
    
      <FlatList
        data={staff}
        keyExtractor={(key) => staff.key}
        renderItem={({ item }) => {
          return (
           <List item = {item}/>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor: "#ebe8e1",
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    color: "black",
  },
});
StaffScreen.navigationOptions = ()=>{
  return{
    headerLeft : () =><MenuButton/>

  }
};

export default StaffScreen;
