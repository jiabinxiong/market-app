import React from "react";
import {View, Text, ActivityIndicator, TouchableOpacity} from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { MY_ICON, HOME_ICON, USER_ICON, ADD_ICON } from '../constants/icon.constant';
import { tabBarStyle } from '../styles';
import { authLogin } from '../service/authentication.login';
import { storage } from '../storage/storage';

function TabBarComponent({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    for(let i = 0; i < state.routes.length; i++) {
        if( state.routes[i].state !== undefined ) {
            if( state.routes[i].state.index > 0 ) {
                return null;
            }
        }
    }


    const iconFun = (type) => {
        if(type === "Home") {
            return HOME_ICON;
        } else if (type === "My") {
            return MY_ICON;
        } else if (type === 'Publish'){
            return ADD_ICON;
        }else {
            return USER_ICON;
        }
    };

    return (
        <View style={ tabBarStyle.area }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        if(route.name === "My") {
                            storage.load({
                                key: 'login'
                            }).then(ret => {
                                navigation.navigate(route.name);
                            }).catch(err => {
                                navigation.navigate("Login", {screen: "My"});
                            })
                            // authLogin((authInfo) => {
                            //     if(authInfo === null) {
                            //         navigation.navigate("Login", {screen: "My"});
                            //     } else {
                            //         navigation.navigate(route.name);
                            //     }
                            // });
                        } else {
                            navigation.navigate(route.name);
                        }

                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={ tabBarStyle.block }
                        key={index}
                    >

                        <View style={ tabBarStyle.iconBlock }>
                            <IconMaterialCommunityIcons
                                style={
                                    [
                                        route.name !== 'Publish' ? tabBarStyle.icon : tabBarStyle.publishIcon,
                                        {  color: isFocused ? '#292929' : '#fff' }
                                    ]
                                }
                                name={iconFun(route.name)} />
                            {
                                route.name !== 'Publish' ? <Text style={[ tabBarStyle.iconText, {  color: isFocused ? '#292929' : '#fff' }]}>{label}</Text> : null
                            }

                        </View>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default TabBarComponent;
