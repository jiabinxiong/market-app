import React from "react";
import { View, Text, Image, Animated, Dimensions, SafeAreaView } from "react-native";
import { Container } from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';
import ImageViewer from 'react-native-image-zoom-viewer';
// import { SafeAreaView } from 'react-native-safe-area-context';

import { imgStyle } from "../../styles";

import { TEST_HTTP } from "../../constants";
const testImgArr = [
	{ uri: `${TEST_HTTP}1-1.jpg` },{ uri: `${TEST_HTTP}1-2.jpg` },
	{ uri: `${TEST_HTTP}1-3.jpg` },{ uri: `${TEST_HTTP}1-4.jpg` },{ uri: `${TEST_HTTP}1-5.jpg` },
	{ uri: `${TEST_HTTP}1-6.jpg` },{ uri: `${TEST_HTTP}1-7.jpg` },
	{ uri: `${TEST_HTTP}1-8.jpg` },{ uri: `${TEST_HTTP}1-9.jpg` },{ uri: `${TEST_HTTP}1-10.jpg` },
	{ uri: `${TEST_HTTP}1-11.jpg` },{ uri: `${TEST_HTTP}1-12.jpg` },{ uri: `${TEST_HTTP}1-13.jpg` },{ uri: `${TEST_HTTP}1-14.jpg` }
];

class ScaledImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source: { uri: this.props.uri } };
    }
    componentDidMount() {
        Image.getSize(this.props.uri, (width, height) => {
            if (this.props.width && !this.props.height) {
                this.setState({ width: this.props.width, height: height * (this.props.width / width) });
            } else if (!this.props.width && this.props.height) {
                this.setState({ width: width * (this.props.height / height), height: this.props.height });
            } else {
                this.setState({ width: width, height: height });
            }
        });
    }
    render() {
        return (
            <Image source={this.state.source} style={{ height: this.state.height, width: this.state.width }} />
        );
    }
}

export default class ImgScreen extends React.Component {

    dataRebuild() {
        // const { data } = this.props.route.params;
        // const images = [];
        //
        // for(let i = 0; i < data.length; i++) {
        //     images.push({
        //         url: data[i].uri,
        //
        //         width: Dimensions.get("window").width
        //     });
        // }
        //
        // return images;
    }
	render() {
		const { item, data } = this.props.route.params;
        this.dataRebuild();
        console.log(this.props.route.params.item);
		return (
            <View style={ [{height: Dimensions.get("window").height}, imgStyle.cnt ]}>
                <View style={{ height: Dimensions.get("window").height }} >
                    <SharedElement id={`item.${item.id}.photo`}>
                        <Image
                            style={{
                                resizeMode: "cover",
                                width: Dimensions.get("window").width, height: 200 }}
                            source={{
                                uri: item.uri
                            }}
                        />
                    </SharedElement>
                    {/*<ImageViewer*/}
                    {/*    index={3}*/}
                    {/*    imageUrls={this.dataRebuild()}/>*/}
                </View>
            </View>
		);
	}
}
