import {
    StyleSheet,
    Dimensions
  } from 'react-native';

import { baseStyle } from "../base.style";
  
export const homeStyle = StyleSheet.create({
    header: {
        height: 50, 
        backgroundColor: "#fff"
    },
    headerIpt: {            
        position: "relative",        
        marginRight: 15,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: baseStyle.borderColor
    },
    headerIptCnt: {
        height: 30,        
        paddingLeft: 40,
        paddingRight: 20
    },
    headerIptIcon: {
        position: "absolute",
        top: 2,
        left: 4,
        fontSize: 30,
        fontWeight: "bold"
    },   
    outline: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,  
        borderColor: baseStyle.borderColor
    }, 
    outlineIcon: {
        textAlign: "center",
        lineHeight: 24,
        marginTop: 2
    },
    listMarkt: {
         marginTop: 10, 
         marginLeft: 10,  
         marginRight: 10
    },
    listMarktBlock: {
        height: 260    
    },
    listMarktBlockImg: {
        width: Dimensions.get("window").width - 20, 
        height: 200, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10
    },
    listMarktBlockCnt: {
        marginTop: 10
    },
    listMarktBlockCntText: {
        fontSize: 16,
        lineHeight: 20
    },
    listMarktBlockCntBlockStar: { 
        flex: 1,        
        alignItems: "flex-end"        
    },
    listMarktBlockCntBlockStarNum: {
        lineHeight: 20,
        marginLeft: 4,
        fontSize: 18,
        color: baseStyle.color
    },
    listMarktBlockCntStar: {        
        lineHeight: 20,
        fontSize: 20        
    },
    swiper: {
        height: 100,
        marginTop: 20
    },

    address:  {
        height: 30,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        display: "flex"
    },

    addressText: {
        height: 30,        
        borderRadius: 15,
        lineHeight: 30,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        marginRight: 10,
        backgroundColor: "#fff",
        overflow: "hidden"
    }
});
