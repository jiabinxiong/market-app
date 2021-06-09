import { StyleSheet, Dimensions } from 'react-native';

import { phoneTypeTool } from '../../tool/phoneType';

export const footerPopStyle = StyleSheet.create({
    footerPop: {
        position: "relative",
        height: Dimensions.get("window").height
    },
    footerPopB: {
        height: Dimensions.get("window").height,
        backgroundColor: "rgba(0, 0, 0, 1)"
    },
    cntBlock: {
        position: "absolute",
        width: Dimensions.get("window").width,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: phoneTypeTool.phoneType().footerPopBottom,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff"
    },
    listBlock: {
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "#e0e0e0"
    },
    listBlockInfo: {
        flexDirection: "row"
    },
    listText: {
        flex: 1,
        lineHeight: 50,
    },
    listIcon: {
        height: 50,
        lineHeight: 50,
        fontSize: 20,
        color: "#009387"
    }
});
