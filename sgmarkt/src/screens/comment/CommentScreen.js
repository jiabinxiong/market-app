import React from "react";
import {
    StyleSheet,
    View, Text, Image, Platform,
    ScrollView,TouchableOpacity, Dimensions, TextInput,
    KeyboardAvoidingView, FlatList } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';

import { commentStyle, commentScreenStyle } from "../../styles";

const commentTestArr = [
    {
        img: "http://192.168.1.5:4000/1.jpeg",
        name: "我那是读网友",
        comment: "ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。",
        childList: [
            {
                img: "http://192.168.1.5:4000/2.jpeg",
                name: "上面代码",
                comment: "为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值",
            }
        ]
    },
    {
        img: "http://192.168.1.5:4000/4.jpeg",
        name: "b我那是读网友b",
        comment: "被刻板印象所遗忘的女猎人们被刻板印象所遗忘的女猎人们被刻板印象所遗忘的女猎人们",
        childList: [
            {
                img: "http://192.168.1.5:4000/5.jpeg",
                name: "脑子里的声音是谁的？",
                comment: "穿一辈子白衬衫是种什么体验？答：引领时髦",
            },
            {
                img: "http://192.168.1.5:4000/6.jpeg",
                name: "第一位主要政党",
                comment: "从一百多年前美国女性争取投票权的时代开始，就形成了用白色象征女性团结与进步的传统。从那以来，几乎每",
            }
        ]
    },
    {
        img: "http://192.168.1.5:4000/4.jpeg",
        name: "better debugging experience.",
        comment: "You may also install the standalone version of React Developer Tools to inspect the React component hierarchy, their props, and state.",
        childList: [
            {
                img: "http://192.168.1.5:4000/5.jpeg",
                name: "React Native JS ",
                comment: "React Native JS code runs as a web worker inside this tab.",
            },
            {
                img: "http://192.168.1.5:4000/6.jpeg",
                name: "Status: Debugger ",
                comment: "Status: Debugger session #71308 active.",
            }
        ]
    },
    {
        img: "http://192.168.1.5:4000/4.jpeg",
        name: "This is probably my favorite",
        comment: "navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it fo",
        childList: [
            {
                img: "http://192.168.1.5:4000/5.jpeg",
                name: "completeCustomComponent",
                comment: "将此功能或React组件称为渲染每个图像的替代方法。必须返回一个React Element或Component，并且必须具有该组件的来源和样式才能显示适当的砌",
            },
            {
                img: "http://192.168.1.5:4000/6.jpeg",
                name: "customImageComponent ",
                comment: "只要组件遵循组件的标准界面，就可以使用自定义组件为图像进行渲染react-native Image。版本* 1.2.2更新。",
            }
        ]
    }
];

export default class CommentScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    _scrollToInput (reactNode: any) {
        // Add a 'scroll' ref to your ScrollView
        console.log(this.scroll);
        // this.scroll.props.scrollToFocusedInput(reactNode)
        // this.scroll.props.scrollToPosition(0, 0)
    }
    render() {

        return(
            <View style={{ flex: 1 }}>
               <KeyboardAwareScrollView
                   keyboardShouldPersistTaps="handled"
                   innerRef={ref => {
                       this.scroll = ref
                   }}
               >
                    <View style={ commentStyle.area }>
                        {
                            commentTestArr.map((data, index) => (
                                <View key={index}>
                                    <View style={ commentStyle.block } >
                                        <View style={ commentStyle.portrait }>
                                            <Image
                                                style={ commentStyle.portraitImg }
                                                source={{ uri: data.img }}/>
                                        </View>
                                        <View style={ commentStyle.cnt }>
                                            <View style={ commentStyle.name }>
                                                <Text style={ commentStyle.nameText }>{ data.name }</Text>
                                                <Text style={ commentStyle.nameTime }> 19-09-09 10:20</Text>
                                            </View>
                                            <View style={ commentStyle.info } >
                                                <Text style={ commentStyle.infoText }>
                                                    { data.comment }
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={ commentStyle.childerBlock }>
                                        {
                                            data.childList.map((childData, childIndex) => {
                                                return <View
                                                    style={[
                                                        commentStyle.block,
                                                        {
                                                            borderTopWidth: 0,
                                                            borderBottomWidth: data.childList.length-1 == childIndex ? 0 : 1
                                                        }
                                                    ] }
                                                    key={ childIndex }>
                                                    <View style={ commentStyle.portrait }>
                                                        <Image style={ commentStyle.portraitImg } source={{ uri: childData.img }}/>
                                                    </View>
                                                    <View style={ commentStyle.cnt }>
                                                        <View style={ commentStyle.name }>
                                                            <Text style={ commentStyle.nameText }>
                                                                { childData.name }

                                                            </Text>
                                                            <Text style={ commentStyle.nameTime }>20-05-23 20:24</Text>
                                                        </View>
                                                        <View style={ commentStyle.info } >
                                                            <Text style={ commentStyle.infoText }>
                                                                { childData.comment }
                                                            </Text>
                                                        </View>

                                                    </View>
                                                </View>
                                            })
                                        }
                                        <TextInput
                                            style={{  height: 50, width: "100%", backgroundColor: "red"}}
                                            onFocus={(event: Event) => {
                                                // `bind` the function if you're using ES6 classes
                                                this._scrollToInput()
                                                // this._scrollToInput(ReactNative.findNodeHandle(event.target))
                                            }}
                                        />
                                    </View>
                                </View>
                            ))
                        }

                    </View>
                </KeyboardAwareScrollView>


                <KeyboardAccessoryView
                    alwaysVisible={true} androidAdjustResize >
                    <View style={ commentScreenStyle.textInputView }>
                        <TextInput style={ commentScreenStyle.textInput } placeholder="email..."/>
                        <Button style={ commentScreenStyle.btn }>
                            <Text style={  commentScreenStyle.btnText }> 回复 </Text>
                        </Button>
                    </View>
                </KeyboardAccessoryView>
            </View>
        )
    }
}


