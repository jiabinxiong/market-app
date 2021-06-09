import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { ImageFilter } from 'react-native-image-filter-kit';

import uploadService from '../service/upload.service';
import { DEFAULT_IMAGE } from '../constants/http.constant';

import { filterModel } from '../models';

import { imageFilterComponentStyle } from '../styles';

export default class ImageFilterComponent extends React.Component {
    handleImageFilter(type) {
        // console.log(this.props.publishSelectedImgHowManyReducer);
        this.props.publishSelectFilterAction({
            filterType: type,
            index: this.props.publishSelectedIndexImgReducer,
            url: this.props.publishSelectedImgHowManyReducer[this.props.publishSelectedIndexImgReducer].url
        });
    }
    render() {
        const { publishSelectedImgHowManyReducer, publishSelectedIndexImgReducer } = this.props;

        return (
            <View style={ imageFilterComponentStyle.cnt }>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row" }}>
                        {
                            filterModel.map((data, index) => (
                                <View key={ data.type }  style={ imageFilterComponentStyle.block }>
                                    <TouchableOpacity
                                        onPress={() => this.handleImageFilter(data.type)}
                                        style={ imageFilterComponentStyle.liBlock }
                                        activeOpacity={1} >

                                        <ImageFilter
                                            style={{ flex:1 }}
                                            config={{
                                                name: data.type,
                                                image: (
                                                    <Image
                                                        style={  imageFilterComponentStyle.blockImg } resizeMode={'contain'}
                                                        source={data.default}
                                                    />
                                                )
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={ imageFilterComponentStyle.text }>{ data.cn }</Text>
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>


            </View>
        );
    }
}
