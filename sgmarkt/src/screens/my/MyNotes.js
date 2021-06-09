import React from "react";
import {View, Text, Image} from 'react-native';
import {HEART_ICON, LOCATION_ICON, TEST_HTTP, VIDEO_TYPE_ICON} from '../../constants';
import {masonryListStyle} from '../../styles';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from "react-native-linear-gradient";
import MasonryList from 'react-native-masonry-list';


const testImgArr = [
    {
        uri: `${TEST_HTTP}11.jpeg`,
        type: "img",
        text: "瀑布流定义：多列同宽不。"
    },
    {
        uri: `${TEST_HTTP}12.jpeg`,
        type: "video",
        text: "可是在React Native里面若是没有进行自 ..."
    },
    {
        uri: `${TEST_HTTP}13.jpeg`,
        type: "video",
        text: "那么进入主题。有一种方式是"
    },
    {
        uri: `${TEST_HTTP}1.jpeg`,
        type: "img",
        text: "瀑布流定义：多列同宽不同高。 "
    },
    {
        uri: `${TEST_HTTP}2.jpeg`,
        type: "video",
        text: "参差不起的列表页对于视觉效果确实有很好的体验"
    },
    {
        uri: `${TEST_HTTP}3.jpeg`,
        type: "video",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}4.jpeg`,
        type: "video",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}5.jpeg`,
        type: "img",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}6.jpeg`,
        type: "video",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}7.jpeg`,
        type: "img",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}8.jpeg`,
        type: "video",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}1-1.jpg`,
        type: "img",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    },
    {
        uri: `${TEST_HTTP}1-2.jpg`,
        type: "video",
        text: "瀑布流定义：多列同宽不同高。 排除掉使用WebView用网页实现。"
    }
];


export default class MyNotes extends React.Component {
    render() {
        return (
            <View>
                <MasonryList
                    images={ testImgArr }
                    columns={2}
                    spacing={3}
                    sorted={true}
                    scrollEnabled={ false }

                    imageContainerStyle={masonryListStyle.imageContainer}
                    onPressImage= {(item, index) => {
                        this.props.navigation.push("MarktDetail", {url: item.uri, item });
                    }}
                    renderIndividualHeader={data => {
                        return (
                            <View style={ masonryListStyle.renderIndividualHeader }>
                                {
                                    data.type === "video" ? <View style={ masonryListStyle.renderIndividualHeaderT(data) }>
                                        <IconMaterialCommunityIcons
                                            style={ masonryListStyle.userVideoIcon }
                                            name={ VIDEO_TYPE_ICON }
                                        />
                                    </View> : null
                                }
                                <LinearGradient
                                    style={ masonryListStyle.renderIndividualHeaderB(data) }
                                    colors={['rgba(0,0,0, 0)', 'rgba(0,0,0, 0.4)']}>
                                    <View>
                                        <IconMaterialCommunityIcons
                                            style={ masonryListStyle.userLoctionIcon }
                                            name={ LOCATION_ICON }
                                        />
                                    </View>

                                </LinearGradient>
                            </View>

                        );
                    }}
                    renderIndividualFooter={(data) => {
                        return (
                            <View
                                style={masonryListStyle.renderIndividualFooter(data)}
                            >
                                <Text style={{ fontSize: 12, lineHeight: 16, color: "#3c3c3c"} }>
                                    { data.text }
                                </Text>
                                <View style={ masonryListStyle.user }>
                                    <View style={ masonryListStyle.userInfo }>
                                        <Image
                                            style={ masonryListStyle.userPortrait }
                                            source={{ uri: `${data.uri}` }}
                                        />
                                        <Text style={ masonryListStyle.userName }>33</Text>
                                    </View>
                                    <View style={ masonryListStyle.userLike }>
                                        <IconMaterialCommunityIcons
                                            style={ masonryListStyle.userLikeIcon }
                                            name={ HEART_ICON }
                                        />
                                        <Text style={ masonryListStyle.userLinkNumber }>10</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}
