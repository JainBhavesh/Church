import { Text, View } from "native-base";
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import styles from "../../styles/style";
import FbIcon from '../../assets/facebookIcon.svg';
import InstaIcon from '../../assets/instagramIcon.svg';
import YoutubeIcon from '../../assets/youtubeIcon.svg';
import { useNavigation } from "@react-navigation/core";
import { showToast } from '../../services/CommonFunction';
import { apiCalling } from '../../services/ApiCall';
import HTML from "react-native-render-html";

const Home = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [activityData, setActivityData] = useState([]);
    const [ourStory, setOurStory] = useState("");
    const [activityTitle, setActivityTitle] = useState("");

    useEffect(() => {
        getHomePageData();
    }, []);

    const getHomePageData = () => {
        setLoading(true);

        apiCalling("GET", "get-homepage", {}, "")
            .then(res => res.json())
            .then(response => {
                setLoading(false);
                if (response.success == true) {
                    console.log('Api call result => ', response);
                    setOurStory(response.data.our_story);
                    setActivityData(response.data.activities.review);
                    setActivityTitle(response.data.activities.title);
                } else
                    showToast("Data not found");
            }).catch((error) => {
                console.log(error)
                showToast(error)
                setLoading(false);
            });
    }
    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <ScrollView style={[styles.flex, styles.secoundaryBG]}>
                    {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="large" color="#460000" /> :
                        <View>
                            <View style={styles.mb20}>
                                <Image source={require('../../assets/homehead.png')} style={{ resizeMode: 'cover', width: '100%' }} />
                            </View>
                            <View style={[styles.p20, styles.mainBG, styles.textwhite, styles.mb20]}>
                                <Text style={[styles.mb10, styles.f20, styles.textwhite, styles.fb]}>
                                    {ourStory.title}
                                </Text>
                                <Text style={[styles.mb20, styles.textwhite, styles.f15]}>
                                    {ourStory.content}
                                </Text>
                                {/* <HTML source={{ html: ourStory.content }} /> */}
                                {/* <Text style={[styles.f15, styles.textwhite]}>
                                    Tithes and offerings:
                        </Text>
                                <Text style={[styles.f15, styles.textwhite]}>
                                    5/16/2021 10:30am Sermon Cash App:
                        </Text>
                                <Text style={[styles.f15, styles.textwhite]}>
                                    $jerrielBaptisChurch
                        </Text> */}
                            </View>

                            <Text style={[styles.textmainBG, styles.f25, styles.fb, { textAlign: 'center' }]}>{activityTitle} </Text>

                            {activityData.map((d, index) => {
                                return (<View style={[styles.mainBG, styles.mh10, styles.mv10, styles.p10, styles.radius5]}>
                                    <Text style={[styles.textwhite, styles.f15]}>{d.title_name}</Text>
                                    <Text style={[styles.textwhite, styles.f15]}>When: {d.when}</Text>
                                    <Text style={[styles.textwhite, styles.f15]}>Where: {d.where}</Text>
                                    <Text style={[styles.textwhite, styles.f15]}>Call{d.call}</Text>
                                    <Text style={[styles.textwhite, styles.f15]}>Access Code: {d.access_code}</Text>
                                </View>)
                            })}
                            <View style={styles.mh10}>

                                {/* <View style={[styles.homeRow, styles.mh70, styles.mainBG, styles.radius5]}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ContactUs')}
                            >
                                <Image style={{}} source={require('../../assets/history.png')} />
                                <Text style={[styles.btn, styles.mainBG]}>OUR HISTORY</Text>
                            </TouchableOpacity>
                        </View> */}

                                <TouchableOpacity style={[styles.tabbar, styles.mt20]} onPress={() => {
                                    navigation.navigate('History');
                                }}>
                                    <View style={[styles.homeRow, styles.mh70, styles.p10, styles.mainBG, styles.textwhite, styles.radius5, {
                                        flexDirection: "row",
                                        justifyContent: 'center'
                                    }]}
                                    >
                                        <Image style={{ marginRight: 15 }} source={require('../../assets/history.png')} />
                                        <Text style={[styles.textwhite, styles.fb]}>OUR HISTORY</Text>
                                    </View>
                                </TouchableOpacity>

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
                        </View>
                    }


                </ScrollView>
                <View style={[styles.mainBG, { height: 60, justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }]}>

                    <View style={styles.tabbar}>
                        <TouchableOpacity style={styles.tabbar}>
                            <Image source={require('../../assets/Home.png')} style={{ width: 25, height: 25, marginBottom: 5 }} />
                            <Text style={[styles.textwhite, styles.f12]}>Home</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.tabbar}>
                        <TouchableOpacity style={styles.tabbar} onPress={() => {
                            navigation.navigate('Staff');
                        }}>
                            <Image source={require('../../assets/emp.png')} style={{ width: 35, height: 35, marginBottom: 1, marginTop: -10 }} />
                            <Text style={[styles.textwhite, styles.f12, { marginTop: 5 }]}>Staff</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.tabbar}>

                        <TouchableOpacity style={styles.tabbar} onPress={() => {
                            navigation.navigate('Youtube');
                        }}>
                            <Image source={require('../../assets/youtube.png')} style={{ width: 28, height: 30 }} />
                            <Text style={[styles.textwhite, styles.f12]}>Youtube</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabbar}>

                        <TouchableOpacity style={styles.tabbar} onPress={() => {
                            navigation.navigate('Contact');
                        }}>
                            <Image source={require('../../assets/contact.png')} style={{ width: 25, height: 25 }} />
                            <Text style={[styles.textwhite, styles.f12, { marginTop: 5 }]}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabbar}>
                        <TouchableOpacity style={styles.tabbar} onPress={() => {
                            navigation.navigate('Fblive');
                        }}>
                            <Image source={require('../../assets/fbLive.png')} style={{ width: 28, height: 28 }} />
                            <Text style={[styles.textwhite, styles.f12, { marginTop: 2 }]}>FB Live</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </SafeAreaView>
        </View>
    )

}

export default Home;