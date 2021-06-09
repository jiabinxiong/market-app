// import React from "react";
// import { View, Text, Image, TouchableOpacity,  Animated, Button } from "react-native";
// import { SharedElement } from 'react-navigation-shared-element';
//
//
// import { TEST_HTTP } from "../../constants";
// const testImgArr = [
// 	{ id: 1, uri: `${TEST_HTTP}1-1.jpg` },{ id: 2, uri: `${TEST_HTTP}1-2.jpg` },
// 	{ id: 3, uri: `${TEST_HTTP}1-3.jpg` },{ id: 4, uri: `${TEST_HTTP}1-4.jpg` },
// 	{ id: 5, uri: `${TEST_HTTP}1-5.jpg` }
// ];
//
// export default class NearbyScreen extends React.Component {
//
// 	render() {
// 		const { navigation } = this.props;
//
// 		return (
// 			<View>
//                 <Button title="open login" onPress={() => navigation.navigate("Login")}></Button>
//                 <Button title="open Sign Up "></Button>
// 			  	{/*{*/}
// 			  	{/*	testImgArr.map((item, index) => (*/}
// 				{/*		<TouchableOpacity key={index} onPress={() => navigation.navigate('Img', {item})}>*/}
//                 {/*            <SharedElement id={`item.${item.id}.photo`}>*/}
//                 {/*                <Image style={{ width: 200, height: 200 }} source={{*/}
//                 {/*                    uri: item.uri*/}
//                 {/*                }} />*/}
// 			    {/*    		</SharedElement>*/}
// 				{/*      	</TouchableOpacity>*/}
// 			  	{/*	))*/}
// 			  	{/*}*/}
//  			</View>
// 		);
// 	}
// }


