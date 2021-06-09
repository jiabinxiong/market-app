import React from 'react';
import {View, Text,
    ImageBackground, TouchableOpacity, ScrollView, Image, TextInput, Alert, DeviceEventEmitter} from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { FooterPopComponent, LoadingModalComponent, PopWarningComponent  } from '../../components';
import ImagePicker from 'react-native-image-crop-picker';

import { IS_GENDER, CROP_PICKER } from '../../constants';

import resolve from '../../tool/resolve';

import { myInfoSetStyle } from '../../styles';

import {
    getUserInfoAction,
    modifyUserInfoAction,
    configUserInfoNavNavigationAction,
    popWarningConfigUserInfoBackAction,
    modelShowSelectFooterAction, dateTimePickerShowAction, genderPickerShowAction, configUserInfoSaveAction,
    configUserBackgroundAction, configUserAvatarAction, userInfoCopyModifyAction, configUserCopyModifyEmptyAction
} from '../../actions';

import uploadService from '../../service/upload.service';
import userService from '../../service/user.service';

import MyInfoSetImgUpload from './MyInfoSetImgUpload';

class MyInfoSetScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.configUserInfoSaveAction(false);
        this.props.configUserInfoNavNavigationAction(this.props.navigation);
        this.props.userInfoCopyModifyAction(this.props.route.params.data);
    }

    isSaveBtn() {
        if(JSON.stringify(this.props.userInfoCopyModifyReducer) === JSON.stringify(this.props.userInfoReducer)) {
            this.props.configUserInfoSaveAction(false);
        } else {
            this.props.configUserInfoSaveAction(true);
        }
    }

    handleSave() {

        if(JSON.stringify(this.props.userInfoCopyModifyReducer) === JSON.stringify(this.props.userInfoReducer)) {
            userService.modifyInfo({
                ...this.props.userInfoCopyModifyReducer
            }).then(ret => {
                this.props.getUserInfoAction(this.props.userInfoCopyModifyReducer);
            })
        }
    }

    async changeNickname(val) {
        await this.props.userInfoCopyModifyAction({
            nickname: val
        });

        await this.isSaveBtn();
    }

    handleDateTimeShow() {
        this.props.dateTimePickerShowAction(true);
    }

    async handleConfirm(date) {
        await this.props.userInfoCopyModifyAction({
            birthday: resolve.date.timestamp(date).millisecond
        });

        await this.isSaveBtn();
    }

    hideDatePicker() {
        this.props.dateTimePickerShowAction(false);
    }

    handlerGender() {
        this.props.genderPickerShowAction(true);
    }

    genderCallback = async (v) => {
        if(Object.keys(v).length > 0) {
            await this.props.userInfoCopyModifyAction({
                gender: v.val.value
            });

            await this.isSaveBtn();
        }

        this.props.genderPickerShowAction(false);

    }

    handleClearPopWarning = () => {
        this.props.popWarningConfigUserInfoBackAction(false);
    }

    handleDeterminePopWarning = () => {
        this.props.popWarningConfigUserInfoBackAction(false);
        this.props.navigation.goBack();
    }

    render() {
        const {
            userInfoReducer,
            modelShowSelectFooterReducer, modelShowSelectFooterAction,
            configUserBackgroundAvatarReducer,
            configUserBackgroundAction, configUserAvatarAction,
            userInfoCopyModifyReducer, configUserCopyModifyEmptyAction, userInfoCopyModifyAction,
            genderPickerShowReducer, configUserInfoSaveAction
        } = this.props;

        return (
            <Container>
                {
                    genderPickerShowReducer ? <FooterPopComponent
                        listArr={  IS_GENDER }
                        select={ userInfoCopyModifyReducer.gender }
                        callbackFun={this.genderCallback}
                    /> : null
                }

                {
                    this.props.popShowReducer ? <LoadingModalComponent visible={true}/> : null
                }

                {
                    this.props.popWarningConfigUserInfoBackReducer ? <PopWarningComponent
                        clearCallback={ this.handleClearPopWarning }
                        determineCallback={  this.handleDeterminePopWarning }
                        text="你还没保存了, 你是要放弃吗？"
                        visible={true}/> : null
                }


                <ScrollView>
                    <MyInfoSetImgUpload
                        userInfoReducer={userInfoReducer}
                        modelShowSelectFooterReducer={ modelShowSelectFooterReducer }
                        modelShowSelectFooterAction={ modelShowSelectFooterAction }
                        configUserBackgroundAvatarReducer={configUserBackgroundAvatarReducer}
                        configUserBackgroundAction={ configUserBackgroundAction }
                        configUserAvatarAction={ configUserAvatarAction }
                        userInfoCopyModifyReducer={ userInfoCopyModifyReducer }
                        userInfoCopyModifyAction={ userInfoCopyModifyAction }
                        configUserInfoSaveAction={configUserInfoSaveAction}
                        configUserCopyModifyEmptyAction={ configUserCopyModifyEmptyAction }
                    />

                    <View style={ myInfoSetStyle.infoBlock }>
                        <View style={ myInfoSetStyle.infoLi }>
                            <Text style={ myInfoSetStyle.infoText }>昵称:</Text>
                            <TextInput
                                value={ userInfoCopyModifyReducer.nickname }
                                onChangeText={val => this.changeNickname(val)}
                                style={ myInfoSetStyle.infoIpt }
                                placeholder="设置昵称"
                            />
                        </View>
                        <View style={ myInfoSetStyle.infoLi }>
                            <Text style={ myInfoSetStyle.infoText }>性别:</Text>
                            <View style={ myInfoSetStyle.birthday }>
                                <TouchableOpacity onPress={ () => this.handlerGender() } >
                                    <Text style={ myInfoSetStyle.birthdayText }>
                                        {
                                            IS_GENDER.filter((val, index) => val.value === userInfoCopyModifyReducer.gender)[0].text
                                        }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={ myInfoSetStyle.infoLi }>
                            <Text style={ myInfoSetStyle.infoText }>生日:</Text>

                            <View style={ myInfoSetStyle.birthday }>
                                <TouchableOpacity onPress={ () => this.handleDateTimeShow() } >
                                    <Text style={ myInfoSetStyle.birthdayText }>
                                        { resolve.date.format(parseInt(userInfoCopyModifyReducer.birthday)).date }
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <DateTimePickerModal
                        isVisible={ this.props.dateTimePickerShowReducer }
                        mode="date"
                        headerTextIOS={"选择生日日期"}
                        cancelTextIOS={"取消"}
                        confirmTextIOS={"确定"}
                        onConfirm={ date => this.handleConfirm(date) }
                        onCancel={ () => this.hideDatePicker() }
                    />
                </ScrollView>
            </Container>
        );
    }

    componentWillUnmount() {

    }
}


export default connect(
    data => ({
        userInfoReducer: data.userInfoReducer,
        modelShowSelectFooterReducer: data.modelShowSelectFooterReducer,
        configUserBackgroundAvatarReducer: data.configUserBackgroundAvatarReducer,
        userInfoCopyModifyReducer: data.userInfoCopyModifyReducer,
        dateTimePickerShowReducer: data.dateTimePickerShowReducer,
        genderPickerShowReducer: data.genderPickerShowReducer,
        configUserInfoSaveReducer: data.configUserInfoSaveReducer,
        popShowReducer: data.popShowReducer,
        popWarningConfigUserInfoBackReducer: data.popWarningConfigUserInfoBackReducer
    }),
    {
        getUserInfoAction,
        modifyUserInfoAction, modelShowSelectFooterAction,
        configUserBackgroundAction, configUserAvatarAction,
        userInfoCopyModifyAction, configUserCopyModifyEmptyAction,
        dateTimePickerShowAction, genderPickerShowAction,
        configUserInfoSaveAction, configUserInfoNavNavigationAction,
        popWarningConfigUserInfoBackAction,
    }
)(MyInfoSetScreen);



