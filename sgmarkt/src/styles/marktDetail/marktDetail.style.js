import {
    StyleSheet,
} from 'react-native';

import { baseStyle } from "../base.style";
  
export const marktDetailStyle = StyleSheet.create({    
    cntBlock: {        
        // backgroundColor: "#ececec",         
    },
    titleBlock: {
        
    },
    titleText: {
        fontSize: 20,
        lineHeight: 20        
    },
    titleInfo: {
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
        color: baseStyle.color
    },
    infoUl: {
        backgroundColor: "#fff",        
        paddingLeft: 15, 
        paddingRight: 15,  
    },
    liBlock:  {                 
        marginBottom: 10,       
        
    },
    infoLi: {
        paddingTop: 5,
        paddingBottom: 5,
        lineHeight: 16,        
        height: 40,
        borderBottomWidth: 1,        
        borderBottomColor: baseStyle.borderColor
    },
    infoLiCnt: {
        flexDirection: "row",        
    },
    infoLiCntIcon: {
        fontSize: 22,
        marginRight: 5,
        marginTop: 5,
        color: baseStyle.iconColor
    },
    infoLiText: {
        lineHeight: 30,
        color: baseStyle.color
    },

    traffic: {
        padding: 15,        
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderTopColor: baseStyle.borderWidthRf3f3f3,
        borderBottomColor: baseStyle.borderWidthRf3f3f3
    },
    trafficBlock: {

    },
    trafficBlockTitle: {
        fontSize: 16,
        lineHeight: 18
    },
    marktBlockBlock: {
        borderTopWidth: 10,        
        borderTopColor: baseStyle.borderWidthRf3f3f3
    },
    commenBlockBlock: {
        borderTopWidth: 10,        
        borderTopColor: baseStyle.borderWidthRf3f3f3  
    }
});