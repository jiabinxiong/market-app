import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
import MasonryList from "react-native-masonry-list";
import { SharedElement } from 'react-navigation-shared-element';
import Video from 'react-native-video';
import DeviceInfo from 'react-native-device-info';

import { shopStyle, commenTTextAreaStyle, masonryListStyle } from "../../styles";
import { ICON_BACK, TEST_HTTP } from "../../constants";

const testImgArr = [

	{ id: 1, uri: `${TEST_HTTP}1-1.jpg` },{ id: 2, uri: `${TEST_HTTP}1-2.jpg` },
	{ id: 3, uri: `${TEST_HTTP}1-3.jpg` },{ id: 4, uri: `${TEST_HTTP}1-4.jpg` },
	{ id: 5, uri: `${TEST_HTTP}1-5.jpg` },{ id: 6, uri: `${TEST_HTTP}1-6.jpg` },{ id: 7, uri: `${TEST_HTTP}1-7.jpg` },
	{ id: 8, uri: `${TEST_HTTP}1-8.jpg` },{ id: 9, uri: `${TEST_HTTP}1-9.jpg` },{ id: 10, uri: `${TEST_HTTP}1-10.jpg` },
	{ id: 11, uri: `${TEST_HTTP}1-11.jpg` }
];

const testVidoArr = [
	{ uri: require('../../videos/video-1.mp4') },
	{ uri: require('../../videos/video-2.mp4') },
	{ uri: require('../../videos/video-3.mp4') },
	{ uri: require('../../videos/video-4.mp4') },
	{ uri: require('../../videos/video-5.mp4') },
	{ uri: require('../../videos/video-6.mp4') },
	{ uri: require('../../videos/video-7.mp4') },
];

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 100,
    width: "100%",
   backgroundColor: "red"
  },
});





export default class ShopScreen extends React.Component {
	render() {
		const {
			tTextArea, tTextTopArea, tTextTopLArea,
			tTextTopRMoreArea, tTextTopRArea, tTextTopLTArea, tTextBottomInf
		} = commenTTextAreaStyle;

		return (
			<Container>
				<ScrollView  style={{  }}>
			        <View style={ shopStyle.ad }>
				        <Swiper
				        	dotColor="#fff"
				        	autoplay={true}
				        	autoplayTimeout={8}
				        	showsButtons={false}>
					        <View >
							    <Image  style={ shopStyle.adImg } source={{
					        		uri: this.props.route.params.img
					        	}}/>
					        </View>
					        <View >
					        	<Image  style={ shopStyle.adImg } source={{
					        		uri: "http://192.168.1.5:4000/4.jpeg"
					        	}}/>
					        </View>
					        <View >
					        	<Image  style={ shopStyle.adImg } source={{
					        		uri: "http://192.168.1.5:4000/2.jpeg"
					        	}}/>
					        </View>
					     </Swiper>

			        </View>
			        <View style={ shopStyle.cnt }>
						<View style={ shopStyle.portraitBlock }>
				        	<Image style={ shopStyle.portraitImg } source={{
				        		uri: this.props.route.params.img
				        	}}/>
				        </View>
				        <View style={ shopStyle.info }>
				        	<View style={ shopStyle.infoLi }>
								<Text style={ shopStyle.infoLiName }>摊主姓名:</Text>
								<Text style={ shopStyle.infoLiText }>小熊哥 {DeviceInfo.getBrand()}</Text>
				        	</View>
				        	<View style={ shopStyle.infoLi }>
								<Text style={ shopStyle.infoLiName }>摊位号: </Text>
								<Text style={ shopStyle.infoLiText }>135{DeviceInfo.getDeviceId()}</Text>
				        	</View>
				        	<View style={ shopStyle.infoLi }>
								<Text style={ shopStyle.infoLiName }>联系电话:</Text>
								<Text style={ shopStyle.infoLiText }>13683507879</Text>
				        	</View>
				        </View>
			        </View>

			        <View style={ [shopStyle.introduce, tTextArea ] }>
	                    <View style={ tTextTopArea }>
	                        <View style={ tTextTopLArea }>
	                            <Text style={ tTextTopLTArea }>店铺介绍</Text>
	                        </View>
	                    </View>
	                    <View style={ tTextBottomInf }>
	                    	<View style={ shopStyle.infoLi }>
								<Text style={ shopStyle.infoLiName }>经营项目:</Text>
								<Text style={ shopStyle.infoLiText }>各种豆芽、广东咸菜。各种豆芽、广东咸菜。各种豆芽、广东咸菜。各种豆芽、广东咸菜。</Text>
				        	</View>
	                    </View>
	                </View>

	                <View>

						<Tabs >
                            <Tab heading="视频">
                               <MasonryList
                                    images={ testImgArr }
                                    columns={2}
                                    spacing={3}
                                    sorted={true}
                                    scrollEnabled={ false }

                                    imageContainerStyle={masonryListStyle.imageContainer}
                                    renderIndividualHeader={data => {
                                    	const item = data;
				                    	return (
            								<TouchableOpacity
	            								 style={{
					                    			position: "absolute",
					                    			zIndex: 10,
					                    			top: data.masonryDimensions.margin,
	            									left: data.masonryDimensions.margin,
					                    			width: data.masonryDimensions.width,
	            									height: data.masonryDimensions.height
	            								}}
            									onPress={() => this.props.navigation.push('ImgShow', {item, data: testImgArr})}
                                                >
                                                <Image style={{ opacity: 0, width: 200, height: 200 }} source={{
                                                    uri: item.uri
                                                }} />
								        		{/*<SharedElement id={`item.${item.id}.photo`}>*/}
												{/*	<Image style={{ opacity: 0, width: 200, height: 200 }} source={{*/}
											    {/*      	uri: item.uri*/}
											    {/*    }} />*/}
								        		{/*</SharedElement>*/}
									      	</TouchableOpacity>
				                    	);
				                    }}
                                />
                            </Tab>
                            <Tab heading="图片">

                            </Tab>
                            <Tab heading="评论">
                                <ScrollView>
                                    <Text style={{ height: 100, backgroundColor: "red" }}></Text>
                                </ScrollView>
                            </Tab>
                        </Tabs>
	                </View>
				</ScrollView>
			</Container>
		)
	}
}


