import React from 'react';
import {StyleSheet, View , Text, Dimensions, Image} from 'react-native';
import Carousel from "react-native-banner-carousel";


const Dashboard = () =>{

    const bannerWidth = Dimensions.get('window').width;

    const images = [
        require('../../assets/1.png'),
        require('../../assets/2.png'),
        require('../../assets/3.png'),
        require('../../assets/4.png'),
        require('../../assets/5.png')
    ];
    
    const displayImages = images.map((src, key)=>
    <Image source = {src} style = {styles.image}/>
    );

    return (
        <View style = {styles.container}>
            <Carousel 
            loop
            autoplay
             autoplayTimeout = {5000}
             index = {0}
             pageSize = {bannerWidth}
             useNativeDriver = {true}
             
            >
            {displayImages}
            </Carousel>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'#CCCCFF'
    },

    text:{
        fontSize : 18,
       alignSelf: 'center',
       color : 'white'

    },
    image :{
        width :500,
        height:700
    }
});

export default Dashboard;