import React from "react";
import { View,
	Text, Image,TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Container, Header, Body, Right } from "native-base";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MasonryList from "react-native-masonry-list";
import LinearGradient from 'react-native-linear-gradient';

import { homeStyle, masonryListStyle } from "../../styles";

import { linkActions } from "../../actions";

import { marketListApi } from "../../api";

import { HEART_ICON, LOCATION_ICON, VIDEO_TYPE_ICON } from "../../constants/icon.constant";

import { storage, storageLoad, storageSave  } from "../../storage/storage";

import ImgScreen from '../img/ImgScreen';
import {likeReducer} from '../../reducers';
import {authLogin} from '../../service/authentication.login';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marktListArr: [],
            likeArr: [],
            refreshing: false,
            limit: 10,
            skip: 0
        };
    }

    componentDidMount() {
        this.getMarketList();

    }

    getMarketList() {
        marketListApi({limit: this.state.limit, skip: this.state.skip}, (data) => {
            this.setState({
                marktListArr: [...this.state.marktListArr, ...data]
            });
        });
    }

    handleRefresh (){
        this.setState({
            limit: 10,
            skip: 0,
            marktListArr: []
        }, () => this.getMarketList())
    }

    handleEndRefresh () {
        this.setState({
            skip: this.state.skip + 10
        }, () => this.getMarketList())
    }

    handlePrompt() {
        storage.load({
            key: 'login'
        }).then(ret => {
        }).catch(err => {
            this.props.navigation.navigate("Login", {screen: "Home"})
        })
    }

    render() {
        const { header,
            headerIpt, headerIptIcon, headerIptCnt, outline, outlineIcon,
            listMarktBlockCntBlockStar, listMarktBlockCntStar, listMarktBlockCntBlockStarNum,
            listMarkt, listMarktBlock, listMarktBlockImg, listMarktBlockCnt, listMarktBlockCntText
        } = homeStyle;

        return (
            <Container>
                <Header transparent style={header}>
                    <Body style={{alignItems: "flex-start", flex: 3.5 }}>
                        <View style={ headerIpt }>
                            <TextInput
                                placeholder="输入批发市场"
                                style={headerIptCnt}
                            />
                            <IconMaterialCommunityIcons
                                style={ headerIptIcon }
                                name="magnify"
                                size={ 22 }
                                color='#cccccc'/>
                        </View>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
                        <TouchableOpacity onPress={() => this.handlePrompt()}>
                            <View style={ outline }>
                                <IconMaterialCommunityIcons
                                    style={ outlineIcon }
                                    name="bell-outline"
                                    size={ 22 }
                                    color='#cccccc'/>
                            </View>
                        </TouchableOpacity>
                    </Right>
                </Header>
                {
                    this.state.marktListArr.length > 0 ? <MasonryList
                        images={ this.state.marktListArr }
                        columns={2}
                        spacing={3}
                        sorted={true}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.handleRefresh();
                        }}
                        onEndReached={() => {
                            this.handleEndRefresh();
                        }}
                        onEndReachedThreshold={0.5}
                        imageContainerStyle={masonryListStyle.imageContainer}
                        onPressImage= {(item, index) => {
                            this.props.navigation.push("MarktDetail", {url: item.uri, item });
                        }}
                        renderIndividualHeader={data => {
                            return (
                                <View style={ masonryListStyle.renderIndividualHeader }>
                                    {
                                        data.type === "video" ? <View style={ masonryListStyle.renderIndividualHeaderT(data) }>
                                            <IconMaterialCommunityIcons
                                                style={ masonryListStyle.userVideoIcon }
                                                name={ VIDEO_TYPE_ICON }
                                            />
                                        </View> : null
                                    }
                                    <LinearGradient
                                        style={ masonryListStyle.renderIndividualHeaderB(data) }
                                        colors={['rgba(0,0,0, 0)', 'rgba(0,0,0, 0.4)']}>
                                        <View>
                                            <IconMaterialCommunityIcons
                                                style={ masonryListStyle.userLoctionIcon }
                                                name={ LOCATION_ICON }
                                            />
                                        </View>

                                    </LinearGradient>
                                </View>

                            );
                        }}
                        renderIndividualFooter={(data, index) => {
                            return (
                                <View
                                    style={masonryListStyle.renderIndividualFooter(data)}
                                >
                                    <Text style={{ fontSize: 14, lineHeight: 18, color: "#3c3c3c"} }>
                                        { data.name } -- { data.index }
                                    </Text>
                                    <View style={ masonryListStyle.user }>
                                        <View style={ masonryListStyle.userInfo }>
                                            <Image
                                                style={ masonryListStyle.userPortrait }
                                                source={{ uri: `${data.uri}` }}
                                            />
                                            <Text style={ masonryListStyle.userName }>33</Text>
                                        </View>
                                        <View style={ masonryListStyle.userLike }>
                                            <TouchableOpacity onPress={() => handleLike()}>
                                                <IconMaterialCommunityIcons
                                                    style={ masonryListStyle.userLikeIcon }
                                                    name={ HEART_ICON }
                                                />
                                            </TouchableOpacity>

                                            <Text style={ masonryListStyle.userLinkNumber }>{ data.like }</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                    /> : null
                }


            </Container>

        );
    }
}

export default connect(
    (state) => ({likeReducer: state.likeReducer}),
    { linkActions }
)(HomeScreen);



