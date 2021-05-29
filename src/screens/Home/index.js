import { Text, View } from "native-base";
import React from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import styles from "../../styles/style";
import FbIcon from '../../assets/facebookIcon.svg';
import InstaIcon from '../../assets/instagramIcon.svg';
import YoutubeIcon from '../../assets/youtubeIcon.svg';

const Home = () => {
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={styles.flex}>
                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    <View style={styles.mb20}>
                        <Image source={require('../../assets/homehead.png')} style={{ resizeMode: 'cover', width: '100%' }} />
                    </View>
                    <View style={[styles.p20, styles.mainBG, styles.textwhite, styles.mb20]}>
                        <Text style={[styles.mb10, styles.f20, styles.textwhite, styles.fb]}>OUR STORY</Text>
                        <Text style={[styles.mb20, styles.textwhite, styles.f15]}>
                            " Jerriel Missionary Baptist church will praise, pray to and preach the Word of God while ensuring the proclamation of salvation, protection of and provision for her members and residents of the West End."
                        </Text>
                        <Text style={[styles.f15, styles.textwhite]}>
                            Tithes and offerings:
                        </Text>
                        <Text style={[styles.f15, styles.textwhite]}>
                            5/16/2021 10:30am Sermon Cash App:
                        </Text>
                        <Text style={[styles.f15, styles.textwhite]}>
                            $jerrielBaptisChurch
                        </Text>
                    </View>

                    <Text style={[styles.textmainBG, styles.f25, styles.fb, { textAlign: 'center' }]}>Weekly Folloship Activities </Text>

                    <View style={[styles.mainBG, styles.m20, styles.p10, styles.radius5]}>
                        <Text style={[styles.textwhite, styles.f15]}>Sunday Worship</Text>
                        <Text style={[styles.textwhite, styles.f15]}>When: Sunday at 10:30</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Where: 1018 Wesley Avenue Cincinnati 45203</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Call 1-605-313-4100</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Access Code: 159726</Text>
                    </View>
                    <View style={[styles.mainBG, styles.mh20, styles.mb20, styles.p10, styles.radius5]}>
                        <Text style={[styles.textwhite, styles.f15]}>Sunday Worship</Text>
                        <Text style={[styles.textwhite, styles.f15]}>When: Wendnesday from 12:00pm - 1:00pm  Wendnesday from 7:00pm - 8:00am</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Where: 1018 Wesley Avenue Cincinnati 45203</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Call 1-605-313-4100</Text>
                        <Text style={[styles.textwhite, styles.f15]}>Access Code: 159726</Text>
                    </View>
                    <View style={styles.mh10}>

                        {/* <View style={[styles.homeRow, styles.mh70, styles.mainBG, styles.radius5]}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ContactUs')}
                            >
                                <Image style={{}} source={require('../../assets/history.png')} />
                                <Text style={[styles.btn, styles.mainBG]}>OUR HISTORY</Text>
                            </TouchableOpacity>
                        </View> */}

                        <View style={[styles.homeRow, styles.mh70, styles.p10, styles.mainBG, styles.textwhite, styles.radius5, {
                            flexDirection: "row",
                            justifyContent: 'center'
                        }]}
                        >
                            <Image style={{ marginRight: 15 }} source={require('../../assets/history.png')} />
                            <Text style={[styles.textwhite, styles.fb]}>OUR HISTORY</Text>
                        </View>

                        <View style={styles.homeRow}>
                            <TouchableOpacity onPress={() => { }}>
                                <FbIcon width={30} height={30} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }}>
                                <InstaIcon width={30} height={30}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }}>
                                <YoutubeIcon width={30} height={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    )

}

export default Home;