import { StyleSheet, Dimensions } from "react-native";

import { phoneTypeTool } from "../../tool/phoneType";

export const tabBarStyle = StyleSheet.create({
    area: {
        flexDirection: "row",
        // position: "absolute",
        // width: Dimensions.get("window").width - 40,
        // bottom: 100,
        // left: 20,
        height: phoneTypeTool.phoneType().bottomHeight,
        backgroundColor: "#009387",
        // borderRadius: 10,
    },
    block: {
        flex: 1,
        alignItems: "center"
    },
    iconBlock: {
        flexDirection: "column",
        alignItems: "center"
    },
    iconText: {
        fontSize: 14
    },
    icon: {
        color: "#fff",
        fontSize: 24,
        marginTop: 5
    },
    publishIcon: {
        fontSize: 50,
        color: "#fff",
    }
});
