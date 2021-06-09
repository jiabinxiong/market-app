import React from "react";
import { View, Text, Modal, Image } from "react-native";
import Toast from 'react-native-root-toast';

import { modalStyle, loadingModalStyle } from '../styles';

export const ToastComponent = (props) => {
    const [ toastShow, getToastShow ] = React.useState(true);
    let propsNew = {};
    Object.keys(props).forEach((key) => {
        if(key !== 'text' || key !== 'time') {
            propsNew[key] = props[key];
        }
    })

    if( props.position === undefined ) {
        propsNew.position = 0;
    }

    if( props.shadow === undefined ) {
        propsNew.shadow = false;
    }

    React.useEffect(() => {
        setTimeout(() => {
            getToastShow(false)
        }, props.time === undefined ? 3000 : props.time)
    });


    return (
        <Toast visible={toastShow} {...propsNew}>
            {
                props.children === undefined ? <Text>{ props.text }</Text> : props.children
            }
        </Toast>
    );
}
