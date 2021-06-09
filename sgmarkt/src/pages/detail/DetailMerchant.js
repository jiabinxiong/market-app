import React from "react";
import { View, Text, ScrollView } from "react-native";
import MasonryList from "react-native-masonry-list";

const merchantStyleArr = [
    "水果类",
    "蔬菜类",
    "调味类",
    "干果类",
    "奶制品",
    "水产类",
    "进口食品",
    "肉类",
    "茶类",
    "酒水类",
    "西点／主食类",
    "熟食／冷冻类"
];

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

export default class DetailMerchant extends React.Component {
    render() {
        return (
            <View>                    
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 30 }}>                    
                    {
                        merchantStyleArr.map((data, index) => {
                        return <Text 
                            key={ index }
                            style={{ 
                                height: 30,        
                                borderRadius: 15,
                                lineHeight: 30,
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontSize: 12,
                                marginRight: 10,        
                                overflow: "hidden",
                                backgroundColor: "#f5f5f5", 
                            }}>{data}</Text>
                        })
                    }
                </ScrollView>

                <View style={{ height: 400, marginTop: 10 }}>
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
                        renderIndividualFooter={(data) => {                        
                            return (     
                                
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
                                    <Text style={{ fontSize: 14, lineHeight: 18, color: "#f5f5f5f"} }>
                                        {data.title}
                                    </Text>
                                </View> 
                                                                                
                                                        
                            );
                        }}                
                    />
                </View>
                
            </View>
        );
    };
}