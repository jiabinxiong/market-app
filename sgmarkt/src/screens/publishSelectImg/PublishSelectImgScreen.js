import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import CameraRoll from '@react-native-community/cameraroll';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImageViewer from 'react-native-image-zoom-viewer';
import ImagePicker from 'react-native-image-crop-picker';

import ImgZoomScreen from '../../components/ImageViewer.component';

import { CAMERA_ICON } from '../../constants/icon.constant';

import { publishSelectImgAction, publishSelectedImgAction, publishClearSelectedImgAction, publishSelectedImgHowManyAction } from '../../actions'

import { publishSelectImgStyle } from '../../styles';
import ImgShowScreen from '../../components/ImageViewer.component';

class PublishSelectImgScreen extends React.Component {
    componentDidMount() {
        CameraRoll.getPhotos({
            first: 2,
            assetType: 'Photos',
        })
            .then(r => {
                let newArr = [];

                r.edges.forEach((v, i, arr) => {
                    newArr.push({
                        index: i,
                        select: false,
                        height: v.node.image.height,
                        width: v.node.image.width,
                        url: v.node.image.uri,
                        size: v.node.image.fileSize
                    })
                })

                this.props.publishSelectImgAction(newArr);
            })
            .catch((err) => {
                //Error Loading Images
            });
    }

    isInteger(number) {
        return number%3 === 0
    }

    async handleSelect(v, index) {
        await this.props.publishSelectedImgAction(v);

        // // this.props.publishSelectedImgHowManyAction(this.props.publishSelectImgReducer.filter((v, i) => v.select === true));
        // await this.props.publishSelectedImgHowManyAction({
        //     data: this.props.publishSelectImgReducer,
        //     v: v,
        //     index: index
        // });
    }

    handleCamera() {
        ImagePicker.openCamera({
            cropping: false,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType: 'photo',
        })
            .then((image) => {
                this.props.publishSelectImgAction([{
                    index: this.props.publishSelectImgReducer.length,
                    select: false,
                    height: image.height,
                    width: image.width,
                    url: image.path
                }]);
            })
            .catch((e) => alert(e));
    }

    render() {
        return (
            <ScrollView>

                <View style={ publishSelectImgStyle.imgCnt }>
                    <View style={ [ publishSelectImgStyle.imgBlock, publishSelectImgStyle.cameraBlock ]  }>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={ () => this.handleCamera() }
                            style={{}}>
                            <IconMaterialCommunityIcons
                                style={ publishSelectImgStyle.cameraIcon }
                                name={ CAMERA_ICON }
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        this.props.publishSelectImgReducer.map((p, index) => (
                            <View key={index} style={ publishSelectImgStyle.imgBlock  }>
                                <TouchableOpacity
                                    onPress={ () => this.handleSelect(p, index) }
                                    activeOpacity={1}
                                    style={[ publishSelectImgStyle.selectBlock ]}>
                                    <View style={ [ publishSelectImgStyle.selectBtn, { backgroundColor:  p.select ? "#3484ff" : "#000" } ] } >

                                    </View>
                                </TouchableOpacity>

                                <Image
                                    key={index}
                                    resizeMode="cover"
                                    style={
                                        [this.isInteger(index + 1) ? publishSelectImgStyle.imgBlockPaddingLR : null , publishSelectImgStyle.img]
                                    }
                                    source={{ uri: p.url  }}
                                />

                            </View>
                        ))
                    }
                </View>


            </ScrollView>
        );
    }
}

export default connect(
    data => ({
        publishSelectImgReducer: data.publishSelectImgReducer,
        publishSelectedIndexImgReducer: data.publishSelectedIndexImgReducer,
        publishSelectedImgHowManyReducer: data.publishSelectedImgHowManyReducer
    }),
    {
        publishSelectImgAction , publishSelectedImgAction, publishClearSelectedImgAction, publishSelectedImgHowManyAction
    }
)(PublishSelectImgScreen);
