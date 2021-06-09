import React from 'react';
import {View, Text, Dimensions, ImageBackground, Alert, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import ViewShot, { captureRef } from "react-native-view-shot";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {imageFilterComponentStyle, publishSelectImgStyle} from '../../styles';
import ImagePicker from "react-native-image-crop-picker";
import { ImageFilter } from 'react-native-image-filter-kit';
import Image from 'react-native-scalable-image';
// import { Surface } from 'gl-react-native';
// import ImageFilters from 'react-native-gl-image-filters';

import ImageFilterComponent from '../../components/ImageFilter.component';

import { publishModifyTabModel } from '../../models';
import { PINWHEEL_ICON, CONTENT_CUT_ICON } from '../../constants/icon.constant';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import {
    publishSelectFilterAction,
    publishSelectedIndexImgAction, publishSelectedPickerImgAction, publishSelectedImgHowManyAction, publishModifyTabAction } from '../../actions';

import { publishSelectImgModifyStyle } from '../../styles';
import uploadService from '../../service/upload.service';





class PublishSelectImgModifyScreen extends React.Component {
    constructor(props) {
        super(props);
        this.viewShot = [];
    }
    componentDidMount() {

        let itemsArr = [];
        for( let i = 0; i < this.props.route.params.items.length; i++ ) {
            itemsArr.push({
                ...this.props.route.params.items[i],
                filterType: 'Normal'
            });
        }
        this.props.publishSelectedImgHowManyAction(itemsArr);
    }

    _renderItem = ({item, index}) => {

        return (
            // <ImageFilter
            //     style={{ flex: 1 }}
            //     config={{
            //         name: item.filterType,
            //         image: (
            //             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            //                 <ViewShot ref={ref => (this.viewShot[index] = ref)} style={{  }}>
            //                     <Image
            //                         key={index}
            //                         resizeMode={'contain'}
            //                         width={Dimensions.get('window').width} // height will be calculated automatically
            //                         source={{uri: item.url}}
            //                     />
            //                 </ViewShot>
            //             </View>
            //         )
            //     }}
            // />
            <ImageFilter
                style={{ flex:1, justifyContent: "center", alignItems: "center" }}
                config={{
                    name: item.filterType,
                    image: (

                        <Image
                            key={index}
                            style={{flex:1,width:null,height:null }} resizeMode={'contain'}
                            source={{
                                uri: item.url
                            }}
                        />

                    )
                }}
            />
        );
    }

    cropLast(type) {
        // if (!this.state.image) {
        //     return Alert.alert(
        //         'No image',
        //         'Before open cropping only, please select image'
        //     );
        // }
        if(type === 'sticker') {
            this.props.publishModifyTabAction({
                type: 'sticker'
            });
        } else if(type === 'filter') {
            this.props.publishModifyTabAction({
                type: 'filter'
            });
        } else if(type === 'cut') {
            this.props.publishModifyTabAction({
                type: 'cut'
            });

            captureRef(this.viewShot[this.props.publishSelectedIndexImgReducer], {
                format: "jpg"
            }).then(
                uri => {
                    ImagePicker.openCropper({
                        path: uri,
                        // width: 1000,
                        // height: 1000,
                    }).then((image) => {
                        console.log(image);
                        this.props.publishSelectedPickerImgAction({
                            index: this.props.publishSelectedIndexImgReducer,
                            sourceUrl: this.props.publishSelectedImgHowManyReducer[this.props.publishSelectedIndexImgReducer].url,
                            url: image.path
                        });
                    }).catch((e) => {

                    });
                },
                error => console.error("Oops, snapshot failed", error)
            );


        }

    }

    handleSnapToItem(index) {
        this.props.publishSelectedIndexImgAction(index);
    }

    handleSave() {
        captureRef(this.viewShot[this.props.publishSelectedIndexImgReducer], {
            format: "jpg"
        }).then(
            uri => {
                let filename = uri.substring(uri.lastIndexOf('/') + 1, uri.length);
                let file = {
                    uri: uri,
                    // type: 'multipart/form-data',
                    name: filename,
                    // size: image.size
                };

                const uploadData = new FormData();
                uploadData.append('sgmarket', file);

                uploadService.img(uploadData).then(ret => {
                    console.log(ret);

                });
            },
            error => console.error("Oops, snapshot failed", error)
        );

    }

    render() {
        const { publishModifyTabReducer, publishSelectedImgHowManyReducer } = this.props;

        return (
            <View style={ publishSelectImgModifyStyle.cnt }>

                <Carousel
                    data={ [...this.props.publishSelectedImgHowManyReducer] }
                    renderItem={this._renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    firstItem={ this.props.publishSelectedIndexImgReducer }
                    onSnapToItem={(index) => this.handleSnapToItem(index)}
                />
                {/*<Button onPress={ () => this.handleSave() } title="xxx"/>*/}
                <ImageFilterComponent
                    publishSelectFilterAction={ this.props.publishSelectFilterAction }
                    publishSelectedIndexImgReducer={ this.props.publishSelectedIndexImgReducer }
                    publishSelectedImgHowManyReducer = {this.props.publishSelectedImgHowManyReducer}
                />
                <View style={ publishSelectImgModifyStyle.footer }>
                    {
                        publishModifyTabModel.map((data, index) => {
                            return <TouchableOpacity
                                key={data.icon}
                                activeOpacity={1}
                                onPress={ () => this.cropLast(data.type) }
                                style={ publishSelectImgModifyStyle.footerBlock }>
                                <IconMaterialCommunityIcons
                                    style={
                                        [
                                            publishSelectImgModifyStyle.footerIcon,
                                            {
                                                color: data.type === publishModifyTabReducer.type ? '#009387' : '#000'
                                            }
                                        ]
                                    }
                                    name={data.icon}
                                />
                                <Text style={
                                    [
                                        publishSelectImgModifyStyle.footerBlockText,
                                        {
                                            color: data.type === publishModifyTabReducer.type ? '#009387' : '#000'
                                        }
                                    ]
                                }>
                                    { data.text }
                                </Text>
                            </TouchableOpacity>
                        })
                    }
                </View>


            </View>
        );
    }
    componentWillUnmount() {
        this.props.publishSelectedImgHowManyAction([]);
    }
}

export default connect(
    data => ({
        publishSelectedIndexImgReducer: data.publishSelectedIndexImgReducer,
        publishSelectedImgHowManyReducer: data.publishSelectedImgHowManyReducer,
        publishModifyTabReducer: data.publishModifyTabReducer,
    }),
    {
        publishSelectFilterAction,
        publishSelectedIndexImgAction, publishSelectedPickerImgAction, publishSelectedImgHowManyAction, publishModifyTabAction
    }
)(PublishSelectImgModifyScreen);

