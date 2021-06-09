import React from "react";
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    USER_ICON,
    CHECKBOX_MARKED_CIRCLE_OUTLINE_ICON, EYE_OFF_ICON, LOCK_ICON, EYE_ICON
} from "../../constants/icon.constant";

import { loginStyle } from '../../styles';

import { registerAction } from '../../actions'

import resolve from '../../tool/resolve';

import { promptInfo } from "../../prompt/prompt";

import userService from '../../service/user.service';
import { LoadingModalComponent } from '../../components';
import Toast from "react-native-root-toast";

const RegisterScreen = (props) => {
    const { navigation } =props;
    const [data, setData] = React.useState({

        checkTextIptChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    });
    const [ loadingShow, setLoadingShow ] = React.useState(false);
    const [ phone, setPhone ] = React.useState('');
    const [ phoneConfirm, setPhoneConfirm ] = React.useState(promptInfo.phoneArr);
    const [ promptPhone, setPromptPhone ] = React.useState(false);
    const [ password, setPassword ] = React.useState('');
    const [ confirmPassword, setConfirmPassword ] = React.useState(promptInfo.pasAir);
    const [ confirmPasswordShow, setConfirmPasswordShow ] = React.useState(false);
    const [ comparePassword, setComparePassword ] =React.useState(false);


    const changePhone = val => {

        // console.log(val);
        // console.log(val.slice(0,11))
        // if(!resolve.is.mobile(val)) {
        //     console.log('aaa')
        //
        // } else {
        //
        //     console.log('xxxx')
        // }

        if(val.length !== 0) {
            setPromptPhone(false);
        }

        // let phoneDeleteGab = resolve.gap.deleteAll(val);
        if(val.length === 12) {
            setData({
                ...data,
                checkTextIptChange: true
            });
        } else {
            setData({
                ...data,
                checkTextIptChange: false
            })
            setPhone(val);
            // setPhone(resolve.gap.phoneAdd(phoneDeleteGab.slice(0, 11)))
        }

    };

    const changePassword = val => {
        setPassword(val);
        if(val.length === 0) {
            setConfirmPasswordShow(true);
        } else {
            setConfirmPasswordShow(false);
        }
    };

    const handleUpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const changeConfirmPassword = val => {
        setData({
            ...data,
            confirmPassword: val,
        });
    };

    const handleConfirmUpdateSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

    const handleRegister = () => {
        if(phone.length === 0) {
            setPromptPhone(true);
            return false;
        }

        if(resolve.is.mobile(phone)) {
            setPromptPhone(true);
            setPhoneConfirm(promptInfo.phoneArr);
            return false;
        }

        if(password.length === 0) {
            setConfirmPasswordShow(true);
            return false;
        }

        if(data.confirmPassword !== password) {
            setComparePassword(true);
            return false;
        } else {
            setComparePassword(false);
        }

        // setLoadingShow(true);
        userService.register({
            phone: phone,
            password: password
        }).then((req) => {
            // setLoadingShow(false);

            if(req.data.code == 0) {

            } else if (req.data.code == 1 ) {
                Toast.show('手机号已存在了, 换一个吧', {
                    duration: 1000,
                    position: 0,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                });
            }
        })
    }

    return (
        <KeyboardAwareScrollView>
            <View style={ loginStyle.container }>
                <LoadingModalComponent
                    visible={loadingShow}
                />
                <StatusBar backgroundColor="#009378" barStyle="light-content"/>
                <View style={ loginStyle.header }>
                    <Text style={ loginStyle.headerText }>欢迎注册!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={ loginStyle.footer }
                >
                    <View style={[loginStyle.footerText ]}>
                        <Text style={ loginStyle.nameTitle }>
                            手机号
                        </Text>

                        {
                            promptPhone ? <Text style={ loginStyle.prompt }>{phoneConfirm}</Text> : null
                        }
                    </View>
                    <View style={ loginStyle.action }>
                        <IconMaterialCommunityIcons
                            name={USER_ICON}
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            keyboardType='numeric'
                            style={ loginStyle.iptText }
                            placeholder="你的手机号"
                            autoCapitalize="none"
                            value={phone}
                            onChangeText={val => changePhone(val)}
                        />
                        {
                            data.checkTextIptChange ?
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

                    </View>
                    <View style={[loginStyle.footerText, { marginTop: 35 }]}>
                        <Text style={ loginStyle.nameTitle }>
                            密码
                        </Text>

                        {
                            confirmPasswordShow == true ? <Text style={ loginStyle.prompt }>{confirmPassword}</Text> : null
                        }

                    </View>
                    <View style={ loginStyle.action }>
                        <IconMaterialCommunityIcons
                            name={LOCK_ICON}
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            style={ loginStyle.iptText }
                            placeholder="你的密码"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            textContentType={'newPassword'}
                            autoCorrect = {false}
                            selectTextOnFocus={true}
                            onChangeText={val => changePassword(val)}
                        />
                        <TouchableOpacity
                            onPress={ handleUpdateSecureTextEntry }
                        >
                            <IconMaterialCommunityIcons
                                name={data.secureTextEntry ? EYE_OFF_ICON : EYE_ICON }
                                color="grey"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[loginStyle.footerText, { marginTop: 35 }]}>
                        <Text style={ loginStyle.nameTitle }>
                            确认密码
                        </Text>

                        {
                            comparePassword ? <Text style={ loginStyle.prompt }>{promptInfo.confirmPassword}</Text> : null
                        }

                    </View>
                    <View style={ loginStyle.action }>
                        <IconMaterialCommunityIcons
                            name={LOCK_ICON}
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            style={ loginStyle.iptText }
                            placeholder="确认密码"
                            secureTextEntry={data.confirmSecureTextEntry ? true : false}
                            autoCapitalize="none"
                            textContentType={'newPassword'}
                            autoCorrect = {false}
                            selectTextOnFocus={true}
                            onChangeText={val => changeConfirmPassword(val)}
                        />
                        <TouchableOpacity
                            onPress={ handleConfirmUpdateSecureTextEntry }
                        >
                            <IconMaterialCommunityIcons
                                name={data.confirmSecureTextEntry ? EYE_OFF_ICON : EYE_ICON }
                                color="grey"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={  loginStyle.loginBtn }>
                        <TouchableOpacity
                            onPress={() => handleRegister()}
                            style={[loginStyle.signIn, {
                                borderColor: "#009387",
                                borderWidth: 1
                            }]}
                        >
                            <Text style={[ loginStyle.signInText, { color: "#009387" } ]}>
                                注册
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default connect(
    state => ({registerReducers: state.registerReducers}),
    { registerAction }
)(RegisterScreen);

// export default RegisterScreen;
