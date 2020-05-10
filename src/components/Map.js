import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Text} from 'react-native-elements';

const Map = () =>{

    return (
        <View style = {styles.container}>
            <Text  style = {styles.heading} > Find us </Text>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.7037035,
          longitude: 83.0416062,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={{ latitude: 24.7037035, longitude: 83.0416062 }}
          pinColor={"blue"}
          title={"Sri Ganga Ram Gautam Budhha Shikshan Sansthan"}
          description={"School"}
        />
      </MapView>
      </View>
    );
};
const styles = StyleSheet.create({
    container:{
        padding :10,
       
    },
    map: {
      height: 300,
      borderColor:'black',
      borderWidth :1,
      
    },
    heading:{
        padding : 10
    }
  });
export default Map;