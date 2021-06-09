import { StyleSheet } from 'react-native';

import { phoneTypeTool } from "../../tool/phoneType";

export const publishSelectImgModifyStyle = StyleSheet.create({
    cnt: {
        flex: 1, alignItems: "center", justifyContent: "center",
        backgroundColor: "#fff"
    },
    footer: {
        flexDirection: "row",
        width: "100%",
        height: phoneTypeTool.phoneType().bottomHeight,
    },
    footerBlock: {
        flex: 1,
        paddingTop: 5,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    footerIcon: {
        fontSize: 26,
        marginBottom: 5
    },
    footerBlockText: {

    }
});

