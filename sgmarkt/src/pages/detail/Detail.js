import React from "react";
import { View, Text, Image, StyleSheet, Linking,
     ImageBackground, ScrollView, 
     TouchableWithoutFeedback,
     Animated,
     TextInput,
     TouchableHighlight,
     TouchableOpacity } from "react-native";
import { Container,  Tab, Tabs, TabHeading  } from 'native-base';
import Swiper from "react-native-swiper";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { marktDetailStyle } from "../../styles";
import MarktInfo from "./MarktInfo";
import DetailMerchant from "./DetailMerchant";
import { Comment }  from "../../components"

const styles = StyleSheet.create({
  container: {      
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

const marktInfoArr = [
    {
        name: "市场简介",
        compoent: MarktInfo
    },
    {
        name: "市场商户",
        compoent: DetailMerchant
    },
    {
        name: "评论",
        compoent: Comment
    }
];

export default class MarktDetail extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            numberOfLinesVal: new Animated.Value(3),
            textHeight: new Animated.Value(40)
        };      
    }

    handleMaktDetailInfo() {

        let targetLinesVal = 30;

        if( this.state.numberOfLinesVal._value === 30) {
            targetLinesVal = 3
        }
        Animated.timing(
            this.state.numberOfLinesVal,
            {
                toValue: targetLinesVal,
                duration: 200,
                useNativeDriver: false
            }
        ).start();

    }

    render() {
        const { navigation } = this.props;
        // <Animated.Text style={{ lineHeight: 20, height:  }} numberOfLines={this.state.numberOfLinesVal}>
        return(
            <Container style={{ backgroundColor: "#f5f5f5" }} >                     
                <ScrollView>
                    
                    <View style={ { height: 270 } }>
                        <Swiper>                        
                            <View style={styles.container}>
                                <ImageBackground source={{
                                    uri: "http://192.168.1.5:4000/timg.jpeg"
                                }} style={styles.image}>
                                    
                                </ImageBackground>
                            </View>                         
                        </Swiper>
                    </View>

                    <View style={{ marginTop: 20, height: 40, backgroundColor: "red" }}>
                        <TextInput style={{ height: 40, backgroundColor: "#ccc", }} placeholder="输入批发市场"/>
                    </View> 
                
                    <View style={ marktDetailStyle.infoUl }>
                        <View style={{  paddingTop: 10 }}>
                            <TouchableHighlight underlayColor="#fff" onPress={() => this.handleMaktDetailInfo()}>
                                <Animated.Text style={{ lineHeight: 20  }} numberOfLines={this.state.numberOfLinesVal}>
                                    三源里菜市场位于北京市朝阳区顺源里，隶属于左家庄社区经济管理中心。市场始建于1992年10月，营业面积
                                    1560平方米，现有摊位139个。主要经营：蔬菜、水果、鲜肉、水产品、副食调料、粮油、面食茶叶、百货及日杂等。
                                    该市场为北京市标准化达标社区菜市场，是工商管理局评定的“首都文明市场”、2003年被评为“朝阳区食品安全示范
                                    市场”。三源里菜市场现已成为新源里、三源里、顺源里社区1万余户3万多居民及周边的昆仑饭店、长城饭店、京城
                                    大厦、幸福大厦、亮马河大厦等饭店、餐厅和百余个社会单位主要的农副产品购物渠道。外国使馆、饭店和涉外企业的
                                    外宾也经常光顾该市场，形成了辐射方圆近2平方公里的本地区必不可少的农副产品市场，极大的满足了附近居民、社会单
                                    位及周围外国友人的日常生活需求。
                                </Animated.Text>       
                            </TouchableHighlight>
                            
                                                 
                        </View>
                        <View style={ marktDetailStyle.liBlock }> 
                            <View style={ marktDetailStyle.infoLi }>
                                <View style={ marktDetailStyle.infoLiCnt }>
                                    <IconMaterialCommunityIcons      
                                        style={ marktDetailStyle.infoLiCntIcon }                      
                                        name="phone"                                         
                                        color='#cccccc'/>
                                    <Text style={ marktDetailStyle.infoLiText }>010-85007938</Text>
                                </View>
                            </View>
                            <View style={ marktDetailStyle.infoLi }>
                                <View style={ marktDetailStyle.infoLiCnt }>
                                    <IconMaterialCommunityIcons
                                        style={ marktDetailStyle.infoLiCntIcon }    
                                        name="earth" 
                                        size={ 22 } 
                                        color='#cccccc'/>
                                    <Text style={ marktDetailStyle.infoLiText }>
                                        http://www.sanyuanlimarket.com
                                    </Text>
                                </View>
                            </View>
                            <View style={ [ marktDetailStyle.infoLi, { flexDirection: "row" } ] }>
                                <View style={ [marktDetailStyle.infoLiCnt, { flexGrow: 9 }]}>
                                    <IconMaterialCommunityIcons
                                        style={ marktDetailStyle.infoLiCntIcon }   
                                        name="map-marker-radius" 
                                        size={ 22 } 
                                        color='#cccccc'/>
                                    <Text style={ marktDetailStyle.infoLiText }>
                                        北京市大兴区1022号
                                    </Text>                                    
                                </View>
                                <TouchableWithoutFeedback onPress={() => {
                                    navigation.push("MapMarkt");
                                }}>                                
                                    <Text style={{ flexGrow: 1, textAlign: "right",lineHeight: 30 }}>                                        
                                        <IconMaterialCommunityIcons
                                            style={ marktDetailStyle.infoLiCntIcon }   
                                            name="send" 
                                            size={ 22 } 
                                            color='#cccccc'/>
                                    </Text>
                                </TouchableWithoutFeedback>
                                
                            </View>
                            
                            <View style={[ marktDetailStyle.infoLi, {borderBottomWidth: 0} ]} >
                                <View style={ marktDetailStyle.infoLiCnt }>
                                    <IconMaterialCommunityIcons
                                        style={ marktDetailStyle.infoLiCntIcon }   
                                        name="clock-start" 
                                        size={ 22 } 
                                        color='#cccccc'/>
                                        <Text style={ marktDetailStyle.infoLiText }>
                                            1992年10月
                                        </Text>                                    
                                </View>
                            </View>
                        </View>
                    </View>    


                    <View style={{ marginTop: 10 }}>
                        <Tabs  >
                            {
                                marktInfoArr.map((data, index) =>  (
                                    <Tab 
                                        key={index}                                     
                                        heading={
                                            data.name !== "市场简介" ? 
                                            <TabHeading>
                                                <View style={{ position: "relative" }}>
                                                    <Text>{data.name}</Text>
                                                    <Text 
                                                        style={{ 
                                                            position: "absolute",
                                                            right: -12,
                                                            top: -20,
                                                            backgroundColor: "red",
                                                            height: 20,
                                                            lineHeight: 20,
                                                            borderRadius: 10,
                                                            paddingLeft: 5,
                                                            paddingRight: 5,
                                                            overflow: "hidden",
                                                            color: "#fff"
                                                        }}>
                                                        9
                                                    </Text>
                                                </View>
                                            </TabHeading> : data.name
                                        }>
                                        <View style={{ margin: 15 }}> 
                                            <data.compoent/>
                                        </View>
                                    </Tab>
                                ))
                            }
                        </Tabs>
                    </View>                    
                    
                    
                   
                </ScrollView>      
            </Container>
            
        )
    }
}
