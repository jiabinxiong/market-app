import {
    StyleSheet,
} from 'react-native';

export const modalStyle = StyleSheet.create({
    cnt: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    }
});

export const loadingModalStyle = StyleSheet.create({
    cnt: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff"
    }
});

export const popWarningModalStyle = StyleSheet.create({
    cnt: {
       width: 350,
       borderRadius: 10,
       backgroundColor: "#fff"
    },
    textBlock: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    textInfo: {
        lineHeight: 20,
        textAlign: "center"
    },
    funBlock: {
        flexDirection: "row",
        height: 50,
        borderTopWidth: 0.5,
        borderTopColor: "#ccc"
    },
    btn: {
        flex: 1,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    clearBtn: {
        borderRightWidth: 0.5,
        borderRightColor: "#ccc",
    },
    clearBtnText: {
        color: "#ccc",
    },
    btnText: {
        fontSize: 16
    },
    determineBtn: {

    }
});
