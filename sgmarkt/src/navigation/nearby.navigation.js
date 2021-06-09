import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import NearbyScreen from "../screens/nearby/NearbyScreen";
import ImgScreen from "../screens/img/ImgScreen";
import TestScreen from '../screens/test/TestScreen';

// const NearbyStack = createStackNavigator();
const NearbyStack = createSharedElementStackNavigator();
const NearbyStackScreen = () => {
	return (
		<NearbyStack.Navigator>
			<NearbyStack.Screen name="Nearby" component={ NearbyScreen }/>
			<NearbyStack.Screen
				name="Img"
				component={ ImgScreen }
				options={{
					headerBackTitleVisible: false,
                    headerTransparent: true,
				}}
				sharedElementsConfig={(route, otherRoute, showing) => {
	            	const { item } = route.params;
	            	return [`item.${item.id}.photo`];
	          }}
			/>
            <NearbyStack.Screen
               name="Test"
               options={{
                   headerBackTitleVisible: false,
                   headerTransparent: true,

               }}
               component={TestScreen}
            />
		</NearbyStack.Navigator>
	);
};

export default NearbyStackScreen;



