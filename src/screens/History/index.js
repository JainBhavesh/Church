import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Image, View, Text, ActivityIndicator } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import { showToast } from '../../services/CommonFunction';
import { apiCalling } from '../../services/ApiCall';
import styles from "../../styles/style";

const History = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [banner, setBanner] = useState("");

    useEffect(() => {
        getHistory();
    }, []);

    const getHistory = () => {
        setLoading(true);

        apiCalling("GET", "get-history", {}, "")
            .then(res => res.json())
            .then(response => {
                setLoading(false);

                if (response.success == true) {
                    console.log('Api call result => ', response);
                    setData(response.data.our_story);
                    setBanner(response.data.history_banner)
                } else
                    showToast("State not available");
            }).catch((error) => {
                console.log(error)
                showToast(error)
                setLoading(false);
            });
    }

    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="History" onClick={() => props.navigation.goBack()} />

                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="large" color="#460000" /> :
                        <View>
                            <View style={[styles.mainBG, styles.mh20, styles.mv20, styles.pv20, styles.ph10]}>
                                <Text style={[styles.f25, styles.pb10, { color: "#d4af37", textAlign: 'center' }]}>
                                    {banner?.title}
                                </Text>
                                <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                                    {banner?.sub_title}
                                </Text>
                                {/* <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                            The green Grove Baptist Church
                        </Text>

                        <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                            Cincinnati, Ohio
                        </Text>

                        <Text style={[styles.f15, styles.pb20, styles.mainbgText, { textAlign: 'center' }]}>
                            Octomber 24, 1925:
                        </Text> */}

                            </View>
                            {data.map((d, index) => {
                                return (<View key={index}>
                                    <View style={[styles.secoundaryBG, styles.mh20, { justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }]}>
                                        <Image source={{ uri: d.image }} style={{ height: 200, width: 150 }} />
                                    </View>
                                    <View style={[styles.textwhite]}>
                                        <Text style={[styles.textmainBG, styles.f15, { textAlign: 'justify', fontWeight: 'normal', marginHorizontal: 30 }]}>
                                            {d.content}
                                        </Text>
                                    </View>
                                </View>)
                            })}
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default History;