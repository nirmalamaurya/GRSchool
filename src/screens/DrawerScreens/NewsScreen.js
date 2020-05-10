import React from 'react';
import {StyleSheet, View , Text} from 'react-native';


const NewsScreen = () =>{

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This is News screen.</Text>
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

export default NewsScreen;