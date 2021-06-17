import { Text, View } from "native-base";
import React from 'react';
import { SafeAreaView, Image } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";
import { WebView } from 'react-native-webview';

const FBLive = (props) => {
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="Live Streaming" centerTextStyle={{ flex: 0.7, alignItems: "flex-start" }} onClick={() => props.navigation.goBack()} />
                <WebView source={{ uri: 'https://www.facebook.com/' }} />
            </SafeAreaView>
        </View>
    )
}

export default FBLive;
