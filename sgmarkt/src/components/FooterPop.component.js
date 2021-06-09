import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {footerPopStyle, masonryListStyle} from '../styles';
import { phoneTypeTool } from '../tool/phoneType';


/**
 * list 一个数组 ['1', '2',......]
 * select 选中第几个 一个字符串 或 是一个数字 根据list里的数据来
 */
export default class FooterPopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom: 0,
            animationStyle: 'up',
            duration: 300,
            selectIndex: -1,
        }
    }

    componentDidMount() {
        if(this.props.select !== undefined) {
            this.setState({
                selectIndex: this.props.listArr.findIndex((v, index) => v.value === this.props.select)
            })
        }
    }

    handleSelect(e, index) {
        this.setState({
            animationStyle: 'down',
            selectIndex: index
        });

        this.time = setTimeout(() => {
            this.props.callbackFun({
                index: index,
                val: this.props.listArr[index]
            })
        }, this.state.duration);
    }

    handleBack() {
        this.setState({
            animationStyle: 'down'
        });

        this.time = setTimeout(() => {
            this.props.callbackFun({});
        }, this.state.duration);
    }

    render() {
        const fadeInUp = {
            from: {
                bottom: -((this.props.listArr.length * 50) + phoneTypeTool.phoneType().footerPopBottom),
            },
            to: {
                bottom: 0
            }
        };

        const fadeInDown = {
            from: {
                bottom: 0,
            },
            to: {
                bottom: -((this.props.listArr.length * 50) + phoneTypeTool.phoneType().footerPopBottom + 20),
            }
        };

        const fadeInUpColor = {
            from: {
                opacity: 0
            },
            to: {
                opacity: 0.3
            }
        };

        const fadeInDownColor = {
            from: {
                opacity: 0.3
            },
            to: {
                opacity: 0
            }
        }

        return(
            <Modal
                transparent={true}
            >
                <View style={ footerPopStyle.footerPop }>
                    <TouchableOpacity onPress={() => this.handleBack()}>
                        <Animatable.View
                            duration={this.state.duration}
                            animation={ this.state.animationStyle === 'up' ? fadeInUpColor : fadeInDownColor }
                            style={ footerPopStyle.footerPopB }>

                        </Animatable.View>
                    </TouchableOpacity>
                    <Animatable.View
                        animation={ this.state.animationStyle === 'up' ? fadeInUp : fadeInDown }
                        duration={this.state.duration}
                        style={
                            [
                                {
                                    bottom: 0,
                                },
                                footerPopStyle.cntBlock
                            ]
                        }
                    >
                        {
                            this.props.listArr.map((data, index) => (
                                <View style={ footerPopStyle.listBlock } key={index}>
                                    <TouchableOpacity
                                        style={ footerPopStyle.listBlockInfo }
                                        onPress={(e) => this.handleSelect(e, index)}>
                                        <Text style={ footerPopStyle.listText }>{data.text}</Text>
                                        {
                                            this.state.selectIndex === index ? <IconMaterialCommunityIcons
                                                style={ footerPopStyle.listIcon }
                                                name="check"
                                            /> : null
                                        }

                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </Animatable.View>
                </View>

            </Modal>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.time);
    }
}
