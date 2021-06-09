import React from "react";
import {
    View, Text, Image, FlatList, TouchableOpacity,
    StyleSheet,
    Dimensions, ScrollView, TextInput,
} from 'react-native';
import { Button } from 'native-base';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import { HEART_ICON, EDIT_ICON } from "../../constants/icon.constant";
import { TEST_HTTP } from "../../constants/http.constant";
import {commentScreenStyle, commentStyle, scrollBottomSheetStyle} from '../../styles';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
//
const commentTestArr = [
    {
        id: 0,
        img: TEST_HTTP + "/1-11.jpg",
        name: "小熊",
        imgs:['8', '2', '10'],
        cnt: "4月27日下午两点左右到故宫博物院参观。玩了两个多小时。看了几个大殿。这次是第二次来这里。第一次来是1988年。故宫博物院早8:30开门下午五点闭馆。我们玩的很开心，因为带着我母亲👩。有一点。闭馆前十五分钟，已经洗手间不让用了，边上的门也上锁🔒不让人往回走了。我带着老母亲实在不方便。只能绕道走到东华"
    },
    {
        id: 1,
        img: TEST_HTTP + "/1-12.jpg",
        name: "小高",
        imgs:['7', '5', '6'],
        cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    },
    {
        id: 2,
        img: TEST_HTTP + "/1-13.jpg",
        name: "小高高",
        imgs:['9', '8', '3'],
        cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    },
    // {
    //     id: 3,
    //     img: TEST_HTTP + "/1-13.jpg",
    //     name: "小高高",
    //     imgs:['9', '8', '3'],
    //     cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    // },
    // {
    //     id: 4,
    //     img: TEST_HTTP + "/1-12.jpg",
    //     name: "小高",
    //     imgs:['7', '5', '6'],
    //     cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    // },
    // {
    //     id: 5,
    //     img: TEST_HTTP + "/1-13.jpg",
    //     name: "小高高",
    //     imgs:['9', '8', '3'],
    //     cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    // },
    // {
    //     id: 6,
    //     img: TEST_HTTP + "/1-13.jpg",
    //     name: "小高高",
    //     imgs:['9', '8', '3'],
    //     cnt: "我是一个去过很多次故宫的历史爱好者，发现了一条不挤的路线：上午门城墙→经过东华门→神武门城墙下来。【这条路线推荐给去过故宫的朋友们】。"
    // }
];


import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

const windowHeight = Dimensions.get('window').height;

