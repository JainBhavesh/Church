
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
const { fontScale } = Dimensions.get("window");

export default class CustomeHeader extends Component {

    render() {
        const { headerText, centerTextStyle, onClick } = this.props;
        return (
            <View style={styles.header}>
                <View style={{ flex: 0.3 }}>
                    <TouchableOpacity onPress={onClick}>
                        <Image source={require('./../assets/arrow.png')} style={{ marginLeft: 20, height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.container, centerTextStyle]}>
                    <Text style={styles.textstyle}>{headerText}</Text>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        alignItems: 'center',
    },
    textstyle: {
        color: "white",
        fontSize: 15 / fontScale,
        fontWeight: "bold",
        textAlign: "left",
        padding: 10,
        textTransform: 'uppercase'
    },
    header: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        backgroundColor: "#460000",
        elevation: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
})