import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {footerPopStyle, masonryListStyle} from '../styles';
import { phoneTypeTool } from '../tool/phoneType';
import {LOCATION_ICON} from '../constants';


/**
 * list 一个数组 ['1', '2',......]
 * select 选中第几个 一个字符串 或 是一个数字 根据list里的数据来
 * cancelShow 是否显示取消按钮
 * cancelText 自定义取消按钮文字 默认 按钮文字 取消
 */
export default class SelectPopFooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom: 0,
            animationStyle: 'up',
            duration: 300,
            selectIndex: -1,
            cancelShow: true,
            cancelText: '取消',
            listArr: [],
            isVisible: true
        }
    }

    componentDidMount() {
        if(this.state.cancelShow ) {
            this.setState({
                listArr: [...this.props.listArr, { value: -1, text: this.state.cancelText } ]
            })
        } else {
            this.setState({
                listArr: this.props.listArr
            })
        }

    }

    timeFun(data) {

        if( data.value === -1 ) {
            this.props.callbackFun(data);
        } else {
            this.time = setTimeout(() => {
                this.props.callbackFun(data);
            }, this.state.duration);
        }
    }

    handleSelect(e, index, data) {
        this.setState({
            animationStyle: 'down'
        });

        this.timeFun(data);
    }

    handleBack() {
        this.setState({
            animationStyle: 'down'
        });

        this.timeFun({});
    }


    render() {
        const fadeInUp = {
            from: {
                bottom: -((this.state.listArr.length * 50) + phoneTypeTool.phoneType().footerPopBottom),
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
                bottom: -((this.props.listArr.length * 70) + phoneTypeTool.phoneType().footerPopBottom + 20),
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
                            this.state.listArr.map((data, index) => (
                                <View style={ footerPopStyle.listBlock } key={index}>
                                    <TouchableOpacity
                                        style={ footerPopStyle.listBlockInfo }
                                        onPress={(e) => this.handleSelect(e, index, data)}>
                                        <Text style={[ footerPopStyle.listText, { textAlign: "center"  } ]}>{data.text}</Text>

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
