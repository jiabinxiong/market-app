import {
    StyleSheet, Dimensions
} from 'react-native';

export const myStyle = StyleSheet.create({
    info: {
        height: 240,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#01c184"
    },
    tl: {
        flex: 1,
    },
    tr: {

    },
    tBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderRadius: 10
    },
    btnText: {
        lineHeight: 28,
        textAlign: "center"
    },
    portraitBlock: {
        height: 80,
        marginTop: -20,
    },
    portrait: {
        width: 80,
        height: 80,
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 50
    },
    nameBlock: {
        flexDirection: "row",
        marginTop: 5
    },
    outBtn: {
        marginLeft: 10,
        lineHeight: 20,
        color: "red"
    },
    name: {
        lineHeight: 20,
        fontSize: 20
    },
    link: {
        marginTop: 10,
        flexDirection: "row"
    },
    linkText: {
        width: 80,
        height: 20,
        lineHeight: 20,
        textAlign: "center",
    },
    linkTextNumber: {
        fontWeight: "900",
        color: "#464646"
    },
    funList: {

    },
    listBlock: {

    },
    cogs: {
        flexDirection: "row",
        height: 80,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 10,
        borderBottomColor: "#f5f5f5"
    },
    cogsBlock: {
        flex: 1,
        alignItems: "center"
    },
    cogsIcon: {
        fontSize: 26
    },
    cogsIconText: {
        fontSize: 16,
        lineHeight: 16,
        marginTop: 5,
        color: "#464646"
    }
})
