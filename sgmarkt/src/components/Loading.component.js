import React from "react";
import { View, Text, Modal, Image } from "react-native";

import { modalStyle, loadingModalStyle } from '../styles';

export default class LoadingComponent extends React.Component {
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
                <View style={ loadingModalStyle.cnt } >
                    <Image source={require("../img/loading.gif")}/>
                </View>
            </Modal>
        );
    }
}

