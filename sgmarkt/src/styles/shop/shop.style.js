import { StyleSheet } from "react-native";

import { baseStyle } from "../base.style";

export const shopStyle = StyleSheet.create({
	ad: {
		height: 200
	},
	adImg: {
		width: "100%",
		height: 200 
	},
	cnt: {
		flexDirection: "row",
		marginBottom: 20,
	},
	portraitBlock: {
		marginLeft: 20,
		marginTop: -32,
	},
	portraitImg: {	
		width: 100, 
		height: 100, 
		borderRadius: 50,
		borderWidth: 4,
		borderColor: "#fff"
	},	
	info: {
		marginTop: 10,
		flex: 1
	},
	infoLi: {		
		flexDirection: "row",		
		paddingTop: 5,
		paddingBottom: 5,		
		paddingRight: 15
	},
	infoLiName: {				
		width: 80,
		paddingRight: 10,
		textAlign: "right",
		color: "#3c3c3c",		
	},
	infoLiText: {
		flex: 1
	},
	introduce: {
		// marginTop: 20,
		// marginBottom: 20,
        borderTopWidth: 10,        
        borderTopColor: baseStyle.borderWidthRf3f3f3,
        // borderBottomWidth: 10,
        // borderBottomColor: baseStyle.borderWidthRf3f3f3,
        
	}
});