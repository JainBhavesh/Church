import { View } from "native-base";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, RefreshControl, TouchableOpacity, ImageBackground, Image, Text } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";

const Youtube = (props) => {
    const [isRefresh, setisRefresh] = useState(false);

    const onRefresh = () => {
        setisRefresh(false);
        // this.setState({ isRefresh: true });
        // this.gettTrainingData();
    }

    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex, styles.secoundaryBG]}>
                <CustomeHeader headerText="Youtube Channel" centerTextStyle={{ flex: 0.7, alignItems: "flex-start" }} onClick={() => props.navigation.goBack()} />

                <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'

                    refreshControl={
                        <RefreshControl
                            refreshing={isRefresh}
                            onRefresh={onRefresh}
                        />
                    }
                >

                    <TouchableOpacity onPress={async () => {
                        // const supported = await Linking.canOpenURL("data.link");

                        // if (supported) {
                        //     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                        //     // by some browser in the mobile
                        //     // await Linking.openURL("data.link");
                        // } else {
                        //     Alert.alert(`Don't know how to open this URL: ${url}`);
                        // }
                    }}>
                        <View style={styles.imagecontainer}>

                            <ImageBackground imageStyle={{ borderRadius: 5, resizeMode: 'cover' }} source={require('../../assets/re.jpg')} style={styles.imageBG}>
                                <Image source={require('../../assets/playbutton.png')} style={{ width: 40, height: 40, position: 'absolute', top: '40%', bottom: '50%', left: '45%' }} />
                            </ImageBackground>


                            <Text numberOfLines={1} style={[styles.youtubeText, styles.f20, styles.textmainBG]}>{"Wollium jones"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={async () => {
                        // const supported = await Linking.canOpenURL("data.link");

                        // if (supported) {
                        //     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                        //     // by some browser in the mobile
                        //     // await Linking.openURL("data.link");
                        // } else {
                        //     Alert.alert(`Don't know how to open this URL: ${url}`);
                        // }
                    }}>
                        <View style={styles.imagecontainer}>

                            <ImageBackground imageStyle={{ borderRadius: 5, resizeMode: 'cover' }} source={require('../../assets/re.jpg')} style={styles.imageBG}>
                                <Image source={require('../../assets/playbutton.png')} style={{ width: 40, height: 40, position: 'absolute', top: '40%', bottom: '50%', left: '45%' }} />
                            </ImageBackground>


                            <Text numberOfLines={1} style={[styles.youtubeText, styles.f20, styles.textmainBG]}>{"Wollium jones"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={async () => {
                        // const supported = await Linking.canOpenURL("data.link");

                        // if (supported) {
                        //     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                        //     // by some browser in the mobile
                        //     // await Linking.openURL("data.link");
                        // } else {
                        //     Alert.alert(`Don't know how to open this URL: ${url}`);
                        // }
                    }}>
                        <View style={styles.imagecontainer}>

                            <ImageBackground imageStyle={{ borderRadius: 5, resizeMode: 'cover' }} source={require('../../assets/re.jpg')} style={styles.imageBG}>
                                <Image source={require('../../assets/playbutton.png')} style={{ width: 40, height: 40, position: 'absolute', top: '40%', bottom: '50%', left: '45%' }} />
                            </ImageBackground>


                            <Text numberOfLines={1} style={[styles.youtubeText, styles.f20, styles.textmainBG]}>{"Wollium jones"}</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Youtube;