// import React, { Component } from 'react';
// import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import Video from 'react-native-video';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         backgroundColor: 'blue',
//         marginBottom: 10,
//     },
//     text: {
//         color: 'white',
//         fontSize: 20,
//         textAlign: 'center',
//     },
// });
//
//
// export default class NearbyScreen extends Component {
//     constructor() {
//         super();
//         this.state = {
//             image: null,
//             images: null,
//         };
//     }
//
//     componentDidMount() {
//
//     }
//
//     pickSingleWithCamera(cropping, mediaType = 'photo') {
//         ImagePicker.openCamera({
//             cropping: cropping,
//             width: 500,
//             height: 500,
//             includeExif: true,
//             mediaType,
//         })
//             .then((image) => {
//                 console.log('received image', image);
//                 this.setState({
//                     image: {
//                         uri: image.path,
//                         width: image.width,
//                         height: image.height,
//                         mime: image.mime,
//                     },
//                     images: null,
//                 });
//             })
//             .catch((e) => alert(e));
//     }
//
//     pickSingleBase64(cropit) {
//         ImagePicker.openPicker({
//             width: 300,
//             height: 300,
//             cropping: cropit,
//             includeBase64: true,
//             includeExif: true,
//         })
//             .then((image) => {
//                 console.log('received base64 image');
//                 this.setState({
//                     image: {
//                         uri: `data:${image.mime};base64,` + image.data,
//                         width: image.width,
//                         height: image.height,
//                     },
//                     images: null,
//                 });
//             })
//             .catch((e) => alert(e));
//     }
//
//     cleanupImages() {
//         ImagePicker.clean()
//             .then(() => {
//                 console.log('removed tmp images from tmp directory');
//             })
//             .catch((e) => {
//                 alert(e);
//             });
//     }
//
//     cleanupSingleImage() {
//         let image =
//             this.state.image ||
//             (this.state.images && this.state.images.length
//                 ? this.state.images[0]
//                 : null);
//         console.log('will cleanup image', image);
//
//         ImagePicker.cleanSingle(image ? image.uri : null)
//             .then(() => {
//                 console.log(`removed tmp image ${image.uri} from tmp directory`);
//             })
//             .catch((e) => {
//                 alert(e);
//             });
//     }
//
//     cropLast() {
//         if (!this.state.image) {
//             return Alert.alert(
//                 'No image',
//                 'Before open cropping only, please select image'
//             );
//         }
//
//         ImagePicker.openCropper({
//             path: this.state.image.uri,
//             width: 200,
//             height: 200,
//         })
//             .then((image) => {
//                 console.log('received cropped image', image);
//                 this.setState({
//                     image: {
//                         uri: image.path,
//                         width: image.width,
//                         height: image.height,
//                         mime: image.mime,
//                     },
//                     images: null,
//                 });
//             })
//             .catch((e) => {
//                 console.log(e);
//                 Alert.alert(e.message ? e.message : e);
//             });
//     }
//
//     pickSingle(cropit, circular = false, mediaType) {
//         ImagePicker.openPicker({
//             width: 500,
//             height: 500,
//             cropping: cropit,
//             cropperCircleOverlay: circular,
//             sortOrder: 'none',
//             compressImageMaxWidth: 1000,
//             compressImageMaxHeight: 1000,
//             compressImageQuality: 1,
//             compressVideoPreset: 'MediumQuality',
//             includeExif: true,
//             cropperStatusBarColor: 'white',
//             cropperToolbarColor: 'white',
//             cropperActiveWidgetColor: 'white',
//             cropperToolbarWidgetColor: '#3498DB',
//         })
//             .then((image) => {
//                 console.log('received image', image);
//                 this.setState({
//                     image: {
//                         uri: image.path,
//                         width: image.width,
//                         height: image.height,
//                         mime: image.mime,
//                     },
//                     images: null,
//                 });
//             })
//             .catch((e) => {
//                 console.log(e);
//                 Alert.alert(e.message ? e.message : e);
//             });
//     }
//
//     pickMultiple() {
//         ImagePicker.openPicker({
//             multiple: true,
//             waitAnimationEnd: false,
//             sortOrder: 'desc',
//             includeExif: true,
//             forceJpg: true,
//         })
//             .then((images) => {
//                 this.setState({
//                     image: null,
//                     images: images.map((i) => {
//                         console.log('received image', i);
//                         return {
//                             uri: i.path,
//                             width: i.width,
//                             height: i.height,
//                             mime: i.mime,
//                         };
//                     }),
//                 });
//             })
//             .catch((e) => alert(e));
//     }
//
//     scaledHeight(oldW, oldH, newW) {
//         return (oldH / oldW) * newW;
//     }
//
//     renderVideo(video) {
//         console.log('rendering video');
//         return (
//             <View style={{ height: 300, width: 300 }}>
//                 <Video
//                     source={{ uri: video.uri, type: video.mime }}
//                     style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
//                     rate={1}
//                     paused={false}
//                     volume={1}
//                     muted={false}
//                     resizeMode={'cover'}
//                     onError={(e) => console.log(e)}
//                     onLoad={(load) => console.log(load)}
//                     repeat={true}
//                 />
//             </View>
//         );
//     }
//
//     renderImage(image) {
//         return (
//             <Image
//                 style={{ width: 300, height: 300, resizeMode: 'contain' }}
//                 source={image}
//             />
//         );
//     }
//
//     renderAsset(image) {
//         if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
//             return this.renderVideo(image);
//         }
//
//         return this.renderImage(image);
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//             <View style={styles.container}>
//                 <ScrollView>
//                     {this.state.image ? this.renderAsset(this.state.image) : null}
//                     {this.state.images
//                         ? this.state.images.map((i) => (
//                             <View key={i.uri}>{this.renderAsset(i)}</View>
//                         ))
//                         : null}
//                 </ScrollView>
//
//                 <TouchableOpacity
//                     onPress={() => this.pickSingleWithCamera(false)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single Image With Camera</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() =>
//                         this.pickSingleWithCamera(false, (mediaType = 'video'))
//                     }
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single Video With Camera</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.pickSingleWithCamera(true)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>
//                         Select Single With Camera With Cropping
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.pickSingle(false)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.cropLast()} style={styles.button}>
//                     <Text style={styles.text}>Crop Last Selected Image</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.pickSingleBase64(false)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single Returning Base64</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.pickSingle(true)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single With Cropping</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.pickSingle(true, true)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Single With Circular Cropping</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={this.pickMultiple.bind(this)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Select Multiple</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={this.cleanupImages.bind(this)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Cleanup All Images</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={this.cleanupSingleImage.bind(this)}
//                     style={styles.button}
//                 >
//                     <Text style={styles.text}>Cleanup Single Image</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }


