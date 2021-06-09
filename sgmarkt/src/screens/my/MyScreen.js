import React from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {   TabView,
    TabBar,
    SceneMap,
    NavigationState,
    SceneRendererProps, } from 'react-native-tab-view';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

import { myStyle } from "../../styles"

import { storage } from "../../storage/storage";

import { getUserInfoAction } from '../../actions';

import userService from '../../service/user.service';

import MyNotes from "./MyNotes";

class MyScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         index: 0,
    //         infoData: {}
    //     }
    // }
    componentDidMount() {
        storage.load({
            key: 'login'
        }).then(ret => {
            userService.info({
                userId: ret.userId
            }).then(ret => {
                if( ret.code === 0 ) {
                    this.props.getUserInfoAction(ret.data);
                }
            })
        })
    }

    render() {
        const userInfoReducer = this.props.userInfoReducer;
        // const renderScene = SceneMap({
        //     notes: () => <MyNotes/>,
        //     video: () => <View><Text>video</Text></View>,
        //     travelNotes: () => <View><Text>travelNotes</Text></View>,
        // });

		return (
            <HeaderImageScrollView
                maxHeight={300}
                minHeight={100}
                headerImage={{
                    uri: userInfoReducer.background
                }}
            >
                <View
                    style={{
                        marginTop: -50,
                        borderTopRightRadius: 30,  borderTopLeftRadius: 30, backgroundColor: "#fff" }}>
                    <View style={{ marginLeft: 15, marginRight: 15, }}>
                        <View style={ myStyle.portraitBlock }>
                            <Image style={ myStyle.portrait } source={{
                                uri: userInfoReducer.avatar
                            }}/>
                        </View>
                        <View style={ myStyle.nameBlock} >
                            <Text style={ myStyle.name }>{ userInfoReducer.nickname === '' ? '未设定昵称' : userInfoReducer.nickname }</Text>
                            <Text style={ myStyle.outBtn }>退出</Text>
                        </View>
                    </View>

                    <View style={ myStyle.link }>
                        <Text style={ myStyle.linkText }>
                            <Text style={ myStyle.linkTextNumber }>10</Text>
                            获ssss
                        </Text>
                        <Text style={ myStyle.linkText }>
                            <Text style={ myStyle.linkTextNumber }>1</Text>
                            关ms
                        </Text>
                        <Text style={ myStyle.linkText }>
                            <Text style={ myStyle.linkTextNumber }>9</Text>
                            粉d
                        </Text>
                        <Text style={ myStyle.linkText }>
                            <Text style={ myStyle.linkTextNumber }>0</Text>
                            来访
                        </Text>
                    </View>

                    <View style={ myStyle.cogs }>
                        <View style={ myStyle.cogsBlock }>
                            <IconMaterialCommunityIcons
                                style={ myStyle.cogsIcon }
                                name="briefcase"
                                size={ 22 }
                                color='#01c184'/>
                            <Text style={ myStyle.cogsIconText }>我的收藏</Text>
                        </View>
                        <View style={ myStyle.cogsBlock }>
                            <TouchableOpacity onPress={ () => { this.props.navigation.push('MyInfoSet', {data: userInfoReducer }) } }>
                                <IconMaterialCommunityIcons
                                    style={ myStyle.cogsIcon }
                                    name="lead-pencil"
                                    size={ 22 }
                                    color='#01c184'/>
                                <Text style={ myStyle.cogsIconText }>修改</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ myStyle.cogsBlock }>
                            <IconMaterialCommunityIcons
                                style={ myStyle.cogsIcon }
                                name="bell"
                                size={ 22 }
                                color='#01c184'/>
                            <Text style={ myStyle.cogsIconText }>信息</Text>
                        </View>
                        <View style={ myStyle.cogsBlock }>
                            <IconMaterialCommunityIcons
                                style={ myStyle.cogsIcon }
                                name="cogs"
                                size={ 22 }
                                color='#01c184'/>
                            <Text style={ myStyle.cogsIconText }>设置</Text>
                        </View>
                    </View>
                </View>

                {/*<TabView*/}
                {/*    navigationState={{*/}
                {/*        index: this.state.index,*/}
                {/*        routes: [*/}
                {/*            { key: 'notes', title: '笔记' },*/}
                {/*            { key: 'video', title: '视频' },*/}
                {/*            { key: 'travelNotes', title: '游记' }*/}
                {/*        ]*/}
                {/*    }}*/}
                {/*    onIndexChange={ this.state.index}*/}
                {/*    renderScene={renderScene}*/}
                {/*    style={{ backgroundColor: "#fff", paddingBottom: 100}}*/}
                {/*    renderTabBar={props => (*/}
                {/*        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#ccc" }}>*/}
                {/*            <TabBar*/}
                {/*                {...props}*/}
                {/*                activeColor={"#3484ff"}*/}
                {/*                inactiveColor={'#000'}*/}
                {/*                indicatorStyle={{*/}
                {/*                    height: 2,*/}
                {/*                    backgroundColor: '#3484ff',*/}

                {/*                }}*/}
                {/*                tabStyle={{ width: 100 }}*/}
                {/*                scrollEnabled={true}*/}
                {/*                style={{*/}
                {/*                    height: 50,*/}
                {/*                    alignSelf: "center",*/}
                {/*                    backgroundColor: "#fff",*/}
                {/*                    shadowOffset: { height: 0, width: 0 },*/}
                {/*                    shadowColor: "transparent",*/}
                {/*                    shadowOpacity: 0,*/}
                {/*                    elevation: 0,*/}
                {/*                }}*/}
                {/*                labelStyle={{*/}
                {/*                    fontSize: 14*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </View>*/}
                {/*    )}*/}
                {/*    onIndexChange={index => this.setState({ index })}*/}
                {/*    initialLayout={{ width: Dimensions.get('window').width }}*/}
                {/*/>*/}
            </HeaderImageScrollView>
		);
	}
}

export default connect(
    data => ({ userInfoReducer: data.userInfoReducer }),
    { getUserInfoAction }
)(MyScreen);
