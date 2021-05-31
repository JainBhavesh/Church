import { Text, View } from "native-base";
import React from 'react';
import { ScrollView } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";

const FBLive = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomeHeader headerText="LIVE STREAMING" onClick={() => props.navigation.goBack()} />

            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>

            </ScrollView>
        </View>
    )
}

export default FBLive;
