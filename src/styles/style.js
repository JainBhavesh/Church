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
    p10: {
        padding: 10
    },
    btn: {
        textAlign: 'center',
        fontWeight: '900',
        padding: 10,
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
    }
})

export default styles