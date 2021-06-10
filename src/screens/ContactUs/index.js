import { Text, View } from "native-base";
import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import { apiCalling } from "../../services/ApiCall";
import { showToast } from "../../services/CommonFunction";
import styles from "../../styles/style";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);


    const submit = () => {
        if (name == "") {
            showToast('Please enter name');
            return;
        }
        var regex = /^[a-zA-Z ]{2,30}$/;
        if (regex.test(name) === false) {
            showToast('Please enter valid name');
            return;
        }

        if (mobile == "") {
            showToast('Please enter contact number');
            return;
        }

        if (mobile.length < 10) {
            showToast('Please enter valid contact number');
            return;
        }

        if (message == "") {
            showToast('Please enter message');
            return;
        }

        setLoading(true);
        let formdata = new FormData();
        formdata.append("name", name);
        formdata.append("mobile_number", mobile);
        formdata.append("user_message", message);
        apiCalling("POST", "get-contact", {}, formdata).then(res => res.json())
            .then(response => {
                console.log('response received => ', response);
                setLoading(false);
                if (response.success == true) {
                    showToast(response.message, 'green');
                    setName("");
                    setMobile("");
                    setMessage("");
                } else
                    showToast(response.message);
            }).catch((error) => {
                console.log('Error => ', error);
                if (error.name === 'AbortError') {
                    showToast('Network Error')
                } else {
                    showToast('Something went wrong. Try again.')
                }
                setLoading(false);
            });

    }

    return (
        <View style={[styles.secoundaryBG, styles.flex]}>
            <SafeAreaView style={[styles.secoundaryBG, styles.flex]}>

                <CustomeHeader headerText="Contact us" onClick={() => props.navigation.goBack()} />

                <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
                    <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                value={name}
                                style={styles.input}
                                placeholder="Your Name"
                                placeholderTextColor="#f6f6f6"
                                onChangeText={(t) => setName(t)}
                            />
                        </View>


                        <View style={styles.SectionStyle}>
                            <TextInput
                                value={mobile}
                                style={styles.input}
                                maxLength={10}
                                placeholder="Contact Number"
                                placeholderTextColor="#f6f6f6"
                                onChangeText={(t) => setMobile(t)}
                                keyboardType="phone-pad"
                            />
                        </View>



                        {/* <View style={styles.textArea}> */}
                        <TextInput
                            value={message}
                            style={{ color: '#fff', backgroundColor: '#6a6a6a', color: '#f6f6f6', paddingLeft: 20, borderRadius: 5 }}
                            placeholder="Message"
                            placeholderTextColor="#f6f6f6"
                            multiline
                            editable
                            numberOfLines={4}
                            maxLength={200}
                            onChangeText={(t) => setMessage(t)}
                        />
                        {/* </View> */}

                        {isLoading ?
                            <ActivityIndicator style={{ marginTop: 8 }} size="large" color="#460000" />
                            :
                            <View style={[styles.homeRow, styles.mh70, styles.p10, styles.mainBG, styles.textwhite, styles.radius5, {
                                flexDirection: "row",
                                justifyContent: 'center',
                                marginVertical: 30
                            }]}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        submit()
                                    }}
                                >
                                    <Text style={[styles.textwhite, styles.btn]}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

export default Contact;