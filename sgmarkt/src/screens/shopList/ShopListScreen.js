import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { Container, Header, Left, Body, Right, Title, Tab, Tabs, ScrollableTab, TabHeading } from "native-base";
import MasonryList from "react-native-masonry-list";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { headerStyle, masonryListStyle } from "../../styles";

const typesTest = [
	{name: "全部"},{name: "蔬菜"},{name: "水果"},{name: "猪肉"},{name: "水产"},{name: "家禽"},{name: "熟食／冷冻类"}, {name: "牛羊"},
	{name: "调味"},{name: "干果"},{name: "奶制品"},{name: "茶"},{name: "酒水"},{name: "西点／主食"}
];

function idGenerator() {
    return Math.random().toString(36).substr(2, 9);
}

const datas = [
	{
        uri: "http://192.168.1.5:4000/11.jpeg",        
        id: 1,
        title: "三源里菜市场" + idGenerator()
    },
    {
        uri: "http://192.168.1.5:4000/12.jpeg",        
        id: 2,
        title: "三源里菜市场" +idGenerator()
    },
    {
        uri: "http://192.168.1.5:4000/13.jpeg",        
        id: 3,
        title: "三源里菜市场"+idGenerator()
    },
    {
        uri: "http://192.168.1.5:4000/1.jpeg",        
        id: 4,
        title: "三源里菜市场" +idGenerator()
    },
    {
        uri: "http://192.168.1.5:4000/2.jpeg",        
        id: 5,
        title: "北京王府井阳光菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/3.jpeg",        
        id: 6,
        title: "新发地蔬菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/4.jpeg",        
        id: 7,
        title: "新民菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/5.jpeg",        
        id: 8,
        title: "北京大洋路农副产品市场"
    },
    {
        uri: "http://192.168.1.5:4000/6.jpeg",        
        id: 9,
        title: "红莲菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/7.jpeg",        
        id: 10,
        title: "龙锦菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/8.jpeg",        
        id: 11,
        title: "东潞苑农贸市场"
    },
    {
        uri: "http://192.168.1.5:4000/9.jpeg",        
        id: 12,
        title: "龙锦菜市场"
    },
    {
        uri: "http://192.168.1.5:4000/10.jpeg",        
        id: 13,
        title: "东潞苑农贸市场"
    }    
];

export default class ShopListScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshingS: false
		}
	}
	render() {		
		return(
			<Container>
		        
		        <Tabs renderTabBar={()=> <ScrollableTab style={{borderWidth: 0}} />}>
					{
						typesTest.map((data, index) => (
							<Tab 
								heading={data.name} 
								key={index}
								activeTextStyle={{ color: "#3484ff" }}
								activeTabStyle={{  paddingLeft: 3, paddingRight: 3 }} 
								tabStyle={{ paddingLeft: 3, paddingRight: 3}}>
								 <MasonryList
				                    images={ datas }
				                    columns={2}
				                    spacing={3}     
				                    sorted={true}
				                    backgroundColor={ "none"}           
				                    imageContainerStyle={masonryListStyle.imageContainer}
				                    onPressImage= {(item, index) => {                                        
				                        this.props.navigation.push("Shop", {img: item.uri });
				                    }}
				                    renderIndividualFooter={(data) => {  
				                        return (     
				                            <TouchableOpacity  
                                                onPress={ () => this.props.navigation.push(
                                                        "Shop", {img: data.uri } ) }>
				                                <View style={ masonryListStyle.renderIndividualFooter(data) }>                        
				                                    <Text style={{ fontSize: 14, lineHeight: 18, color: "#3c3c3c"} }>
				                                        { data.title }
				                                    </Text>
				                                </View> 
				                            </TouchableOpacity>                                                   
				                                                       
				                        );
				                    }}
				                
				                />
							</Tab>
						))
					}
		        </Tabs>
						        
			</Container>
		);
	}
}