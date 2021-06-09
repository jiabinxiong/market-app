import { baseStyle } from "../base.style";
import { StyleSheet, Dimensions } from "react-native";

export const commentStyle = {
	area: {
		backgroundColor: "#fff",
		paddingBottom: 10,
		paddingLeft: 15,
		paddingRight: 15
	},
	block: {
		paddingBottom: 10,
		paddingTop: 10,
		borderTopWidth: 1,
		borderColor: baseStyle.borderColor
	},
	childerBlock: {
		// marginLeft: 20
	},
	cnt: {
        flexDirection: "row",
		// flex: 9,
		// paddingLeft: 15
	},
    portrait: {
        width: 40
    },
    portraitImg: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
	name: {
	    flex: 1,
        flexDirection: "row",
	    marginLeft: 10,
        paddingTop: 10
	},
	nameText: {
        flex: 1,
		fontSize: 16,
        height: 30,
	},
	nameTime: {
		fontSize: 12,
		color: "#00b95c",
	},
	info: {
        marginTop: 12,
        marginBottom: 3
	},
	infoText: {
		lineHeight: 22,
        fontSize: 16,
		color: baseStyle.color
	},
    imgBlock: {
	    height: 200,
        marginTop: 10,
        marginBottom: 5
    },
    img: {
        width: (Dimensions.get("window").width - 34) / 3,
        height: 200
    },
    imgNumber: {
        position: "absolute", bottom: 10, right: 10,
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        height: 20,
        lineHeight: 20,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    imgNumberText: {
        color: "#fff",
        fontSize: 16
    },
    b: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row"
    },
    bl: {
        flex: 1,
    },
    blText: {
	    color: "#ccc"
    },
    br: {
        flexDirection: "row"
    },
    likeBtn: {
        flexDirection: "row",
        height: 20,
        lineHeight: 20,
        marginRight: 10
    },
    likeBtnIcon: {
        width: 20,
        height: 20,
	    color: "#333",
        marginRight: 5,
        fontSize: 20
    },
    commentBtn: {
        flexDirection: "row",
        height: 20,
    },
    commentBtnIcon: {
        width: 20,
        height: 20,
        lineHeight: 20,
        color: "#333",
        marginRight: 5,
        fontSize: 20
    },
    brText: {
	    fontSize: 16
    }
};
