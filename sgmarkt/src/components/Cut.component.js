import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import GestureHandler, {PinchGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SIZE = width;

const styles = StyleSheet.create({
    image: {
        width: SIZE,
        height: SIZE,
        resizeMode: 'cover'
    }
});
//
// export default class CutComponent extends React.Component {
//
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <PinchGestureHandler>
//                     <Image
//                         style={{ flex: 1, width: null, height: '100%' }}
//                         source={{
//                             uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608296156885&di=0d1341e1a0c867903fd9567e2558ec99&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1009%2F20%2Fc3%2F5264053_5264053_1284984891775_mthumb.jpg'
//                         }}
//                         resizeMode="contain" />
//                 </PinchGestureHandler>
//             </View>
//         )
//     }
// }

export default class CutComponent extends React.Component {

    logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
        console.log('');
        console.log('');
        console.log('-------------');
        console.log('Event: ', event);
        console.log('GestureState: ', gestureState);
        console.log('ZoomableEventObject: ', zoomableViewEventObject);
        console.log('');
        console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: '100%', height: 300,  overflow: 'hidden', backgroundColor: "red" }}>
                    <ReactNativeZoomableView
                        zoomEnabled={true}
                        maxZoom={1.5}
                        minZoom={1}
                        zoomStep={0.25}
                        initialZoom={0.9}
                        bindToBorders={true}
                        captureEvent={true}
                        onZoomAfter={this.logOutZoomState}
                    >
                        <Image
                            style={{ flex: 1, width: null, height: null }}
                            source={{
                                uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608296156885&di=0d1341e1a0c867903fd9567e2558ec99&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1009%2F20%2Fc3%2F5264053_5264053_1284984891775_mthumb.jpg'
                            }}
                            resizeMode="stretch" />
                    </ReactNativeZoomableView>
                </View>

            </View>

        );
    }
}



// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import Animated from 'react-native-reanimated';
// import GestureHandler, { PinchGestureHandler, State } from 'react-native-gesture-handler';
//
// const screen = Dimensions.get('window');
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     box: {
//         width: 100, height: 100, backgroundColor: "red"
//     },
//     image: {
//         width: screen.width,
//         height: screen.width,
//     },
// });
//
// export default class CutComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.translateX = new Animated.Value(0);
//         // this.onGestureEvent = Animated.event([
//         //     {
//         //         nativeEvent: {
//         //             translationX: this.translateX
//         //         }
//         //     }
//         // ]);
//
//
//     }
//
//     scale = new Animated.Value(1);
//     onPinchEvent = Animated.event([
//         { nativeEvent: { scale: this.scale } }
//     ]);
//
//     onHandlerStateChange = event => {
//         console.log(event);
//     }
//
//     render() {
//         return (
//             <View style={ styles.container } >
//
//                 <PinchGestureHandler
//                     onGestureEvent={ this.onPinchEvent }
//                     onHandlerStateChange={ this.onHandlerStateChange }
//                 >
//                     <Animated.View
//                         style={[
//                             styles.box,
//                             {
//                                 transform: [{ scale: this.scale }]
//                             }
//                         ]}
//                     />
//                 </PinchGestureHandler>
//             </View>
//         );
//     }
// }



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';
//
// const {
//     set,
//     cond,
//     eq,
//     spring,
//     startClock,
//     stopClock,
//     clockRunning,
//     defined,
//     Value,
//     Clock,
//     event
// } = Animated;
//
// function runSpring(clock, value, velocity, dest) {
//     const state = {
//         finished: new Value(0),
//         velocity: new Value(0),
//         position: new Value(0),
//         time: new Value(0)
//     };
//
//     const config = {
//         damping: 7,
//         mass: 1,
//         stiffness: 121.6,
//         overshootClamping: false,
//         restSpeedThreshold: 0.001,
//         restDisplacementThreshold: 0.001,
//         toValue: new Value(0)
//     };
//
//     return [
//         cond(clockRunning(clock), 0, [
//             set(state.finished, 0),
//             set(state.velocity, velocity),
//             set(state.position, value),
//             set(config.toValue, dest),
//             startClock(clock)
//         ]),
//         spring(clock, state, config),
//         cond(state.finished, stopClock(clock)),
//         state.position
//     ];
// }
// export default class CutComponent extends React.Component {
//     constructor() {
//         super();
//         this.translateX = new Value(0);
//         const dragX = new Value(0);
//         const state = new Value(-1);
//         const dragVX = new Value(0);
//
//         this.translateY = new Value(0);
//         const dragY = new Value(0);
//         const dragVY = new Value(0);
//
//         this.onGestureEvent = event([
//             {
//                 nativeEvent: {
//                     translationX: dragX,
//                     velocityX: dragVX,
//                     translationY: dragY,
//                     velocityY: dragVY,
//                     state: state
//                 }
//             }
//         ]);
//
//         const clock = new Clock();
//         const transX = new Value();
//         this.translateX = cond(
//             eq(state, State.ACTIVE),
//             [
//                 //state active,
//                 stopClock(clock),
//                 set(transX, dragX),
//                 transX
//             ],
//             [
//                 set(
//                     transX,
//                     cond(defined(transX), runSpring(clock, transX, dragVX, 0), 0)
//                 )
//             ]
//         );
//
//
//         const transY = new Value();
//         this.translateY = cond(
//             eq(state, State.ACTIVE),
//             [
//                 //state active,
//                 stopClock(clock),
//                 set(transY, dragY),
//                 transY
//             ],
//             [
//                 set(
//                     transY,
//                     cond(defined(transY), runSpring(clock, transY, dragVY, 0), 0)
//                 )
//             ]
//         );
//     }
//     componentDidMount() {
//         // setInterval(() => {
//         //   for (i = 0; i < 5000; i++) {
//         //     console.log('blocking thread');
//         //   }
//         // }, 1000);
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <PanGestureHandler
//                     onGestureEvent={this.onGestureEvent}
//                     onHandlerStateChange={this.onGestureEvent}
//                 >
//                     <Animated.View
//                         style={[
//                             styles.box,
//                             {
//                                 transform: [{ translateX: this.translateX}]
//                             }
//                         ]}
//                     />
//                 </PanGestureHandler>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     box: {
//         height: 100,
//         width: 100,
//         backgroundColor: 'red'
//     }
// });
