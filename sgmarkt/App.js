import React, { Component } from 'react';
import { Provider } from "react-redux";
import { View, Text, TouchableOpacity, ViewPropTypes  } from "react-native";

import store from './src/store/store';

import AppNavigation from "./src/navigation";


import AV from 'leancloud-storage/core';
import * as adapters from '@leancloud/platform-adapters-react-native';
AV.setAdapters(adapters);
AV.init({
    appId: "HI2O0to5BhqXsL3LGJqwfFq6-gzGzoHsz",
    appKey: "3IoksFVyeorUdQHNMoRtlDDx",
    serverURL: "https://hi2o0to5.lc-cn-n1-shared.com"
});

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


class App extends Component {
	render() {
		return (
            <Provider store={ store }>
			    <AppNavigation/>
            </Provider>
		);
	}
}


export default App;




// import { NavigationContainer } from '@react-navigation/native';
// import { createSharedElementStackNavigator, SharedElement } from 'react-navigation-shared-element';

// const Stack = createSharedElementStackNavigator();


// class ListScreen extends React.Component {
//   render(item) {
//     const { navigation } = this.props;

//     return (
//       <TouchableOpacity onPress={() => navigation.push('Detail', { item })}>
//         <SharedElement id={`item.${item.id}.photo`}>
//           <Image source={{
// 	      	uri: "http://192.168.1.5:4000/1-10.jpg"
// 	      }} />
//         </SharedElement>
//       </TouchableOpacity>
//     );
//   }
// }


// const DetailScreen = props => {
//   const { item } = props.route.params;
//   return (
//     <SharedElement id={`item.${item.id}.photo`}>
//       <Image source={{
//       	uri: "http://192.168.1.5:4000/1-10.jpg"
//       }} />
//     </SharedElement>
//   );
// };


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="List">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           sharedElementsConfig={(route, otherRoute, showing) => {
//             const { item } = route.params;
//             return [`item.${item.id}.photo`];
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// export default App;
