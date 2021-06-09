import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button, Modal } from "react-native";
import { connect} from "react-redux";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    USER_ICON,
    CHECKBOX_MARKED_CIRCLE_OUTLINE_ICON, EYE_OFF_ICON, LOCK_ICON, EYE_ICON
} from "../../constants/icon.constant";

import { loginStyle } from '../../styles';

import { signAction } from "../../actions";

import { signInApi } from "../../api";

import { LoadingModalComponent } from "../../components";

import { promptInfo } from "../../prompt/prompt";

import { storage, storageSave, storageLoad } from "../../storage/storage";

import userService from '../../service/user.service';

const LoginScreen = (props) => {
    const [data, setData] = React.useState({
        checkUserIptChange: false,
        secureTextEntry: true
    });
    const [ loadingShow, getLoadingShow ] = React.useState(false);
    const [ prompt, getPrompt] = React.useState(false);
    const [ userAir, getUserAir ] = React.useState(false);
    const [ pasAir, getPasAir ] = React.useState(false);

    const changeUser = val => {
        props.signAction({
            phone: val,
        })

        setData({
            ...data,
            checkUserIptChange: val.length === 0 ? false : true
        })

        getUserAir(false);
    };

    const changePassword = val => {
        props.signAction({
            password: val,
        })

        getPasAir(false);
    };

    const handleUpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    const handleSignIn = () => {
        getLoadingShow(true);
        userService.login(props.signReducers).then((ret) => {
            getLoadingShow(false);
            if(ret.data.code === 0) {
                getPrompt(false);
                storage.save({
                    key: 'login',
                    data: {
                        status: true,
                        userId: ret.data.userId
                    }
                });
            } else if (ret.data.code === 1) {
                getPrompt(true);
            }
        })
    }

    return (
        <KeyboardAwareScrollView>
            <View style={ loginStyle.container }>

                <StatusBar backgroundColor="#009378" barStyle="light-content"/>
                <LoadingModalComponent
                    visible={loadingShow}
                />
                <View style={ loginStyle.header }>
                    <Text style={ loginStyle.headerText }>欢迎!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={ loginStyle.footer }
                >
                    <View style={ loginStyle.footerText }>
                        <Text style={ loginStyle.nameTitle }>
                            手机
                        </Text>

                        {
                            prompt ? <Text style={ loginStyle.prompt }>{promptInfo.userPas}</Text> : null
                        }
                    </View>
                    <View style={ loginStyle.action }>
                        <IconMaterialCommunityIcons
                            name={USER_ICON}
                            style={ loginStyle.actionIcon }
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            style={ loginStyle.iptText }
                            placeholder="你的手机号"
                            autoCapitalize="none"
                            onChangeText={val => changeUser(val)}
                        />
                        {
                            data.checkUserIptChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <IconMaterialCommunityIcons
                                        name={CHECKBOX_MARKED_CIRCLE_OUTLINE_ICON}
                                        color="green"
                                        size={20}/>
                                </Animatable.View>
                            : null
                        }
                        {
                            userAir ? <Text style={ loginStyle.promptBlock }>{ promptInfo.userAir }</Text> : null
                        }
                    </View>
                    <View style={[loginStyle.footerText, { marginTop: 20 }]}>
                        <Text style={ loginStyle.nameTitle }>
                            密码
                        </Text>
                    </View>
                    <View style={ loginStyle.action }>
                        <IconMaterialCommunityIcons
                            name={LOCK_ICON}
                            style={ loginStyle.actionIcon }
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            style={ loginStyle.iptText }
                            placeholder="你的密码"
                            secureTextEntry={data.secureTextEntry}
                            autoCapitalize="none"
                            textContentType={'newPassword'}
                            selectTextOnFocus={true}
                            onChangeText={val => changePassword(val)}
                        />
                        <TouchableOpacity
                            onPress={ () => handleUpdateSecureTextEntry() }
                        >
                            <IconMaterialCommunityIcons
                                name={data.secureTextEntry ? EYE_OFF_ICON : EYE_ICON }
                                color="grey"
                                size={20}
                            />
                        </TouchableOpacity>
                        {
                            pasAir ? <Text style={ loginStyle.promptBlock }>{ promptInfo.pasAir }</Text> : null
                        }

                    </View>

                    <View style={  loginStyle.loginBtn }>
                        <TouchableOpacity
                            onPress={() => handleSignIn()}
                            style={  loginStyle.signIn }>
                            <LinearGradient
                                style={  loginStyle.signIn }
                                colors={['#08d4d4', '#01ab9d']}>
                                <Text style={[ loginStyle.signInText, { color: "#fff" } ]}>
                                    登录
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Register")}
                            style={[loginStyle.signIn, {
                                borderColor: "#009387",
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[ loginStyle.signInText, { color: "#009387" } ]}>
                                注册
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={  loginStyle.loginBtn }>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            style={[loginStyle.signIn, {
                                borderColor: "#009387",
                                borderWidth: 1,
                                marginTop: -30
                            }]}
                        >
                            <Text style={[ loginStyle.signInText, { color: "#009387" } ]}>
                                返回(向下拉也可返回)
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default connect(
    state => ({signReducers: state.signReducers}),
    {signAction}
)(LoginScreen);
