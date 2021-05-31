import { View } from "native-base";
import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";

const Youtube = (props) => {

    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="YOUTUBE CHANNEL" centerTextStyle={{ flex: 0.7, alignItems: "flex-start", fontSize: 15 }} onClick={() => props.navigation.goBack()} />

                <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Youtube;