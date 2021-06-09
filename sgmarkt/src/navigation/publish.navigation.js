import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import PublishSelectImgScreen from '../screens/publishSelectImg/PublishSelectImgScreen';
import PublishSelectImgModifyScreen from '../screens/publishSelectImgModify/PublishSelectImgModifyScreen';

import { HeaderOptions } from "../components"

import { BACK_ICON } from '../constants/icon.constant';

import { publishSelectImgStyle } from '../styles';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PublishStack = createStackNavigator();

const PublishScreenStack = (props) => {
    const HeaderBackIcon = (color = "#fff") => (
        <IconMaterialCommunityIcons
            style={{ fontSize: 30 }}
            name={BACK_ICON}
            color={color}
        />
    );

    // console.log(props.publishSelectImgReducer.filter((v, i) => v.select === true));
    const selectFilterImg = props.publishSelectImgReducer.filter((v, i) => v.select === true);
    const handlePublishNext = () => {
        if(selectFilterImg.length > 0) {
            props.navigation.navigate(
                'PublishSelectImgModify',
                {
                    items: selectFilterImg
                }
            )
        }
    }

    return (
        <PublishStack.Navigator>
            <PublishStack.Screen
                name="PublishSelectImg"
                options={{
                    title: '选择发布所需图片',
                    headerRight: () => (
                        <TouchableOpacity
                            style={ publishSelectImgStyle.handlerNext }
                            onPress={ () => handlePublishNext() }
                        >
                            <Text
                                style={ [ publishSelectImgStyle.handlerNextText, {color: selectFilterImg.length === 0 ? '#bdbdbd' : '#3484ff'} ] }
                            >
                                ({selectFilterImg.length}/{ props.publishSelectImgReducer.length })下一步
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                component={ PublishSelectImgScreen }
            />
            <PublishStack.Screen
                name='PublishSelectImgModify'
                options={{
                    title: `${props.publishSelectedIndexImgReducer + 1}/${props.publishSelectedImgHowManyReducer.length}`,
                    headerBackTitleVisible: false,
                    headerBackImage: () => HeaderBackIcon('#3484ff')
                }}
                component={ PublishSelectImgModifyScreen }
            />
        </PublishStack.Navigator>
    );
}

export default connect(
    data => ({
        publishSelectedImgHowManyReducer: data.publishSelectedImgHowManyReducer,
        publishSelectImgReducer: data.publishSelectImgReducer,
        publishSelectedIndexImgReducer: data.publishSelectedIndexImgReducer
    }), null
)(PublishScreenStack);

