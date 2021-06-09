import React from 'react';
import { View, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class PublishScreen extends React.Component {
    componentDidMount() {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }
    render() {
        return (
            <View>
                <Text>push</Text>
            </View>
        );
    }
}
