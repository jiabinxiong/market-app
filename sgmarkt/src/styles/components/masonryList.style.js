import {
   StyleSheet,
} from 'react-native';

import { baseStyle } from "../base.style";

  
export const masonryListStyle = StyleSheet.create({     
	imageContainer: {
		borderTopLeftRadius: 5, 
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
	},
    renderIndividualHeader: {    
        position: "relative",            
        zIndex: 10
    },
    renderIndividualHeaderT: data => {
        return {            
            position: "absolute",            
            flexDirection: "row-reverse",
            width: data.masonryDimensions.width,
            // alignItems: "center",
            top: data.masonryDimensions.margin,
            left: data.masonryDimensions.margin,
            paddingRight: 5,
            borderBottomLeftRadius: 10, 
            borderBottomRightRadius: 10,
            height: 30,            
        }
    },
    userVideoIcon: {
        marginTop: 2,
        marginRight: 5,
        color: "#fff",
        fontSize: 20,        
    },
    renderIndividualHeaderB: data => {
        return {        
            position: "absolute",
            width: data.masonryDimensions.width,            
            top: data.masonryDimensions.height - 25,
            left: data.masonryDimensions.margin,
            height: 30, 
            paddingLeft: 5,
            paddingRight: 5,
            borderBottomLeftRadius: 10, 
            borderBottomRightRadius: 10            
        }
    },
    userLoctionIcon: {
        marginTop: 5,
        color: "#fff",
        fontSize: 20,        
    },
    renderIndividualHeaderTopUser: {        
        flexDirection: "row",
        flex: 1
    },
    renderIndividualHeaderTopPortrait: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 2
    },
    renderIndividualHeaderTopName: {
        color: "#fff",        
    },
    renderIndividualHeaderTopR: {

    },

	renderIndividualFooter: data => {
		return {
			width: data.masonryDimensions.width,                                
            marginTop: -data.masonryDimensions.margin,
            marginLeft: data.masonryDimensions.margin,
            backgroundColor: "#fff",
            padding: 5,
            paddingLeft: 0,
            paddingRight: 0
		}
	},
    user: {
        flexDirection: "row",
        marginTop: 5,
        height: 20        
    },
    userInfo: {
        flexDirection: "row",
        flex: 1
    },
    userPortrait: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 2
    },
    userName: {
        color: "#ccc",
        lineHeight: 20
    },
    userLike: {
        flexDirection: "row"
    },
    userLikeIcon: {
        marginRight: 3,
        color: "#ccc",
        fontSize: 20
    },
    userLinkNumber: {
        lineHeight: 20
    }
});
