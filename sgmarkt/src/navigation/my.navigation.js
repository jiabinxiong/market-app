import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import MyScreen from "../screens/my/MyScreen";
import MyInfoSetScreen from '../screens/myInfoSet/MyInfoSetScreen';

import { getUserInfoAction,  loadingConfigUserInfoAction, popWarningConfigUserInfoBackAction } from '../actions';

import { HeaderOptions } from "../components"
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BACK_ICON } from '../constants/icon.constant';

import { myInfoSetStyle } from '../styles'
import userService from '../service/user.service';

const MyStack = createStackNavigator();
class MyStackScreen extends React.Component {
    handleInfoSave() {
        if(JSON.stringify(this.props.userInfoCopyModifyReducer) !== JSON.stringify(this.props.userInfoReducer)) {
            this.props.loadingConfigUserInfoAction(true);
            userService.modifyInfo({
                ...this.props.userInfoCopyModifyReducer
            }).then(ret => {
                this.props.loadingConfigUserInfoAction(false);
                this.props.getUserInfoAction(this.props.userInfoCopyModifyReducer);
                this.props.configUserInfoNavNavigationReducer.goBack();
            })
        }
    }

    handleInfoBack() {
        if(JSON.stringify(this.props.userInfoCopyModifyReducer) !== JSON.stringify(this.props.userInfoReducer)) {
            this.props.popWarningConfigUserInfoBackAction(true);
        } else {
            this.props.configUserInfoNavNavigationReducer.goBack();
        }
    }

    render() {
        return (
            <MyStack.Navigator>
                <MyStack.Screen
                    options={HeaderOptions("My")}
                    name="My" component={ MyScreen }
                />
                <MyStack.Screen
                    options={{
                        headerBackTitleVisible: false,
                        title: "个人信息",
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => this.handleInfoBack() }>
                                <IconMaterialCommunityIcons
                                    style={{ fontSize: 30 }}
                                    name={BACK_ICON}
                                    color="#3484ff"
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => this.handleInfoSave()}>
                                <Text
                                    style={[myInfoSetStyle.navRightSave, {color: this.props.configUserInfoSaveReducer ? '#3484ff' : '#bdbdbd'}]}
                                >
                                    保存
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                    name="MyInfoSet"
                    component={ MyInfoSetScreen }
                />
            </MyStack.Navigator>
        );
    }
}

// export default MyStackScreen;
export default connect(
    data => ({
        userInfoReducer: data.userInfoReducer,
        userInfoCopyModifyReducer: data.userInfoCopyModifyReducer,
        configUserInfoSaveReducer: data.configUserInfoSaveReducer,
        configUserInfoNavNavigationReducer: data.configUserInfoNavNavigationReducer
    }),
    { getUserInfoAction, loadingConfigUserInfoAction, popWarningConfigUserInfoBackAction }
)(MyStackScreen);



