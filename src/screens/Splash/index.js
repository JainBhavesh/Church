import { useNavigation } from "@react-navigation/core";
import { View } from "native-base";
import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native'

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            });
        }, 2500);
    })
    return (
        <View style={styles._layer}>
            <Image source={require('./../../assets/splash.png')} style={{ resizeMode: 'contain', width: '75%', height: '75%' }} />
        </View>
    )
}

var styles = StyleSheet.create({
    _layer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d4af37"
    },
    _logo: {
        height: "50%",
        width: "50%",
        resizeMode: 'cover'
    },

})
export default Splash;