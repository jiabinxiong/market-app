import React from "react";
import { View, Text, Dimensions, Modal, Image } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoom from 'react-native-image-pan-zoom';

const ImgShowScreen = props => {
    console.log(props.images);
    return (
        <Modal visible={true}  transparent={true} >
            <ImageViewer
                index={0}

                enableSwipeDown={true}
                imageUrls={props.images}/>
            {/*<ImageZoom cropWidth={Dimensions.get('window').width}*/}
            {/*           cropHeight={Dimensions.get('window').height}*/}
            {/*           imageWidth={200}*/}
            {/*           imageHeight={200}>*/}
            {/*    <Image style={{width:200, height:200}}*/}
            {/*           source={{uri:'http://192.168.1.2:3000/public/images/1607621352234.jpg'}}/>*/}
            {/*    <Image style={{width:200, height:200}}*/}
            {/*           source={{uri:'http://192.168.1.2:3000/public/images/1607621352234.jpg'}}/>*/}
            {/*</ImageZoom>*/}
        </Modal>
    );
};

export default ImgShowScreen;
