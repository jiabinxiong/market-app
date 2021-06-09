import {
    StyleSheet,
} from 'react-native';

import { baseStyle } from "./base.style";
  
// 上图下文 
export const commenTImgBTextStyle = StyleSheet.create({
	tImgBTextCnt: {
		flexDirection: "row"
	},
	tImgBTextBlock: {
		width: 150,		
		marginLeft: 15,		
	},
	tImgBTextImg: {
		width: 150,
		height: 100,
		borderRadius: 5		
	},
	tImgBTextInfo: {
		paddingTop: 5,
		paddingBottom: 5
	},
	tImgBTextInfoTitle: {
		lineHeight: 16,
		fontSize: 14
	}
})

// 上文下内容
export const commenTTextAreaStyle = StyleSheet.create({
	tTextArea: {		
		paddingBottom: 10,		
	},
	tTextTopArea: {
		flexDirection: "row",
		height: 40,
		paddingLeft: 15,
		paddingRight: 15
	},
	tTextTopLArea: {

	},
	tTextTopLTArea: {
		fontSize: 16,
		lineHeight: 40
	},
	tTextTopRArea: {
		flex: 1,
		alignItems: "flex-end",
		height: 40
	},
	tTextTopRMoreArea: {
		fontSize: 14,
		lineHeight: 40
	},
	tTextBottomInf: {

	}
})