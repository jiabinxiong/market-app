import { StyleSheet, Dimensions } from 'react-native';

export const publishSelectImgStyle = StyleSheet.create({
    handlerNext: {
        height: 40,
        marginRight: 5,
        fontSize: 16,
    },
    handlerNextText: {
        fontSize: 16,
        lineHeight: 40,
    },
    imgCnt: {
        flexDirection: 'row',
        alignContent: "stretch",
        flexWrap: "wrap",
        // paddingHorizontal: 5
        // paddingLeft: 5
    },
    imgBlock: {
        position: "relative",
        width: (Dimensions.get('window').width) / 3,
        height: (Dimensions.get('window').width  ) / 3,
        marginBottom: 5,
    },
    imgBlockPaddingLR: {
        marginRight: 0,
        marginLeft: 0,
        width: ((Dimensions.get('window').width) / 3),
    },
    cameraBlock: {
        width: ((Dimensions.get('window').width) / 3) - 5,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0,0.5)",
    },
    cameraIcon: {
        fontSize: 50,
    },
    img: {
        width: ((Dimensions.get('window').width) / 3) - 5,
        height: (Dimensions.get('window').width ) / 3
    },
    selectBlock: {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 10,
        width: 40,
        height: 40
    },

    selectBtn: {
        width: 20,
        height: 20,
        marginTop: 5,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff"
    },

    selectedBtn: {
        // backgroundColor: "#3484ff",
    }
});
