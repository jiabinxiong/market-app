import React from 'react';
import {Image, ImageBackground, Modal, Text, TouchableOpacity, View} from 'react-native';
import {myInfoSetStyle} from '../../styles';
import ImagePicker from "react-native-image-crop-picker";

import uploadService from '../../service/upload.service';
import { SelectPopFooterComponent } from '../../components';
import { CROP_PICKER, IS_CONFIG_BACKGROUND_AVATAR } from '../../constants';



export default class MyInfoSetImgUpload extends React.Component {
    pickSingle(cropit, circular = false, imgType) {
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            sortOrder: 'none',
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
            cropperStatusBarColor: 'white',
            cropperToolbarColor: 'white',
            cropperActiveWidgetColor: 'white',
            cropperToolbarWidgetColor: '#3498DB',
        })
            .then((image) => {
                let path = image.path;
                let filename = path.substring(path.lastIndexOf('/') + 1, path.length);
                let file = {
                    uri: image.path,
                    // type: 'multipart/form-data',
                    name: filename,
                    size: image.size
                };

                const uploadData = new FormData();
                uploadData.append('sgmarket', file);

                uploadService.img(uploadData).then(ret => {
                    if(ret.data.code === 0) {
                        this.backgroundAvatarFun(ret.data.url);
                    }
                });
            })
            .catch((e) => {

            });
    }

    pickSingleWithCamera (cropit, circular, mediaType = 'photo') {
        ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            sortOrder: 'none',
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
            cropperStatusBarColor: 'white',
            cropperToolbarColor: 'white',
            cropperActiveWidgetColor: 'white',
            cropperToolbarWidgetColor: '#3498DB',
        })
            .then((image) => {
                let path = image.path;
                let filename = path.substring(path.lastIndexOf('/') + 1, path.length);
                let file = {
                    uri: image.path,
                    // type: 'multipart/form-data',
                    name: filename,
                    size: image.size
                };

                const uploadData = new FormData();
                uploadData.append('sgmarket', file);

                uploadService.img(uploadData).then(ret => {
                    if(ret.data.code === 0) {
                        this.backgroundAvatarFun(ret.data.url);
                    }
                });

            })
            .catch((e) => {

            });
    }

    isSaveBtn() {
        if(JSON.stringify(this.props.userInfoCopyModifyReducer) === JSON.stringify(this.props.userInfoReducer)) {
            this.props.configUserInfoSaveAction(false);
        } else {
            this.props.configUserInfoSaveAction(true);
        }
    }

    async backgroundAvatarFun(url) {
        if(this.props.configUserBackgroundAvatarReducer.type === 'background') {
            console.log('aaa');
            await this.props.userInfoCopyModifyAction({
                background: url
            });
            await this.isSaveBtn();
        } else if ( this.props.configUserBackgroundAvatarReducer.type=== 'avatar' ) {
            console.log('bbbb');
            await this.props.userInfoCopyModifyAction({
                avatar: url
            });

            await this.isSaveBtn();
        }
    }

    handleBackground(v) {
        if( v === IS_CONFIG_BACKGROUND_AVATAR[0].text ) {
            this.props.configUserBackgroundAction({
                type: 'background'
            });
        } else if ( v === IS_CONFIG_BACKGROUND_AVATAR[1].text ) {
            this.props.configUserAvatarAction({
                type: 'avatar'
            });
        }
        this.props.modelShowSelectFooterAction(true);
    }
    handleImgSelectCallback = (v) => {
        const { configUserBackgroundAvatarReducer } = this.props;
        if(v.value === 0) {
            this.pickerImgTime = setTimeout(() => {
                if(configUserBackgroundAvatarReducer.type === 'background') {
                    this.pickSingleWithCamera(false, false);
                } else if ( configUserBackgroundAvatarReducer.type=== 'avatar' ) {
                    this.pickSingleWithCamera(true, true);
                }
            }, 50)
        } else if (v.value === 1) {
            this.pickerImgTime = setTimeout(() => {
                if(configUserBackgroundAvatarReducer.type === 'background') {
                    this.pickSingle(false, false, );
                } else if ( configUserBackgroundAvatarReducer.type === 'avatar' ) {
                    this.pickSingle(true, true);
                }

            }, 50)
        }

        this.props.modelShowSelectFooterAction(false)
    }
    render() {
        const {
            modelShowSelectFooterReducer, modelShowSelectFooterAction,
            userInfoCopyModifyReducer, configUserCopyModifyEmptyAction, userInfoCopyModifyAction,
            configUserBackgroundAvatarReducer
        } = this.props;
        return (
            <View>
                {
                    modelShowSelectFooterReducer ? <SelectPopFooterComponent
                        listArr={CROP_PICKER.filter((val, index) => val.value !== 2)}
                        callbackFun={this.handleImgSelectCallback}
                    /> : null
                }

                <ImageBackground
                    blurRadius={10}
                    style={ myInfoSetStyle.backgroundBlock }
                    source={{
                        uri: userInfoCopyModifyReducer.background
                    }}
                >
                    <View style={ myInfoSetStyle.avatar }>
                        <TouchableOpacity onPress={ () => this.handleBackground('avatar') }>
                            <Image
                                style={ myInfoSetStyle.avatarImg }
                                source={{
                                    uri: userInfoCopyModifyReducer.avatar
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={ myInfoSetStyle.modifyBackground }>
                        <TouchableOpacity onPress={ () => this.handleBackground('background') }>
                            <Text style={ myInfoSetStyle.modifyBackgroundText }>设置背景</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        );
    }

    componentWillUnmount() {
        clearTimeout(this.pickerImgTime);
    }
}