// import React from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import ViewShot from "react-native-view-shot";
// import {PESDK, PhotoEditorModal, Configuration} from 'react-native-photoeditorsdk';
// import {VESDK} from 'react-native-videoeditorsdk';
//
// import {
//     SoftLightBlend,
//     Emboss,
//     Earlybird,
//     Invert,
//     RadialGradient,
//     ImageFilter
// } from 'react-native-image-filter-kit';
//
//
// let configuration: Configuration = {
//
// }
//
// export default class NearbyScreen extends React.Component {
//     componentDidMount () {
//         // this.refs.viewShot.capture().then(uri => {
//         //
//         //     console.log("do something with ", uri);
//         // });
//     }
//     testEdit() {
//
//     }
//
//     onImageLoad = () => {
//
//         this.refs.viewShot.capture().then(uri => {
//             alert("do something with ", uri);
//         })
//     };
//
//     render() {
//         return (
//             <View>
//                 <ViewShot ref="viewShot">
//                     <Text>...Something to rasterize...</Text>
//                     <Image onLoad={this.onImageLoad} />
//                 </ViewShot>
//                 {/*<ImageFilter*/}
//                 {/*    config={{*/}
//                 {/*        name: 'Tritanopia',*/}
//                 {/*        image: (*/}
//                 {/*            <Image*/}
//                 {/*                style={{ width: 320, height: 320 }}*/}
//                 {/*                source={require('../../img/comentTest.jpeg')}*/}
//                 {/*                resizeMode={'contain'}*/}
//                 {/*            />*/}
//                 {/*        )*/}
//                 {/*    }}*/}
//                 {/*/>*/}
//
//
//                 <Button
//                     title="image tools"
//                     onPress={() => this.testEdit() }
//                 />
//                 <Button title="Edit a sample image" onPress={() => {
//                     PESDK.openEditor(require('../../img/comentTest.jpeg'));
//                 }}/>
//                 <Button title="Edit a sample video" onPress={() => {
//                     VESDK.openEditor(require('../../img/video.mp4'));
//                 }}/>
//
//             </View>
//         );
//     }
// }



