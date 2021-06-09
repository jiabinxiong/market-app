import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button } from "react-native";
import { Header, Left, Body, Right } from "native-base";
import { MapView } from "react-native-amap3d";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { headerStyle } from "../../styles";

export default class MapScreen extends React.Component {
	componentDidMount() {
		const { navigation } = this.props;

		navigation.setOptions({
			title: "",
			headerLeft: () => (
				<TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.props.navigation.goBack()}>
					<IconMaterialCommunityIcons	
  						style={ headerStyle.headerLeftIcon } 
                        name="arrow-left-thick" 		                        
                    color='#cccccc'/>	    
					</TouchableOpacity>
				
			)
		});
	}
	render() {		
		return (	
			<View>

		        <MapView	
		        	style={StyleSheet.absoluteFill, {  height: Dimensions.get('window').height  }}				
				  	center={{
					    latitude: 39.91095,
					    longitude: 116.37296
				  	}}
				/>
			</View>		
		);
	}
}