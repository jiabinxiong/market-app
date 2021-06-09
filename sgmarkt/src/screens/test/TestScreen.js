import React, { Component } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import { FooterPopComponent, SelectPopFooterComponent } from '../../components';
import {CROP_PICKER} from '../../constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});


export default class NearbyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
    }

    openModal = () => {
        this.setState({isVisible: true});
    }


    pickSingleWithCamera(cropping, mediaType = 'photo') {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        })
            .then((image) => {
                console.log('received image', image);
                this.setState({
                    image: {
                        uri: image.path,
                        width: image.width,
                        height: image.height,
                        mime: image.mime,
                    },
                    images: null,
                });
            })
            .catch((e) => alert(e));
    }

    aa() {
        this.setState({isVisible: false});
        setTimeout(() => {
            this.pickSingleWithCamera();
        }, 10)

    }
    render() {
        return (
            <Container>

                <View style={styles.container}>
                    {
                        this.state.isVisible ? <Modal transparent={true}  >
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.aa()}>
                                <View >
                                    <Text>I am the modal content!</Text>
                                </View>
                            </TouchableOpacity>
                        </Modal> : null
                    }

                </View>
            </Container>

        );
    }
}
