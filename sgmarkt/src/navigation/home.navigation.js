import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HeaderOptions } from "../components"

import HomeScreen from "../screens/home/HomeScreen";
import MarktDetailScreen from "../screens/marktDetail/MarktDetailScreen";
import MapScreen from "../screens/map/MapScreen";
import ShopListScreen from "../screens/shopList/ShopListScreen";
import ShopScreen from "../screens/shop/ShopScreen";
import CommentScreen from "../screens/comment/CommentScreen";
import ImgScreen from "../screens/img/ImgScreen";
import MarktDetailImgVideoScreen from '../screens/marktDetailImgVideo/MarktDetailImgVideoScreen';

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation, route}) => {
    const routeName = getFocusedRouteNameFromRoute(route);

	React.useEffect(() => {

        // if(route.state && route.state.index > 0) {
        //     navigation.setOptions({tabBarVisible: false});
        // } else {
        //     navigation.setOptions({tabBarVisible: true});
        // }
    }, [navigation, route]);
	return (
		<HomeStack.Navigator >
			<HomeStack.Screen
				name="Home"
				options={{
					headerShown: false,
                    tabBarVisible: false
				}}
				component={ HomeScreen }
            />
			<HomeStack.Screen
				name="MarktDetail"
				options={HeaderOptions("MarktDetail")}
				component={ MarktDetailScreen }
            />
			<HomeStack.Screen
				name="Map"
				options={{
					headerBackTitleVisible: false,
                    headerTransparent: true,
				}}
				component={ MapScreen }
            />
			<HomeStack.Screen
				name="ShopList"
				options={HeaderOptions("ShopList")}
				component={ ShopListScreen }
            />
			<HomeStack.Screen
				name="Shop"
				options={HeaderOptions("Shop")}
				component={ ShopScreen }
            />
			<HomeStack.Screen
				name="Img"
				component={ ImgScreen }
				options={{
					headerBackTitleVisible: false,
                    headerTransparent: true,
				}}
				sharedElementsConfig={(route, otherRoute, showing) => {
					console.log(route);
	            	const { item } = route.params;
	            	return [`item.${item.id}.photo`];
	            }}
            />
			<HomeStack.Screen
				name="Comment"
				options={HeaderOptions("Comment")}
				component={ CommentScreen }
            />
            <HomeStack.Screen
                name="MarktDetailImgVideo"
                options={HeaderOptions("MarktDetailImgVideo")}
                component={ MarktDetailImgVideoScreen }
            />
		</HomeStack.Navigator>
	);
};




export default HomeStackScreen;



