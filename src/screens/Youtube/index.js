import { View } from "native-base";
import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";
import { WebView } from 'react-native-webview';

const Youtube = (props) => {
    // const [isRefresh, setisRefresh] = useState(false);

    // const onRefresh = () => {
    //     setisRefresh(false);
    //     // this.setState({ isRefresh: true });
    //     // this.gettTrainingData();
    // }

    return (
        <View style={styles.secoundaryBG, styles.flex}>
            <SafeAreaView style={[styles.flex]}>
                <CustomeHeader headerText="Youtube Channel" centerTextStyle={{ flex: 0.7, alignItems: "flex-start" }} onClick={() => props.navigation.goBack()} />

                {/* <ScrollView style={{ flex: 1 }}> */}

                <WebView source={{ uri: 'https://www.youtube.com/channel/UCxDs1G8zb0SYwZZY51WxHoQ' }} />

                {/* </ScrollView> */}
            </SafeAreaView>
        </View>
    )
}

export default Youtube;