import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import { BACK_ICON } from '../constants/icon.constant';

/*
*
* */
export default class HeaderNavComponent extends React.Component {
    render() {


        return (
            <Header style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}  noShadow={true}>
                <Left>
                    <IconMaterialCommunityIcons
                        style={{ fontSize: 30 }}
                        name={BACK_ICON}
                        color="#3484ff"
                    />
                </Left>
                <Body>
                    <Title>{ this.props.title }</Title>
                </Body>
                <Right>
                    <Button transparent>

                    </Button>
                </Right>
            </Header>
        );
    }
}



