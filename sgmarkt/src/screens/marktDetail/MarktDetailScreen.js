import React from 'react';
import { StyleSheet, Text, Image,
	TouchableOpacity,
	TouchableWithoutFeedback, View, Dimensions,
	Platform, StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Right, Title } from "native-base";
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";

import { phoneTypeTool } from " ../../../tool/phoneType"

import {marktDetailStyle, headerStyle, shopStyle} from '../../styles';

import MarktInfo from "./MarktInfo";

const styles = StyleSheet.create({

  navTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'transparent',
  },
});


export default class MarktDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavTitle: false,
            marketInfoObj: this.props.route.params.item
        };
    }

    componentDidMount() {

    	this.props.navigation.setOptions({
    		headerRight: () => (
    			<View style={ headerStyle.headerRight } >
					<IconMaterialCommunityIcons
						style={ headerStyle.headerRightShareIcon }
                        name="star-outline"
                        size={ 22 }
                    color='#cccccc'/>
					<IconMaterialCommunityIcons
  						style={ headerStyle.headerRirhtStarIcon }
                        name="dots-horizontal"
                    color='#cccccc'/>
		        </View>
			)
    	});
    }

    handerOnHide() {
        // alert("b");
        alert('a');
        this.navTitleView.fadeInUp(200)
    }
    handerOnDisplay() {
        this.navTitleView.fadeOut(100)
    }
    render() {
        const { cntBlock, titleBlock,
        headerLeftIcon,
        titleText, titleInfo, liBlock, infoLiCnt, infoLiText, infoLi, infoLiCntIcon,
        } = marktDetailStyle
        console.log(this.props);
        console.log(this.state.marketInfoObj)
        return (
            <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <HeaderImageScrollView
                maxHeight={300}
                minHeight={ phoneTypeTool.headerH() }
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                fadeOutForeground


                renderHeader={() => (
                    <Swiper
                        dotColor="#fff"
                        autoplay={true}
                        autoplayTimeout={8}
                        showsButtons={false}>
                        {
                            this.state.marketInfoObj.img.map((dataImg, indexImg) => (
                                <View key={indexImg}>
                                    <Image  style={{ width: "100%", height: 300  }} source={{
                                        uri: dataImg
                                    }}/>
                                </View>
                            ))
                        }
                    </Swiper>
                )}
                renderFixedForeground={() => (
                    <Animatable.View
                      style={[styles.navTitleView, phoneTypeTool.headerImageScrollViewTitle()]}
                      ref={navTitleView => {
                        this.navTitleView = navTitleView;
                      }}
                    >
                        <Text style={styles.navTitle}>
                            {this.state.marketInfoObj.name} aaa
                        </Text>
                    </Animatable.View>

                )}
            >
            <View style={{ marginTop: -100, backgroundColor: "#fff" }}>
                <TriggeringView
                    onHide={() => this.handerOnHide()}
                    onDisplay={() => this.handerOnDisplay()}
                  >
                 </TriggeringView>
                <View
                    style={{
                        position: "absolute",
                        zIndex: 1000, right: 20, bottom: 10, height: 20, lineHeight: 20
                    }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.push("MarktDetailImgVideo", {item: this.props.route} )}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>123图片,视频</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={cntBlock }>
                <View style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 20,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        backgroundColor: "#fff" }}>
                    <View style={ titleBlock }>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.push("MarktDetailImgVideo", {item: this.props.route} )}>
                            <Text style={ titleText }>{this.state.marketInfoObj.name}</Text>
                        </TouchableOpacity>
                        <Text style={ titleInfo } numberOfLines={4}>
                            {this.state.marketInfoObj.details}
                        </Text>
                    </View>
                    <View style={ liBlock }>
                        <View style={ infoLi }>
                            <View style={ infoLiCnt }>
                                <IconMaterialCommunityIcons
                                    style={ infoLiCntIcon }
                                    name="phone"
                                    color='#cccccc'/>
                                <Text style={ infoLiText }>
                                    {
                                        this.state.marketInfoObj.phone === "0" ? "暂无" : this.state.marketInfoObj.phone
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={ infoLi }>
                            <View style={ infoLiCnt }>
                                <IconMaterialCommunityIcons
                                    style={ infoLiCntIcon }
                                    name="earth"
                                    size={ 22 }
                                    color='#cccccc'/>
                                <Text style={ infoLiText }>
                                    {
                                        this.state.marketInfoObj.http === "0" ? "暂无" : this.state.marketInfoObj.http
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={ [ infoLi, { flexDirection: "row" } ] }>
                            <TouchableWithoutFeedback onPress={() => {this.props.navigation.push("Map")}}>
                                <View style={ [infoLiCnt, { flexGrow: 9 }]}>
                                    <IconMaterialCommunityIcons
                                        style={ infoLiCntIcon }
                                        name="map-marker-radius"
                                        size={ 22 }
                                        color='#cccccc'/>
                                    <Text style={ infoLiText }>
                                        { this.state.marketInfoObj.address }
                                    </Text>

                                    <Text style={{ flexGrow: 1, textAlign: "right",lineHeight: 30 }}>
                                        <IconMaterialCommunityIcons
                                            style={ infoLiCntIcon }
                                            name="send"
                                            size={ 22 }
                                            color='#cccccc'/>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>

                        <View style={ infoLi } >
                            <View style={ infoLiCnt }>
                                <IconMaterialCommunityIcons
                                    style={ infoLiCntIcon }
                                    name="clock-start"
                                    size={ 22 }
                                    color='#cccccc'/>
                                <Text style={ infoLiText }>
                                    1992年10月
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <MarktInfo props={this.props}/>

            </View>


        </HeaderImageScrollView>
        </View>
        );
    }
}



