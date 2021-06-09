import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { Comment }  from "../../components"
import { marktDetailStyle, commenTImgBTextStyle, commenTTextAreaStyle, commentStyle } from "../../styles";

const marktInfoStyle = {
    lineHeight: {
        lineHeight: 20
    },
    marginTB: {
        marginTob: 10,
        marginBottom: 10
    }
};

const commentTestArr = [
    {
        img: "http://192.168.1.4:4000/1.jpeg",
        name: "我那是读网友",
        comment: "ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。",
        childList: [
            {
                img: "http://192.168.1.4:4000/2.jpeg",
                name: "上面代码检查函数",
                comment: "为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值",
            }
        ]
    },
    {
        img: "http://192.168.1.4:4000/4.jpeg",
        name: "b我那是读网友b",
        comment: "被刻板印象所遗忘的女猎人们被刻板印象所遗忘的女猎人们被刻板印象所遗忘的女猎人们",
        childList: [
            {
                img: "http://192.168.1.4:4000/5.jpeg",
                name: "脑子里的声音是谁的？",
                comment: "穿一辈子白衬衫是种什么体验？答：引领时髦",
            },
            {
                img: "http://192.168.1.4:4000/6.jpeg",
                name: "第一位主要政党",
                comment: "从一百多年前美国女性争取投票权的时代开始，就形成了用白色象征女性团结与进步的传统。从那以来，几乎每",
            }
        ]
    }
];

const marktInfoArrTest = [
    {name: "1", title: "三源里菜市场"},{name: "2", title: "北京王府井阳光菜市场"},
    {name: "3", title: "新发地蔬菜市场"},{name: "4", title: "新民菜市场"},{name: "5", title: "北京大洋路农副产品市场"},
    {name: "6", title: "红莲菜市场"},{name: "6", title: "龙锦菜市场"},
    {name: "8", title: "东潞苑农贸市场"},{name: "9", title: "三源里菜市场"},{name: "10", title: "三源里菜市场"}
];

export default class MarktInfo extends React.Component {

    render() {
        const {
            tImgBTextBlock,
            tImgBTextImg,
            tImgBTextInfo,
            tImgBTextInfoTitle,
            tImgBTextCnt } = commenTImgBTextStyle;
        const { tTextArea, tTextTopArea, tTextTopLArea, tTextTopRMoreArea, tTextTopRArea, tTextTopLTArea, tTextBottomInf } = commenTTextAreaStyle;
        const { marktBlockBlock, commenBlockBlock, traffic, trafficBlock, trafficBlockTitle } = marktDetailStyle;
        return (
            <View>
                <View style={[ tTextArea, commenBlockBlock ]}>
                    <View style={ tTextTopArea }>
                        <View style={ tTextTopLArea }>
                            <Text style={ tTextTopLTArea }>店铺</Text>
                        </View>

                        <View style={ tTextTopRArea }>
                            <TouchableOpacity onPress={ () => this.props.props.navigation.push("ShopList") }>
                                <Text style={ tTextTopRMoreArea }>100个店铺</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={ tTextBottomInf }>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={ tImgBTextCnt }>
                                {
                                    marktInfoArrTest.map((data, index) => (
                                        <TouchableOpacity
                                            key={ index }
                                            onPress={ () => this.props.props.navigation.push("Shop", {img: `http://192.168.1.4:4000/${data.name}.jpeg` }) }>
                                            <View style={ tImgBTextBlock } >
                                                <Image
                                                    style={ tImgBTextImg }
                                                    source={{
                                                        uri: `http://192.168.1.4:4000/${data.name}.jpeg`
                                                }}/>
                                                <View style={ tImgBTextInfo }>
                                                    <Text style={ tImgBTextInfoTitle }>Explicitly specifying the height</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={[ tTextArea, commenBlockBlock ]}>
                    <View style={ tTextTopArea }>
                        <View style={ tTextTopLArea }>
                            <Text style={ tTextTopLTArea }>评论</Text>
                        </View>
                        <View style={ tTextTopRArea }>
                            <TouchableOpacity onPress={ () => this.props.props.navigation.push("Comment") }>
                                <Text style={ tTextTopRMoreArea }>111条评论</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ tTextBottomInf }>
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
                                                    <Text style={ commentStyle.nameTime }>2010-05 10:20:24</Text>
                                                </View>
                                                <View style={ commentStyle.info } >
                                                    <Text style={ commentStyle.infoText }>
                                                        { data.comment } a
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
                                                                    { data.childList.length }
                                                                    { childIndex }
                                                                </Text>
                                                                <Text style={ commentStyle.nameTime }>2010-05-23 20:24</Text>
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
                                        </View>
                                    </View>
                                ))
                            }

                        </View>
                    </View>
                </View>


                <View style={ traffic } >
                    <View style={ trafficBlock }>
                        <Text style={ trafficBlockTitle }>交通</Text>
                        <View>
                            <View>
                                <View style={ marktInfoStyle.marginTB }>
                                    <Text  style={ marktInfoStyle.lineHeight }>公交: 333,222,1111,44,564,65</Text>
                                    <Text style={ marktInfoStyle.lineHeight }>地铁:</Text>
                                    <Text style={ marktInfoStyle.lineHeight }>乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。</Text>
                                    <Text>tips:</Text>
                                    <Text style={ marktInfoStyle.lineHeight }>学生票包含，大中小学生，除去成人教育、研究生。</Text>
                                    <Text style={ marktInfoStyle.lineHeight }>故宫所有人需凭身份证入园。</Text>
                                    <Text style={ marktInfoStyle.lineHeight }>故宫门票全部在官网提前十天预售，现场已不设购票窗口，但可微信支付入馆，每天入馆人数与网络售票共享。</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View >
                        <View  style={ marktInfoStyle.marginTB }>
                            <Text>开放时间</Text>
                        </View>
                        <View >
                            <View>
                                <Text  style={ marktInfoStyle.lineHeight }>08:30-16:30；停止售票时间:15:30；停止入场时间:15:40 (11月01日-次年03月31日 周二-周日)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
