import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const { width, fontScale } = Dimensions.get("window");

let styles = StyleSheet.create({
    mainBG: {
        backgroundColor: '#460000'
    },
    secoundaryBG: {
        backgroundColor: '#d4af37'
    },
    tabbar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabImage: {
        height: 30,
        width: 20
    },
    homeRow: {
        flexDirection: 'row',
        marginBottom: 30,
        marginHorizontal: 80,
        textAlign: 'center',
        fontSize: 20,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    flex: {
        flex: 1
    },
    mh10: { marginHorizontal: 10 },
    mv10: { marginVertical: 10 },
    mv20: { marginVertical: 20 },
    m20: {
        margin: 20
    },
    mt20: {
        marginTop: 20
    },
    p10: {
        padding: 10
    },
    btn: {
        textAlign: 'center',
        fontWeight: 'bold',
        // padding: 10,
        color: 'white',
        fontSize: 15,
        borderRadius: 5,
        textTransform: 'uppercase'
    },
    mh70: {
        marginHorizontal: 70
    },
    radius5: {
        borderRadius: 5
    },
    mb10: {
        marginBottom: 10
    },
    mb20: {
        marginBottom: 20
    },
    p20: {
        padding: 20
    },
    textwhite: {
        color: 'white'
    },
    textmainBG: {
        color: "#460000"
    },
    f15: {
        fontSize: 15
    },
    f20: {
        fontSize: 20
    },
    f25: {
        fontSize: 25
    },
    fb: {
        fontWeight: 'bold'
    },
    fl: {
        fontWeight: 'normal'
    },
    mh20: {
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    f12: {
        fontSize: 12
    },
    imageBG: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
        borderRadius: 30,
        // position: 'relative'
    },
    imagecontainer: {
        height: 200,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 25
    },
    youtubeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "left",
        padding: 5,
        // textTransform: 'uppercase',
        // backgroundColor: 'black',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },

    //contact us
    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: '#6a6a6a',
        color: '#f6f6f6',
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a6a6a',
        color: "#f6f6f6",
        borderWidth: .5,
        borderColor: '#000',
        height: 50,
        marginBottom: 10,
        paddingLeft: 20,
        borderRadius: 5
    },

    textArea: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        borderWidth: .5,
        borderColor: '#000',
        height: 100,
        marginBottom: 10,
        paddingLeft: 20,
        backgroundColor: '#212121',
    },
    pv20: {
        paddingVertical: 20,
    },
    ph10: {
        paddingHorizontal: 10
    },
    pb10: {
        paddingBottom: 10
    },
    pb20: {
        paddingBottom: 20
    },
    mainbgText: {
        color: '#c1983b'
    }
})

export default styles