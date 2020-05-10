import React from 'react';
import {StyleSheet, View , Text} from 'react-native';


const AboutUs = () =>{

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This is About us screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'#ccffcc'
    },
    text:{
        fontSize : 18,
       alignSelf: 'center',
       color : 'black'

    }

});

export default AboutUs;