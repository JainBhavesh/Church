import React from 'react';
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";

const Staff = (props) => {
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="OUR STAFF" onClick={() => props.navigation.goBack()} />

                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    <View style={[styles.secoundaryBG, styles.mh20, { justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }]}>
                        <Image source={require('../../assets/staffImage.png')} />
                    </View>
                    <View style={[styles.mainBG, styles.textwhite]}>
                        <Text style={[styles.textwhite, styles.f25, styles.mh20, styles.mv20, { textAlign: 'center' }]}>
                            Rev. Dr. Johannon R. Tate BS, MA, DMin. Pastoral Biography
                        </Text>
                        <Text style={[styles.textwhite, styles.f15, { textAlign: 'left', margin: 10 }]}>
                            Rev. Dr. Johannon R. Tate was born and raised in dianapolis, IN. His religious and spiritual foundation
                            were cultivated at Shiloh Missionary Bapist Church under the leadership of Rev. DR. C. V. Jetter, where he accepted
                            Christ at the tender age of 5. Thoughout his youth, Dr. Deacon and Youth Choir Member until departing for millitary service.
                         </Text>
                        <Text style={[styles.textwhite, styles.f15, { textAlign: 'left', margintop: 10, marginHorizontal: 10, marginBottom: 20 }]}>
                            After returning from the Navy he served as a Sunday School and Vacation Bible School Teacher, Trustee Armor Bearer,
                            Directore of church Affair and Executive Assistant to the Pastor. Each of these role prepared him to accept his call
                            to the ministry. After a great deal of study and prayer Dr. Tate was subsequently licensed  ordained to preach the Gospel.
                            Dr. Tate served as a Senior Pastor of Emmanuel Free Will Bapist Church for one year; And as the Pastor of Christian Education
                            at the Good Samaritan Missionary Bapist Church in Indianapolis. Dr. Tate has proudly served as the pastor of Jerriel Missionary
                            Bapist church in cimcinnati, OH since February 2019.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Staff;