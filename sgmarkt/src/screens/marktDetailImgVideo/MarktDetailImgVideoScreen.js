import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Container, Tab, Tabs } from "native-base";
import {   TabView,
    TabBar,
    SceneMap,
    NavigationState,
    SceneRendererProps, } from 'react-native-tab-view';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MarktDetailComment from './MarktDetailComment';

export default class MarktDetailImgVideoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            title: this.props.route.params.item.params.item.text
        });
    }

    render() {
        const renderScene = SceneMap({
            comment: () => <MarktDetailComment navigation={this.props.navigation}/>,
            img: () => <View><Text>img</Text></View>,
            video: () => <View><Text>video</Text></View>
        });

        // const renderScene = ({ route, jumpTo }) => {
        //     console.log(route);
        //     // switch (route.key) {
        //     //     case 'comment':
        //     //         return <MarktDetailComment/>;
        //     //     case 'img':
        //     //         return <View><Text>img</Text></View>;
        //     //     case 'video':
        //     //         return <View><Text>video</Text></View>;
        //     // }
        //     // if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
        //     //     return null;
        //     // }
        //     //
        //      // return <MarktDetailComment route={route} />;
        // };

        return (
            // <View>
            //     <Text>afafasfd</Text>
            // </View>
            <TabView
                navigationState={{
                    index: this.state.index,
                    routes: [
                        { key: 'comment', title: '图文评论' },
                        { key: 'img', title: '图片' },
                        { key: 'video', title: '视频' }
                    ]
                }}
                onIndexChange={ this.state.index}
                renderScene={renderScene}
                style={{ backgroundColor: "#fff",}}
                renderTabBar={props => (
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#ccc" }}>
                        <TabBar
                            {...props}
                            activeColor={"#3484ff"}
                            inactiveColor={'#000'}
                            indicatorStyle={{
                                height: 2,
                                backgroundColor: '#3484ff',

                            }}
                            tabStyle={{ width: 100 }}
                            scrollEnabled={true}
                            style={{
                                height: 50,
                                alignSelf: "center",
                                backgroundColor: "#fff",
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: "transparent",
                                shadowOpacity: 0,
                                elevation: 0,
                            }}
                            labelStyle={{
                                fontSize: 14
                            }}
                        />
                    </View>
                )}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});


// const Article = () => (
//     <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
//         <Text>realkfjlsfjdlakfafadf</Text>
//     </View>
// );
//
// const Contacts = () => (
//     <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );
//
// const Albums = () => (
//     <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );
//
// const Chat = () => (
//     <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );
//
// export default class MarktDetailImgVideoScreen extends React.Component {
//     // eslint-disable-next-line react/sort-comp
//     static title = 'Scrollable tab bar';
//     static backgroundColor = '#3f51b5';
//     static appbarElevation = 0;
//
//     state = {
//         index: 0,
//         routes: [
//             { key: 'article', title: '图文评论' },
//             { key: 'contacts', title: '图片' },
//             { key: 'albums', title: '视频' },
//         ],
//     };
//
//     handleIndexChange = (index: number) =>
//         this.setState({
//             index,
//         });
//
//     renderTabBar = (navigationState: State ) => (
//         <TabBar
//             {...props}
//             scrollEnabled
//             indicatorStyle={styles.indicator}
//             tabStyle={styles.tab}
//             labelStyle={styles.label}
//         />
//     );
//
//     renderScene = SceneMap({
//         albums: Albums,
//         contacts: Contacts,
//         article: () => <MarktDetailComment/>,
//     });
//
//     render() {
//         return (
//             <TabView
//                 navigationState={this.state}
//                 renderScene={this.renderScene}
//                 style={{ backgroundColor: "#fff" }}
//                 renderTabBar={(props) => (
//                     <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#ccc" }}>
//                         <TabBar
//                             {...props}
//                             activeColor={"#3484ff"}
//                             inactiveColor={'#000'}
//                             indicatorStyle={{
//                                 height: 2,
//                                 backgroundColor: '#3484ff',
//
//                             }}
//                             tabStyle={{ width: 100 }}
//                             scrollEnabled={true}
//                             style={{
//                                 height: 50,
//                                 alignSelf: "center",
//                                 backgroundColor: "#fff",
//                                 shadowOffset: { height: 0, width: 0 },
//                                 shadowColor: "transparent",
//                                 shadowOpacity: 0,
//                                 elevation: 0,
//                             }}
//                             labelStyle={{
//                                 fontSize: 14
//                             }}
//                         />
//                     </View>
//                 )}
//                 onIndexChange={this.handleIndexChange}
//             />
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     tabbar: {
//         backgroundColor: '#3f51b5',
//     },
//     tab: {
//         width: 120,
//     },
//     indicator: {
//         backgroundColor: '#ffeb3b',
//     },
//     label: {
//         fontWeight: '400',
//     },
// });
