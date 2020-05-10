import React from 'react';
import {StyleSheet, View , TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

const MenuButton = ({navigation}) =>{

    return (
        <View>
            <TouchableOpacity onPress = {()=>navigation.toggleDrawer()}>
                <Image style = {styles.image} source = {require('../../assets/menu.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    image :{
       height:30,
       width:30
    }
});

export default withNavigation(MenuButton);