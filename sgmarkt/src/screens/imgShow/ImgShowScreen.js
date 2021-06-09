import React from "react";
import { View, Text, Dimensions } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

const ImgShowScreen = props => {
    // const dataRebuild = () => {
    //     const { data } = props.route.params;
    //     const images = [];
    //     let index = 0;
    //
    //     for(let i = 0; i < data.length; i++) {
    //         if( data[i].id == props.route.params.item.id) {
    //             index = data[i].id-1;
    //         }
    //         images.push({
    //             url: data[i].uri,
    //             width: Dimensions.get("window").width
    //         });
    //     }
    //
    //     return {
    //         images,
    //         index
    //     };
    // };
    const handleSwipeDown = () => {

        props.navigation.goBack();
    }

    return (
        <View style={{ height: Dimensions.get('window').height}}>
            <ImageViewer
                onSwipeDown={() => handleSwipeDown()}
                enableSwipeDown={true}
                index={ props.route.params.indexImg }
                imageUrls={props.route.params.imgData}/>
        </View>
    );
};

export default ImgShowScreen;
