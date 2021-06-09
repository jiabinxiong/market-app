import React from "react";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const HeaderOptions = type => {
	const HeaderBackIcon = (color = "#fff") => (
		<IconMaterialCommunityIcons
			style={{ fontSize: 30 }}
	        name="arrow-left-thick"
	    	color={color}
	    />
	);

	switch(type) {
		case "MarktDetail":
			return {
				headerBackTitleVisible: false,
                headerTransparent: true,
                title: "",
                headerBackImage: () => HeaderBackIcon()
			}
		case "Shop":
			return {
				headerBackTitleVisible: false,
                headerTransparent: true,
                title: "",
                headerBackImage: () => HeaderBackIcon()
			};
		case "ShopList":
			return {
				headerBackTitleVisible: false,
                title: "店铺",
                headerBackImage: () => HeaderBackIcon("#3484ff")
			};
		case "Comment":
			return {
				headerBackTitleVisible: false,
                title: "评论",
                headerBackImage: () => HeaderBackIcon("#3484ff")
			};
        case "Img":
            return {
                headerBackTitleVisible: false,
                headerTransparent: true,
                title: "",
                headerBackImage: () => HeaderBackIcon(),
                cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                        cardStyle: {
                            opacity: progress
                        }
                    }
                },

            };
        case "Nearby":
            return {
                // headerBackTitleVisible: false,
                // headerTransparent: true,
                // title: "",
                // headerBackImage: () => HeaderBackIcon()
            };
        case "ImgShow":
            return {
                headerBackTitleVisible: false,
                headerTransparent: true,
                title: "",
                headerBackImage: () => HeaderBackIcon(),
                cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                        cardStyle: {
                            opacity: progress
                        }
                    }
                }
            };
        case "MarktDetailImgVideo":
            return {
                headerBackTitleVisible: false,
                title: "",
                headerStyle: { shadowColor: 'transparent'},
                headerBackImage: () => HeaderBackIcon('#3484ff')
            };
        case "My":
            return {
                headerBackTitleVisible: false,
                headerTransparent: true,
                headerShown: false,
                title: "",
                headerBackImage: () => HeaderBackIcon('#3484ff')
            };
        case 'MyInfoSet':
            return {
                // headerTransparent: true,
                // headerShown: false,
                headerBackTitleVisible: false,
                title: "个人信息修改",
                headerBackImage: () => HeaderBackIcon('#3484ff')
            }
		default:
			return {};
	}
}
