import React, { Component } from 'react';
import { 
    SafeAreaView, 
    TextInput, 
    View, 
    Text, 
    ScrollView, 
    RefreshControl,
    TouchableWithoutFeedback,
    TouchableHighlight
 } from "react-native";

// import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import MasonryList from "react-native-masonry-list";
import Swiper from "react-native-swiper";
import { Container, Header, Content, Button, Image,  Footer, FooterTab } from 'native-base';

import { searchStyle, homeStyle, masonryStyle } from "../../styles";

function idGenerator() {
    return Math.random().toString(36).substr(2, 9);
}


const datas = [
    {
        uri: "http://192.168.1.5:4000/timg.jpeg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "三源里菜市场 三源里菜市场 三源里菜市场 三源里菜市场 三源里菜市场 三源里菜市场 三源里菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/timg1.jpeg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "北京王府井阳光菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/timg2.jpeg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "新发地蔬菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/timg3.jpeg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "新民菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/timg4.jpeg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "北京大洋路农副产品市场"
    },
    {
        uri: "http://192.168.1.5:4000/timg5.jpg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "红莲菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/time6.jpg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "龙锦菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/time7.jpg",
        // dimensions: { width: 1080, height: 1920 },
        id: idGenerator(),
        title: "东潞苑农贸市场"
    },
    
];

const swiperStyles = {
    wrapper: {  },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  }

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {        
        const { navigation } = this.props;
        return (            
            <ScrollView 
                refreshControl={
                    <RefreshControl 
                        title={"正在刷新"}
                    />
                }
                style={{ backgroundColor: "#f5f5f5" }}> 
                <SafeAreaView>
                    <View style={ searchStyle.iptBlock }>
                        <TextInput
                            placeholder="输入批发市场"
                            style={searchStyle.ipt}
                        />
                        <IconMaterialCommunityIcons
                            style={ searchStyle.icon }  
                            name="magnify" 
                            size={ 22 } 
                            color='#cccccc'/>
                    </View>
                    
                </SafeAreaView>

                <View style={ homeStyle.swiper }>
                    <Swiper style={swiperStyles.wrapper} showsButtons={false}>
                        <View style={swiperStyles.slide1}>
                            <Text style={swiperStyles.text}>Hello Swiper</Text>
                        </View>
                        <View style={swiperStyles.slide2}>
                            <Text style={swiperStyles.text}>Beautiful</Text>
                        </View>
                        <View style={swiperStyles.slide3}>
                            <Text style={swiperStyles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                
               
                <View style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>                    
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 30 }}>
                        <Text style={ homeStyle.addressText }>北京</Text>
                        <Text style={ homeStyle.addressText }>天津</Text>
                        <Text style={ homeStyle.addressText }>上海</Text>
                        <Text style={ homeStyle.addressText }>南京</Text>
                        <Text style={ homeStyle.addressText }>成都</Text>
                        <Text style={ homeStyle.addressText }>长沙</Text>
                        <Text style={ homeStyle.addressText }>广洲</Text>
                        <Text style={ homeStyle.addressText }>合肥</Text>
                        <Text style={ homeStyle.addressText }>南昌</Text>
                    </ScrollView>
                </View>
                
                <MasonryList
                    images={datas}
                    columns={2}
                    spacing={3}     
                    style={{ marginBottom: 500 }}      
                    backgroundColor={ "none"}           
                    imageContainerStyle={{ 
                        borderTopLeftRadius: 5 , 
                        borderTopRightRadius: 5,
                        
                    }}
                    onPressImage= {() => {
                        navigation.push("MarktDetail");
                    }}
                    renderIndividualFooter={(data) => {                        
                        return (     
                            <TouchableWithoutFeedback  onPress={() => {
                                navigation.push("MarktDetail");                               
                            }} >
                                <View 
                                   
                                    style={{                               
                                        width: data.masonryDimensions.width,                                
                                        marginTop: -data.masonryDimensions.margin,
                                        marginLeft: data.masonryDimensions.margin,
                                        marginBottom: 10,
                                        backgroundColor: "#fff",
                                        padding: 10
                                    }}
                                >                        
                                    <Text style={{ fontSize: 14, lineHeight: 18, color: "#3c3c3c"} }>
                                        {data.title}
                                    </Text>
                                </View> 
                            </TouchableWithoutFeedback>                                                   
                                                       
                        );
                    }}
                
                />
               
            </ScrollView>
        );
    }
}
