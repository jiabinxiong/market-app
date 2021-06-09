import DeviceInfo from 'react-native-device-info';

export const phoneTypeTool = {
    phoneType: () => {
        if (
            DeviceInfo.getModel() === "iPhone 11" ||
            DeviceInfo.getModel() === "iPhone x" ||
            DeviceInfo.getModel() === "iPhoneXR" ||
            DeviceInfo.getModel() === "iPhoneXs" ||
            DeviceInfo.getModel() === "iPhoneXsMax" ) {
            return {
                bottomHeight: 80,
                footerPopBottom: 40,
            }
        } else {
            return {
                bottomHeight: 50,
                footerPopBottom: 0
            }
        }
    },
	headerH: () => {

		// console.log(DeviceInfo.getApplicationName())
		// console.log(DeviceInfo.getAvailableLocationProviders())
		// console.log(DeviceInfo.getBuildId())
		// console.log(DeviceInfo.getBatteryLevel())
		// console.log( DeviceInfo.getCarrier())
		// console.log(DeviceInfo.getDeviceName())
		// console.log(DeviceInfo.getFontScale())
		// console.log( DeviceInfo.getFreeDiskStorage())

		// console.log( DeviceInfo.getFreeDiskStorageOld())
		// console.log( DeviceInfo.getIpAddress())
		// console.log( DeviceInfo.getMacAddress())
		// console.log( DeviceInfo.getManufacturer())
		// console.log( DeviceInfo.getPowerState())
		// console.log( DeviceInfo.getSystemVersion())
		// console.log( DeviceInfo.getTotalDiskCapacity())
		// console.log( DeviceInfo.getTotalDiskCapacityOld())

		// console.log( DeviceInfo.getTotalMemory())
		// console.log( DeviceInfo.getUsedMemory())
		// console.log( DeviceInfo.getUserAgent())
		// console.log( DeviceInfo.getVersion())
		// console.log( DeviceInfo.hasNotch())
		// console.log( DeviceInfo.isBatteryCharging())
		// console.log( DeviceInfo.isEmulator())
		// console.log( DeviceInfo.isLandscape())

		// console.log( DeviceInfo.isLocationEnabled())
		// console.log( DeviceInfo.isHeadphonesConnected())
		// console.log( DeviceInfo.isPinOrFingerprintSet())
		// console.log( DeviceInfo.supportedAbis())

		// console.log(DeviceInfo.getBrand() + "- " + "getBrand")
		// console.log(DeviceInfo.getBuildNumber()+ "- " +"getBuildNumber")
		// console.log(DeviceInfo.getBundleId()+ "- " +"getBundleId")
		// console.log(DeviceInfo.getDeviceId()+ "- " +"getDeviceId")
		// console.log(DeviceInfo.getDeviceType()+ "- " +"getDeviceType")
		// console.log( DeviceInfo.getModel()+ "- " +"getModel")
		// console.log( DeviceInfo.getReadableVersion()+ "- " +"getReadableVersion")
		// console.log( DeviceInfo.getSystemName()+ "- " + "getSystemName")
		// console.log( DeviceInfo.getUniqueId()+ "- " + "getUniqueId")
		// console.log( DeviceInfo.isTablet()+ "- " +"isTablet")

		if( DeviceInfo.getModel() == "iPhone 6" ) {

		} else if( DeviceInfo.getModel() == "iPhone 6s" ) {
			return 70;
		} else if (DeviceInfo.getModel() == "iPhone 7" ) {

		} else if (DeviceInfo.getModel() == "iPhone 8" ) {

		} else if (DeviceInfo.getModel() == "iPhone 9" ) {

		} else if (DeviceInfo.getModel() == "iPhone 10" ) {

		} else if (DeviceInfo.getModel() == "iPhone 11" ) {
			return 100;
		} else if (DeviceInfo.getModel() == "iPhone 12" ) {

		} else {
			return 70;
		}
	},
	headerImageScrollViewTitle: () => {
		if( DeviceInfo.getModel() == "iPhone 6" ) {

		} else if( DeviceInfo.getModel() == "iPhone 6s" ) {
			return {
				height: 60,
			    paddingTop: 25,
			}
		} else if (DeviceInfo.getModel() == "iPhone 7" ) {

		} else if (DeviceInfo.getModel() == "iPhone 8" ) {

		} else if (DeviceInfo.getModel() == "iPhone 9" ) {

		} else if (DeviceInfo.getModel() == "iPhone 10" ) {

		} else if (DeviceInfo.getModel() == "iPhone 11" ) {
			return {
				height: 85,
			    paddingTop: 55,
			}
		} else if (DeviceInfo.getModel() == "iPhone 12" ) {

		} else {
			return {
				height: 85,
			    paddingTop: 55,
			}
		}

	},

	footerHeight: () => {

	}
};
