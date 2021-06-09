import React from "react";
import { View, Text, Modal, Image, TouchableOpacity } from "react-native";

import { modalStyle, loadingModalStyle, popWarningModalStyle } from '../styles';

class ModalComponent extends React.Component {
    render() {
        const {
            animationType = "none",
            transparent=true,
            visible=false
        } = this.props;
        return (
            <Modal
                animationType={ animationType }
                transparent={transparent}
                visible={visible}
            >
                <View
                    style={ modalStyle.cnt }>
                    { this.props.children }
                </View>
            </Modal>
        );
    }
}

// loading
export class LoadingModalComponent extends React.Component {
    render() {
        return (
            <ModalComponent {...this.props}>
                <View style={ loadingModalStyle.cnt } >
                    <Image source={require("../img/loading.gif")}/>
                </View>
            </ModalComponent>
        );
    }
}

//
export class PopWarningComponent extends React.Component {
    render() {
        return (
            <ModalComponent {...this.props}>
                <View style={ popWarningModalStyle.cnt }>
                    <View style={  popWarningModalStyle.textBlock }>
                        <Text style={ popWarningModalStyle.textInfo }>{ this.props.text }</Text>
                    </View>
                    <View style={ popWarningModalStyle.funBlock }>

                        <TouchableOpacity style={[ popWarningModalStyle.clearBtn, popWarningModalStyle.btn ]}  onPress={ () => this.props.clearCallback() }>
                            <View >
                                <Text style={[ popWarningModalStyle.btnText, popWarningModalStyle.clearBtnText ]}>取消</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[ popWarningModalStyle.determineBtn, popWarningModalStyle.btn ]}  onPress={ () => this.props.determineCallback() }>
                            <View >
                                <Text style={ popWarningModalStyle.btnText }>确定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalComponent>
        );
    }
}