// import React, {Component} from "react";
// import {NativeModules, NativeEventEmitter, AppRegistry,
//     StyleSheet, Text, View, Button, Image, Dimensions, CameraRoll,
//     Platform, TextInput, StatusBar, ScrollView, TouchableOpacity} from "react-native";
// import RNImageTools from "react-native-image-tools";
//
// // const myModuleEvt = new NativeEventEmitter(NativeModules.RNImageTools);
// // myModuleEvt.addListener('photoLibraryImage', (data) => console.log("photoLibraryImage", data));
//
// const _width = Dimensions.get('window').width;
//
// export default class NearbyScreen extends Component {
//     constructor(props) {
//         super(props);
//
//         this._openGallery = this._openGallery.bind(this);
//         this._openEditor = this._openEditor.bind(this);
//
//         this.state = {
//             selectedImage: null,
//             originalImageUri: null,
//             editedImageUri: null,
//             outputFormat: 'JPEG',
//             quality: "70",
//             sampleImages: []
//         }
//     }
//
//     async componentDidMount() {
//         const hasPermission = await RNImageTools.checkImageLibraryPermission();
//         if (!hasPermission) {
//             await RNImageTools.requestImageLibraryPermission();
//         }
//
//         if (Platform === 'ios') {// in progress...
//             //RNImageTools.loadThumbnails();
//         }
//
//         // this is the auth mechanism for iOS only,
//         // for android these values need to come from your MainApplication.java, in this example app we chose to reference them from strings.xml
//         RNImageTools.authorize(
//             "client-id-here",
//             "client-secret-here",
//             "client-redirect-here"
//         );
//
//         const sampleImages = await RNImageToolsExample.sampleImages();
//
//         const originalImageUri = require('../../img/comentTest.jpeg');//some image that has metadata
//         //const originalImageUri = "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";//some image that has metadata
//
//         this.setState({
//             originalImageUri: originalImageUri,
//             selectedImage: null,
//             editedImageUri: null,
//             sampleImages: sampleImages
//         });
//     }
//
//     componentDidUpdate() {
//         // console.log("state", this.state);
//     }
//
//     static async sampleImages() {
//         const fetchParams = {
//             first: 100,
//             groupTypes: "SavedPhotos",
//             assetType: "Photos"
//         };
//
//         if (Platform.OS === "android") {
//             // not supported in android
//             delete fetchParams.groupTypes;
//         }
//
//         const photos = await CameraRoll.getPhotos(fetchParams);
//
//         return photos.edges.map((asset) => asset.node.image.uri);
//     }
//
//     async _openGallery() {
//         try {
//             const selected = await RNImageTools.selectImage({});
//
//             console.log("chosen image", selected);
//
//             const uri = selected.uri;
//
//             this.setState({
//                 originalImageUri: uri,
//                 editedImageUri: null,
//                 selectedImage: uri
//             });
//         } catch (e) {
//             console.log("cancelled", e);
//         }
//     }
//
//     async _openEditor() {
//         try {
//             const uri = await RNImageTools.openEditor({
//                 imageUri: this.state.originalImageUri,
//                 outputFormat: this.state.outputFormat,
//                 quality: parseInt(this.state.quality, 10),
//                 preserveMetadata: true,
//                 saveTo: 'photos'
//             });
//
//             console.log("edited uri", uri);
//
//             if (!uri) {
//                 console.log("editing cancelled");
//             } else {
//                 this.setState({
//                     editedImageUri: uri,
//                     selectedImage: uri
//                 });
//             }
//         } catch (e) {
//             console.warn("error", e);
//         }
//     }
//
//     render() {
//         return (
//             <ScrollView contentContainerStyle={styles.container}>
//                 <StatusBar hidden={true}/>
//
//                 <Text style={styles.welcome}>
//                     react-native image tools example
//                 </Text>
//
//                 <View style={{marginVertical: 2}}>
//                     <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 2}}>
//                         <ScrollView horizontal={true}>
//                             {
//                                 this.state.sampleImages.map((uri) => <TouchableOpacity key={uri} onPress={() => this.setState({originalImageUri: uri})}>
//                                         <Image style={{width: _width / 8, height: _width / 8, marginHorizontal: 2}} source={{uri: uri}}/>
//                                     </TouchableOpacity>
//                                 )
//                             }
//                         </ScrollView>
//                         <Button
//                             onPress={this._openGallery}
//                             title="..."
//                             color="#841584"
//                         />
//                     </View>
//                     <View style={{flex: 1, marginRight: 2}}>
//                         <TextInputField label="input image" value={this.state.originalImageUri} onChangeText={(value) => this.setState({originalImageUri: value})}/>
//                     </View>
//                 </View>
//
//                 {
//                     this.state.originalImageUri ? <View>
//                         <View style={{marginVertical: 4, flexDirection: 'row', justifyContent: 'center'}}>
//                             <TouchableOpacity onPress={() => this.setState({selectedImage: this.state.originalImageUri})}>
//                                 <View style={{borderWidth: 1, borderRadius: 4, borderColor: 'green', overflow: 'hidden'}}>
//                                     <Image style={{width: _width / 2, height: _width / 2}} source={{uri: this.state.originalImageUri}}/>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     </View> : null
//                 }
//
//                 <View style={{flexDirection: 'row'}}>
//                     <View style={{marginVertical: 4, flex: 1}}>
//                         <TextInputField label="output quality" value={this.state.quality.toString()} onChangeText={(value) => this.setState({quality: value})}/>
//                         <TextInputField label="output format" value={this.state.outputFormat} onChangeText={(value) => this.setState({outputFormat: value})}/>
//                     </View>
//                 </View>
//
//                 {
//                     this.state.originalImageUri ? <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//                         <View style={{marginVertical: 4}}>
//                             <Button
//                                 onPress={this._openEditor}
//                                 title="edit image"
//                                 color="#841584"
//                             />
//                         </View>
//                     </View> : null
//                 }
//
//                 {
//                     this.state.editedImageUri ? <View style={{marginVertical: 4, flexDirection: 'row', justifyContent: 'center'}}>
//                         <TouchableOpacity onPress={() => this.setState({selectedImage: this.state.editedImageUri})}>
//                             <View style={{borderWidth: 1, borderRadius: 4, borderColor: 'blue'}}>
//                                 <Image style={{width: _width / 2, height: _width / 2}} source={{uri: this.state.editedImageUri}}/>
//                             </View>
//                         </TouchableOpacity>
//                     </View> : null
//                 }
//
//                 <MetadataView image={this.state.selectedImage}/>
//             </ScrollView>
//         );
//     }
// }
//
// class TextInputField extends Component {
//     render() {
//         return <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 4}}>
//             <Text style={{marginRight: 4, fontSize: 10}}>{this.props.label}</Text>
//             <View style={[styles.textContainer]}>
//                 <TextInput underlineColorAndroid="transparent" style={styles.textInput} {...this.props} />
//             </View>
//         </View>
//     }
// }
//
// class MetadataView extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             imageData: null
//         }
//     }
//
//     componentDidMount() {
//         this._update();
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (this.props.image !== prevProps.image) {
//             this._update();
//         }
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         //console.log("metadata", nextState.metadata);
//     }
//
//     async _update() {
//         const imageUri = this.props.image;
//         if (!imageUri) {
//             return;
//         }
//
//         Image.getSize(imageUri, (width, height) => {
//             this.setState({width, height})
//         }, (err) => {
//             console.warn("failed to get image size", err);
//         });
//
//         try {
//             console.log("loading data for", imageUri);
//             const imageData = await RNImageTools.imageData(imageUri);
//             this.setState({imageData});
//         } catch (e) {
//             console.log("failed to get image metadata", e);
//         }
//     }
//
//     _format(metadata, parent) {
//         const arr = [];
//         for (let key in metadata) {
//             const value = metadata[key];
//             const type = typeof value;
//             const isArray = (value instanceof Array);
//             const isObject = type === 'object' && !isArray;
//
//             const valueAsText = !!value ? JSON.stringify(value) : "";
//
//             const id = parent + "_" + key;
//
//             arr.push(
//                 <View key={id} style={{flexDirection: 'row'}}>
//                     <Text style={{fontSize: 8, color: "#d1d2cd", fontWeight: isObject ? "600" : "200"}}>{key}</Text>
//                     {
//                         isObject ? this._format(value, id) : <Text key={key} style={{fontSize: 8, color: "#d1d2cd"}}>: {valueAsText}</Text>
//                     }
//                 </View>
//             );
//         }
//         return <View style={{padding: 4}}>{arr}</View>;
//     }
//
//     render() {
//         return <View style={{flex: 1, backgroundColor: '#666666'}}>
//             <View style={{padding: 4}}>
//
//                 {this.state.imageData ? <View>
//                     <Text style={{fontSize: 14, color: "#d1d2cd"}}>Image data</Text>
//
//                     {this._format(this.state.imageData, 'root')}
//
//                     <Text style={{fontSize: 8, color: "#d1d2cd"}}>actual dimensions: {this.state.width}x{this.state.height}</Text>
//                 </View> : <Text style={{fontSize: 8, color: "#d1d2cd"}}>select an image</Text>}
//             </View>
//         </View>
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#e4ffe2',
//         padding: 2
//     },
//     welcome: {
//         fontSize: 14,
//         textAlign: 'center',
//         margin: 10,
//     },
//     textContainer: {
//         borderWidth: 1,
//         borderRadius: 4,
//         overflow: 'hidden',
//         backgroundColor: "#666666",
//         flex: 1
//     },
//     textInput: {
//         color: "#d1d2cd",
//         paddingTop: 0,
//         paddingLeft: 2,
//         paddingRight: 0,
//         paddingBottom: 0,
//         fontSize: 16,
//         height: 24,
//     }
// });



import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { CutComponent } from '../../components';

export default class NearbyScreen extends React.Component {
    render() {
        return (
            <CutComponent/>
        );
    }
}