// import React from 'react';
// import { Image, View, Text, StyleSheet } from 'react-native';
//
// import HeaderImageScrollView from 'react-native-image-header-scroll-view';
//
// export default class MarktDetailScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <HeaderImageScrollView
//                     maxHeight={300}
//                     minHeight={80}
//                     fadeOutForeground
//
//                     renderHeader={() => <Image source={{
//                         uri: 'http://192.168.1.5:4000/2.jpeg'
//                     }} style={{height: 300, width: "100%"}} />}
//                     overScrollMode="never"
//                     overlayColor="#4A148C"
//                     maxOverlayOpacity={0.9}
//                     renderForeground={() => (
//                         <View style={styles.titleContainer}>
//                             <Text style={styles.imageTitle}>Cat</Text>
//                         </View>
//                     )}
//                     foregroundParallaxRatio={3}
//                 >
//                     <View style={{ height: 100, backgroundColor: '#4CAF50' }} />
//                     <View style={{ height: 100, backgroundColor: '#F44336' }} />
//                     <View style={{ height: 100, backgroundColor: '#009688' }} />
//                     <View style={{ height: 100, backgroundColor: '#03A9F4' }} />
//                     <View style={{ height: 100, backgroundColor: '#FF9800' }} />
//                     <View style={{ height: 100, backgroundColor: '#673AB7' }} />
//                     <View style={{ height: 100, backgroundColor: '#795548' }} />
//                     <View style={{ height: 100, backgroundColor: '#FFEB3B' }} />
//                 </HeaderImageScrollView>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     titleContainer: {
//         flex: 1,
//         alignSelf: 'stretch',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     imageTitle: {
//         color: 'white',
//         backgroundColor: 'transparent',
//         fontSize: 24,
//     },
// });



// import React from 'react';
// import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
//
// import HeaderImageScrollView from 'react-native-image-header-scroll-view';
//
// const MIN_HEIGHT = 400;
// const MAX_HEIGHT = 200;
//
// export default class MarktDetailScreen extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             refreshing: false,
//         };
//     }
//
//     _onRefresh() {
//         this.setState({
//             refreshing: true,
//         });
//
//         setTimeout(() => {
//             this.setState({
//                 refreshing: false,
//             });
//         }, 2000);
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <HeaderImageScrollView
//                     maxHeight={MAX_HEIGHT}
//                     minHeight={MIN_HEIGHT}
//                     minOverlayOpacity={0.4}
//                     renderHeader={() => <Image source={{
//                         uri: 'http://192.168.1.5:4000/2.jpeg'
//                     }} style={styles.image} />}
//                     refreshControl={
//                         <RefreshControl
//                             refreshing={this.state.refreshing}
//                             onRefresh={this._onRefresh.bind(this)}
//                             tintColor="white"
//                         />
//                     }
//                     renderTouchableFixedForeground={() => (
//                         <View style={{ height: MAX_HEIGHT, justifyContent: 'center', alignItems: 'center' }}>
//                             <TouchableOpacity onPress={() => console.log('tap!!')} style={styles.button}>
//                                 <Text style={styles.buttonText}>Click Me!</Text>
//                             </TouchableOpacity>
//                         </View>
//                     )}
//                     scrollViewBackgroundColor="#ddddff"
//                 >
//                     <View style={{ height: 1000 }} />
//                 </HeaderImageScrollView>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         height: MAX_HEIGHT,
//         width: Dimensions.get('window').width,
//     },
//     button: {
//         borderWidth: 1,
//         borderRadius: 8,
//         paddingVertical: 10,
//         paddingHorizontal: 30,
//         borderColor: 'white',
//         backgroundColor: '#00000066',
//     },
//     buttonText: {
//         color: 'white',
//         backgroundColor: 'transparent',
//     },
// });

