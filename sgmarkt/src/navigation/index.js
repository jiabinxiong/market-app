import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// import AuthenticationStackScreen from './authentication.navigation';
import HomeStackScreen from "./home.navigation";
import MyStackScreen from "./my.navigation";
import NearbyStackScreen from "./nearby.navigation";
import PublishScreenStack from './publish.navigation';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';

import TabBarComponent from "../components/TabBar.component";
import {createStackNavigator} from '@react-navigation/stack';

import { storage, storageLoad, storageRemove } from "../storage/storage";

// import { authLogin } from '../service/authentication.login';

const Tabs = createBottomTabNavigator();

const AppTabsScreen = () => (
    <Tabs.Navigator
        initialRouteName="Home"
        tabBar={props => <TabBarComponent {...props} />}
    >
        <Tabs.Screen
            name="Home"
            component={HomeStackScreen}
            options={(route) => ({
                tabBarLabel: '首页',
            })}
        />
        <Tabs.Screen
            name="Publish"
            component={PublishScreenStack}
            options={{
                tabBarLabel: ''
            }}
        />
        <Tabs.Screen
            name="Nearby"
            component={NearbyStackScreen}
            options={{
                tabBarLabel: 'Nearby',
            }}
        />
        <Tabs.Screen
            name="My"
            component={MyStackScreen}
            options={{
                tabBarLabel: '我的',
            }}
        />
    </Tabs.Navigator>
)

const RootStack = createStackNavigator();

const AppNavigation = () => {
    // const [ isLoading, setIsLoading ] = React.useState(true);
    const [ userToken, setUserToken ] = React.useState(null);
    //
    // const authContext = React.useMemo(() => ({
    //     signIn: () => {
    //         setUserToken("fgkj");
    //         setIsLoading(false);
    //     },
    //     signOut: () => {
    //         setUserToken(null);
    //         setIsLoading(false);
    //     },
    //     signUp: () => {
    //         setUserToken("fgkj");
    //         setIsLoading(false);
    //     }
    // }), []);
    // React.useEffect(() => {
    //     setTimeout(() => {
    //          setIsLoading(false);
    //     }, 1000);
    // }, []);
    //
    // if( isLoading ) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //             <ActivityIndicator size="large"/>
    //         </View>
    //     );
    // }

    // storage.load({
    //     key: "userInfo"
    // }).then(res => {
    //     setUserToken(res.sessionToken);
    // });

    // storage.remove({
    //     key: 'token',
    // });
    // storageLoad("token", (loadData, succeed ) => {
    //     console.log(loadData);
    //     if( succeed === 0) {
    //         console.log('0');
    //         // setUserToken(loadData.sessionToken);
    //     } else if (succeed === 1) {
    //         console.log('1');
    //         // setUserToken(null);
    //     }
    // });

    // authLogin((authInfo) => {
    //     if(authInfo === null) {
    //         setUserToken(null);
    //     } else {
    //         setUserToken(authInfo.sessionToken);
    //     }
    // });


	return (
        <NavigationContainer>
            <RootStack.Navigator
                headerMode="none"
                screenOptions={{ animationEnabled: true }}
                mode="modal"
            >
                <RootStack.Screen name="App" component={AppTabsScreen}/>
                <RootStack.Screen
                    options={{
                        animationEnabled: true,
                        gestureResponseDistance: {
                            vertical: 500
                        }
                    }}
                    name="Login" component={LoginScreen}/>
                <RootStack.Screen
                    options={{
                        animationEnabled: true,
                        gestureResponseDistance: {
                            vertical: 500
                        }
                    }}
                    name="Register" component={RegisterScreen}/>
                {/*<RootStack.Screen name="AuthStack" component={AuthenticationStackScreen}/>*/}
            </RootStack.Navigator>

        </NavigationContainer>

	)
};


// import { HeaderOptions } from "../components"
//
// import HomeScreen from "../screens/home/HomeScreen";
// import MarktDetailScreen from "../screens/marktDetail/MarktDetailScreen";
// import MapScreen from "../screens/map/MapScreen";
// import ShopListScreen from "../screens/shopList/ShopListScreen";
// import ShopScreen from "../screens/shop/ShopScreen";
// import CommentScreen from "../screens/comment/CommentScreen";
// import ImgScreen from "../screens/img/ImgScreen";
// import MarktDetailImgVideoScreen from '../screens/marktDetailImgVideo/MarktDetailImgVideoScreen';
//
// import ImgShowScreen from '../screens/imgShow/ImgShowScreen';
//
// import MyScreen from "../screens/my/myScreen";
//
// import NearbyScreen from "../screens/nearby/NearbyScreen"
//
// const Stack = createSharedElementStackNavigator();
//
// const AppNavigation = () => {
// 	const componentData = [
// 		{
// 			component: HomeScreen,
// 			name: "Home",
//             options: {
//                 headerShown: false,
//             }
// 		},
// 		{
// 			component: MarktDetailScreen,
// 			name: "MarktDetail",
//             options: HeaderOptions("MarktDetail")
// 		},
// 		{
// 			component: ShopListScreen,
// 			name: "ShopList",
//             options: HeaderOptions("ShopList")
// 		},
// 		{
// 			component: ShopScreen,
// 			name: "Shop",
//             options: HeaderOptions("Shop")
// 		},
// 		{
// 			component: CommentScreen,
// 			name: "Comment",
//             options: HeaderOptions("Comment")
// 		},
//         {
//             component: MyScreen,
//             name: "My"
//         },
//         {
//             component: ImgScreen,
//             name: "Img",
//             options: HeaderOptions("Img")
//         },
//         {
//             component: NearbyScreen,
//             name: "Nearby",
//             options: HeaderOptions("Nearby")
//         },
//         {
//             component: ImgShowScreen,
//             name: 'ImgShow',
//             options: HeaderOptions('ImgShow')
//         },
//         {
//             component: MarktDetailImgVideoScreen,
//             name: 'MarktDetailImgVideo',
//             options: HeaderOptions('MarktDetailImgVideo')
//         }
// 	];
//
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator initialRouteName="Home">
//                 {
//                     componentData.map((data, index) => {
//                         return <Stack.Screen
//                             name={data.name}
//                             key={index}
//                             options={data.options}
//                             sharedElementsConfig={(route, otherRoute, showing) => {
//                                 if(data.name === "Img") {
//                                     const { item } = route.params;
//                                     return [
//                                         {
//                                             id: `item.${item.id}.photo`,
//                                             animating: "move",
//                                             resize: "clip",
//                                             align: "center-top"
//                                         }
//                                     ];
//                                 }
//                             }}
//                             component={ data.component }/>
//                     })
//                 }
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	)
// };

export default AppNavigation;
