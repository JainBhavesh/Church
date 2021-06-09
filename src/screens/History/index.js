import React from 'react';
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";

const History = (props) => {
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="History" onClick={() => props.navigation.goBack()} />

                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    <View style={[styles.mainBG, styles.mh20, styles.mv20, styles.pv20, styles.ph10]}>
                        <Text style={[styles.f25, styles.pb10, { color: "#d4af37", textAlign: 'center' }]}>History of Jerriel Missionary Baptist Church</Text>
                        <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                            "On Octomber 24,1925 a group of people came together to organize a Missionary Baptist Church - The Minutes read us follow:
                        </Text>
                        <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                            The green Grove Baptist Church
                        </Text>

                        <Text style={[styles.f15, styles.pb10, styles.mainbgText, { textAlign: 'center' }]}>
                            Cincinnati, Ohio
                        </Text>

                        <Text style={[styles.f15, styles.pb20, styles.mainbgText, { textAlign: 'center' }]}>
                            Octomber 24, 1925:
                        </Text>

                    </View>
                    <View style={[styles.secoundaryBG, styles.mh20, { justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }]}>
                        <Image source={require('../../assets/w.png')} style={{ height: 200, width: 150 }} />
                    </View>
                    <View style={[styles.textwhite]}>
                        <Text style={[styles.textmainBG, styles.f15, { textAlign: 'justify', fontWeight: 'normal', marginHorizontal: 30 }]}>
                            On Sunday, September 30, 1973 - Reverend A.L. Goodwin was retired by the church after thirty-seven (37) years of service.
                            The call went out to Reverend Melvin T. Jones and he took over the pulpit May 12, 1974. The church has had steady progress since that
                            time and through the help of God we are still growing. One of his first achivements was getting the property west of the church on Court
                            Street Cleared of old buildings. We are now in process of purchasing and expanding this property. Under the leadership of Reverend Jones,
                            Our membership has steady groethand our financial status has incresed. We have had progress in all areas of the church.
                            The prayers of all are requested that God will continue to bless us."
                         </Text>
                        <Text style={[styles.textmainBG, styles.f15, , { marginBottom: 20, marginHorizontal: 30 }]}>
                            Reverend Melvin T. Jones, Pastor
                        </Text>
                        <Text style={[styles.textmainBG, styles.f15, { textAlign: 'justify', fontWeight: 'normal', marginHorizontal: 30, marginBottom: 20 }]}>
                            On January 9, 1985 Pastor Melvin T. Jones resigned as the pastor of the Jerriel Baptist Church to accept the call in another vineyard in Lansing,
                            Michigan. Reverend Willium E. Greene carriend on as Interim Pastor, January 16, 1985 through November 30, 1985. Reverend Gregory L. Wallace accepted
                            the call for sixteen (16) days, December 1-16, 1985.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default History;