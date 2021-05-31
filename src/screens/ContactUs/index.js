import { Text, View } from "native-base";
import React from 'react';
import CustomeHeader from "../../components/CustomeHeader";
const Contact = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CustomeHeader headerText="CONTACT US" onClick={() => props.navigation.goBack()} />

            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>

            </ScrollView>
        </View>
    )
}

export default Contact;