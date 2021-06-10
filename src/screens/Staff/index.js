import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Image, View, Text, ActivityIndicator } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";
import { showToast } from '../../services/CommonFunction';
import { apiCalling } from '../../services/ApiCall';

const Staff = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getStaff();
    }, []);

    const getStaff = () => {
        setLoading(true);

        apiCalling("GET", "get-staff", {}, "")
            .then(res => res.json())
            .then(response => {
                setLoading(false);

                if (response.success == true) {
                    console.log('Api call result => ', response);
                    setData(response.data.our_story);
                } else
                    showToast("Data not available");
            }).catch((error) => {
                console.log(error)
                showToast(error)
                setLoading(false);
            });
    }
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="OUR STAFF" onClick={() => props.navigation.goBack()} />

                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="large" color="#460000" /> :

                        data.map((d, index) => {
                            return (
                                <View key={index}>
                                    <View style={[styles.secoundaryBG, styles.mh20, { justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }]}>
                                        <Image source={{ uri: d.image }} style={{ height: 200, width: 150 }} />
                                    </View>
                                    <View style={[styles.mainBG, styles.textwhite]}>
                                        <Text style={[styles.textwhite, styles.f25, styles.mh20, styles.mv20, { textAlign: 'center' }]}>
                                            {d.title}
                                        </Text>
                                        <Text style={[styles.textwhite, styles.f15, { textAlign: 'left', margin: 10 }]}>
                                            {d.content}
                                        </Text>
                                        {/* <Text style={[styles.textwhite, styles.f15, { textAlign: 'left', margintop: 10, marginHorizontal: 10, marginBottom: 20 }]}>
                            After returning from the Navy he served as a Sunday School and Vacation Bible School Teacher, Trustee Armor Bearer,
                            Directore of church Affair and Executive Assistant to the Pastor. Each of these role prepared him to accept his call
                            to the ministry. After a great deal of study and prayer Dr. Tate was subsequently licensed  ordained to preach the Gospel.
                            Dr. Tate served as a Senior Pastor of Emmanuel Free Will Bapist Church for one year; And as the Pastor of Christian Education
                            at the Good Samaritan Missionary Bapist Church in Indianapolis. Dr. Tate has proudly served as the pastor of Jerriel Missionary
                            Bapist church in cimcinnati, OH since February 2019.
                        </Text> */}
                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Staff;