export default class MarktDetailComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerAnimated: new Animated.Value(0),
            cntShow: false,
            commentIpt: false
        }

        this.bottomSheetRef = React.createRef(null);
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         cntShow: true
        //     })
        // }, 200)
    }

    handlerEdit() {
        this.setState({
            commentIpt: true
        })
        this.bottomSheetRef.current?.snapTo(0);
    }
    handleSettle() {
        this.setState({
            commentIpt: false
        })
    }
    imgStyle(index) {
        if (index == 0) {
            return {borderTopLeftRadius: 10, borderBottomLeftRadius: 10};
        } else if (index == 1) {
            return {marginLeft: 3, marginRight: 3};
        } else if (index == 2) {
            return {borderTopRightRadius: 10, borderBottomRightRadius: 10};
        }
    }
    imgArr(data) {
        let newImgArr = [];
        for(let i = 0; i < data.length; i++) {
            newImgArr.push({
                url: `${TEST_HTTP}/coment-${data[i]}.jpeg`,
            })
        }
        return newImgArr;
    }
    render() {
        return (
            <View>
                <FlatList
                    data={commentTestArr}
                    keyExtractor={(item) => item.id}
                    renderItem={(data, index) => {
                        return (
                            <View style={{ marginLeft: 15, marginRight: 15 }}>
                                <View style={ commentStyle.block } >
                                    <View style={ commentStyle.cnt }>
                                        <View style={ commentStyle.portrait }>
                                            <Image
                                                style={ commentStyle.portraitImg }
                                                source={{ uri: data.item.img }}/>

                                        </View>
                                        <View style={ commentStyle.name }>
                                            <Text style={ commentStyle.nameText }>{data.item.name}</Text>
                                            <Text style={ commentStyle.nameTime }>
                                                2010-051
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={ commentStyle.info } >
                                        <Text style={ commentStyle.infoText } numberOfLines={2}>
                                            { data.item.cnt }
                                        </Text>
                                    </View>
                                    <View style={ commentStyle.imgBlock }>
                                        <View style={{ flexDirection: "row", }}>
                                            {
                                                data.item.imgs.map((dataImg, indexImg) => {
                                                    return <TouchableOpacity
                                                            onPress={
                                                                () => {
                                                                    this.props.navigation.push(
                                                                        "ImgShow",
                                                                        {
                                                                            indexImg,
                                                                            imgData: this.imgArr(data.item.imgs)
                                                                        }
                                                                    )
                                                                }
                                                            }>
                                                        <Image
                                                            style={ [
                                                                this.imgStyle(indexImg),
                                                                commentStyle.img
                                                            ]}
                                                            source={{
                                                                uri: `${TEST_HTTP}/coment-${dataImg}.jpeg`
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                })
                                            }
                                        </View>
                                        <View style={ commentStyle.imgNumber }>
                                            <Text style={ commentStyle.imgNumberText }>
                                                100图
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={ commentStyle.b } >
                                        <View style={ commentStyle.bl }>
                                            <Text style={ commentStyle.blText }>2天前发布</Text>
                                        </View>
                                        <View style={ commentStyle.br }>
                                            <View style={ commentStyle.likeBtn }>
                                                <IconMaterialCommunityIcons
                                                    style={ commentStyle.likeBtnIcon}
                                                    name={HEART_ICON}/>
                                                <Text style={ commentStyle.brText } >20</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => this.handlerEdit()}
                                                style={ commentStyle.commentBtn }>
                                                <IconMaterialCommunityIcons
                                                    style={ commentStyle.commentBtnIcon}
                                                    name={EDIT_ICON}/>
                                                <Text style={ commentStyle.brText } >20</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                >
                </FlatList>


                <ScrollBottomSheet
                    ref={this.bottomSheetRef}
                    componentType="FlatList"
                    snapPoints={[196, '100%', windowHeight - 128]}
                    initialSnapIndex={2}
                    renderHandle={() => (
                        <View style={scrollBottomSheetStyle.header}>
                            <View style={scrollBottomSheetStyle.panelHandle} />
                        </View>
                    )}
                    data={commentTestArr}
                    keyExtractor={i => i.id}
                    enableOverScroll={() => {

                    }}
                    onSettle={index => {
                        if(index == 2) {
                            this.handleSettle();
                        }
                    }}
                    renderItem={({ item }) => {
                        return <View >
                            <View style={ commentStyle.block } >
                                <View style={ commentStyle.cnt }>
                                    <View style={ commentStyle.portrait }>
                                        <Image
                                            style={ commentStyle.portraitImg }
                                            source={{ uri: item.img }}/>
                                    </View>
                                    <View style={ commentStyle.name }>
                                        <Text style={ commentStyle.nameText }>{item.name}</Text>
                                        <Text style={ commentStyle.nameTime }>
                                            2010-051
                                        </Text>
                                    </View>
                                </View>
                                <View style={ commentStyle.info } >
                                    <Text style={ commentStyle.infoText } numberOfLines={2}>
                                        {item.cnt}
                                    </Text>
                                </View>

                            </View>
                        </View>
                    }}
                    contentContainerStyle={scrollBottomSheetStyle.contentContainerStyle}
                />

                {
                    this.state.commentIpt ? <KeyboardAccessoryView
                        alwaysVisible={true} androidAdjustResize >
                        <View style={ commentScreenStyle.textInputView }>
                            <TextInput style={ commentScreenStyle.textInput } placeholder="email..."/>
                            <Button style={ commentScreenStyle.btn }>
                                <Text style={  commentScreenStyle.btnText }> 回复 </Text>
                            </Button>
                        </View>
                    </KeyboardAccessoryView> : null
                }
            </View>
        );
    }

}

