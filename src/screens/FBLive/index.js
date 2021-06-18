import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, View } from "react-native";
import CustomeHeader from "../../components/CustomeHeader";
import styles from "../../styles/style";
import { WebView } from 'react-native-webview';
import { apiCalling } from "../../services/ApiCall";
import { showToast } from "../../services/CommonFunction";

const FBLive = (props) => {
    const [url, setURL] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        geturl();
    }, [])
    const geturl = () => {
        setLoading(true);

        apiCalling("GET", "get-live-streaming", {}, "")
            .then(res => res.json())
            .then(response => {
                setLoading(false);

                if (response.success == true) {
                    console.log('Api call result => ', response);
                    setURL(response.data.acf.link);
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
                <CustomeHeader headerText="Live Streaming" centerTextStyle={{ flex: 0.7, alignItems: "flex-start" }} onClick={() => props.navigation.goBack()} />
                {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="large" color="#460000" /> :
                    <WebView source={{ uri: url }} />
                }
            </SafeAreaView>
        </View>
    )
}

export default FBLive;
