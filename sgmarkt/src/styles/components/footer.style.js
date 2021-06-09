import {
   StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const footerStyle = StyleSheet.create({     
	area: {
		marginTop: -110
	},
	block: () => {
		let top = 0;
		if( DeviceInfo.getModel() == "iPhone 6" ) {
			
		} else if( DeviceInfo.getModel() == "iPhone 6s" ) {
			top = -80;
		} else if (DeviceInfo.getModel() == "iPhone 7" ) {

		} else if (DeviceInfo.getModel() == "iPhone 8" ) {

		} else if (DeviceInfo.getModel() == "iPhone 9" ) {

		} else if (DeviceInfo.getModel() == "iPhone 10" ) {

		} else if (DeviceInfo.getModel() == "iPhone 11" ) {
			
		} else if (DeviceInfo.getModel() == "iPhone 12" ) {

		} else {
			top = 0;
		}
		return {
			height: 50,
			marginRight: 10,
			marginLeft: 10,
			marginTop: top,
			borderTopWidth: 0,
			backgroundColor: "rgba(255, 255, 255, 0)"
		}
	},
	tab: {	
		borderRadius: 25
	},
	tabActive: {
		height: 50,
		backgroundColor: "rgba(0, 168, 251, 0.8)",
		borderRadius: 0		
	},
	btn: {		
		height: 50,
		borderRadius: 0,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	btnText: {
		color: "#fff"
	}
});
