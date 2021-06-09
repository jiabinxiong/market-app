import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, Button, Text, View, Image,  Footer, FooterTab } from 'native-base';

import Home from "../pages/home/Home";
import MarktDetail from "../pages/detail/Detail";
import My from "../pages/my/My";
import MapMarkt from "../pages/map/MapMarkt";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation, route}) => {        
    React.useEffect(() => {        
        if(route.state && route.state.index > 0) {    
            navigation.setOptions({tabBarVisible: false});
        } else {
            navigation.setOptions({tabBarVisible: true});
        }        
    }, [navigation, route]);

    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen                         
                options={{                    
                    headerTintColor: "white",
                    headerShown: false
                }}
                name="home" component={ Home }/>
            <HomeStack.Screen 
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,                
                    title: ""
                }}
                name="MarktDetail"
                component={ MarktDetail }
            />
            <HomeStack.Screen 
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,                
                    title: ""
                }}
                name="MapMarkt" component={ MapMarkt }/>
        </HomeStack.Navigator>
    );
};


const MyStack = createStackNavigator();
const MyStackScreen = () => (
    <MyStack.Navigator>
        <MyStack.Screen name="home" component={ My }/>
    </MyStack.Navigator>
);

const componentArr = [
    {
        name: "首页",
        component: HomeStackScreen,
        options: {
            tabBarIcon: {
                name: "home"
            }
        }
    },
    {
        name: "我的",
        component: MyStackScreen,
        options: {
            tabBarIcon: {
                name: "account"
            }
        }
    }
];


function TabsScreenFun () {
    let tabs = [];
    for (let i = 0; i < componentArr.length; i++) {        
        tabs.push(
            <Tabs.Screen 
                key={i}
                name={componentArr[i].name}                 
                options= {{
                    title: componentArr[i].name,                    
                    tabBarIcon: () => (
                        <IconMaterialCommunityIcons                            
                            name={ componentArr[i].options.tabBarIcon.name } 
                            size={ 28 } 
                            color='#cccccc'/>
                    )
                }}
                component={ componentArr[i].component 
            }/>
        );
    }

    return tabs;
}

function RouterCompoent() {
    return (
      <NavigationContainer>
          <Tabs.Navigator>
              {
                  [...TabsScreenFun()]
              }                    
          </Tabs.Navigator>
     </NavigationContainer>
    );
  }
export default RouterCompoent;

