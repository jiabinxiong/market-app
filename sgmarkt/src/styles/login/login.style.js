import { StyleSheet, Platform, Dimensions } from "react-native";


export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
        height: Dimensions.get("window").height,
        // position: "relative"
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",

        paddingHorizontal: 20,
        paddingBottom: 50
    },
    headerText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    footer: {
        // position: "absolute",
        // bottom: 0,
        // width: "100%",
        flex: 3,
        // marginTop: 400,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    nameTitle: {
        flex: 1,
        color: "#05375a",
        fontSize: 18
    },
    prompt: {
        fontSize: 16,
        color: "red"
    },
    footerText: {
        flexDirection: "row",

    },
    action: {
        position: "relative",
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },
    actionIcon: {
        marginTop: 8
    },
    iptText: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#05375a",
    },
    loginBtn: {
        alignItems: "center",
        marginTop: 50
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    signInText: {
        fontSize: 18,
        fontWeight: "bold",

    },
    promptBlock: {
        position: "absolute",
        bottom: -20,
        marginLeft: 32,
        lineHeight: 16,
        color: "red"
    }
});
