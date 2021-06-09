import {
   StyleSheet,
} from 'react-native';
// import DeviceInfo from 'react-native-device-info';

import { baseStyle } from "../base.style";

  
export const headerStyle = StyleSheet.create({     
	header: {
		height: 50,
		borderBottomWidth: 0
	},
	headerLeft: {

	},
	headerRight: {
		flexDirection: "row",
		marginTop: 10
	},
	headerLeftIcon: {
		width: 50,
		height: 50,
		lineHeight: 50,
		color: "#3484ff",
		fontSize: 30
	},
	headerRightShareIcon: {
		width: 40,
		height: 50,
		lineHeight: 40,		
		textAlign: "center",
		color: "#fff",
		fontSize: 30
	},
	headerRirhtStarIcon: {		
		width: 40,
		height: 50,
		lineHeight: 40,
		textAlign: "center",
		color: "#fff",
		fontSize: 30
	}
});
