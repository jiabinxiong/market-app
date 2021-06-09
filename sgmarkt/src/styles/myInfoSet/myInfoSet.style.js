import { StyleSheet } from 'react-native';

export const myInfoSetStyle = StyleSheet.create({
    navRightSave: {
        width: 40,
        height: 40,
        lineHeight: 40,
        marginRight: 5,
        textAlign: "center",
        fontSize: 16
    },
    backgroundBlock: {
        height: 260,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 80,
        height: 80,

    },
    avatarImg: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    modifyBackground: {
        marginTop: 20,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    modifyBackgroundText: {
        lineHeight: 40,
        textAlign: "center"
    },
    birthday: {
        flex: 1,
        height: 50,
    },
    birthdayText: {
        lineHeight: 50,
        marginLeft: 10,
        color: "#000"
    },
    infoBlock: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    infoLi: {
        flexDirection: "row",
        height: 50,
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#e0e0e0"
    },
    infoText: {
        color: "#bdbdbd",
        lineHeight: 50
    },
    infoIpt: {
        flex: 1,
        height: 50,
        // marginTop: 3,
        marginLeft: 10,
        color: "#000"
    }
});
