import { Text, View } from "native-base";
import React from 'react';
import { SafeAreaView, Image } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";

const FBLive = () => {
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="Live Streaming" centerTextStyle={{ flex: 0.7, alignItems: "flex-start" }} onClick={() => props.navigation.goBack()} />
                <View style={{ marginTop: 20 }}>
                    <Image source={require('../../assets/stream.png')} style={{ width: "100%", height: "100%" }} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FBLive;
