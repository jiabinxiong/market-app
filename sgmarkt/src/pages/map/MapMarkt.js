import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MapView } from "react-native-amap3d";

export default class MarktMap extends React.Component {
	render() {		
		return (			
			<MapView
				style={StyleSheet.absoluteFill}
			  center={{
			    latitude: 39.91095,
			    longitude: 116.37296
			  }}
			/>
		);
	}
}