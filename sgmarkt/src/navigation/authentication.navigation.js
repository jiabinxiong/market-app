import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from "../screens/signUp/RegisterScreen";

const AuthenticationStack = createStackNavigator();

const AuthenticationStackScreen = (navigation) => (
    <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen
            options={{
                animationEnabled: true
            }}
            name="Login"
            component={ LoginScreen }
        />
        <AuthenticationStack.Screen name="SignUp" component={ SignUpScreen }/>
    </AuthenticationStack.Navigator>
);

export default AuthenticationStackScreen;
