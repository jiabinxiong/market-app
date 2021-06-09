import React from "react";
import { View, Text, Image } from "react-native";

import { commentStyle } from "../styles"

const commentTestArr = [
	{
		img: "http://192.168.1.5:4000/timg.jpeg",
		name: "aa",
		comment: "xxxxxxxxx",
		childList: [
			{
				img: "http://192.168.1.5:4000/time7.jpg",
				name: "aa",
				comment: "xxxxxxxxx",
			},
			{
				img: "http://192.168.1.5:4000/time6.jpg",
				name: "aa",
				comment: "xxxxxxxxx",
			}
		]
	},
	{
		img: "http://192.168.1.5:4000/timg1.jpeg",
		name: "bb",
		comment: "ooooo",
		childList: [
			{
				img: "http://192.168.1.5:4000/timg2.jpeg",
				name: "bb1",
				comment: "eee",
			},
			{
				img: "http://192.168.1.5:4000/timg3.jpeg",
				name: "bb2",
				comment: "ererer",
			}
		]
	}
];

export default class Comment extends React.Component {
	render() {
		return (	
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
			                <View style={{ marginLeft: 50 }}>
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
            
            
		);
	}
}