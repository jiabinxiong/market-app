import React from "react";
import { View, Text } from "react-native";
import { Footer, FooterTab, Button } from "native-base";

import { footerStyle } from "../styles"

const FooterComponent = (props) => {
	const tabs = [
		{
			component: "Home",
			name: "首页"
		},
		{
			component: "Nearby",
			name: "位置"
		},
		{
			component: "My",
			name: "我的"
		}
	];

	const lrStyle = index => {

		if(index === 0 ) {
			return {
				borderTopLeftRadius: 25,
				borderBottomLeftRadius: 25
			};
		} else if(index === tabs.length-1) {
			return {
				borderTopRightRadius: 25,
				borderBottomRightRadius: 25
			};
		} else {
			return {};
		}
	};

	return (
        <View style={ footerStyle.area }>
			<Footer
            	style={ footerStyle.block() }>
	          	<FooterTab
		          	style={ footerStyle.tab }>
		          	{
		          		tabs.map((data, index) => (
							<Button
                                onPress={() => {
                                    props.props.navigation.push(data.component);
                                }}
								active={ props.props.route.name === data.component ? true : false }
								style={
									[
										lrStyle(index),
										props.props.route.name === data.component ? footerStyle.tabActive : footerStyle.btn
									]
								}
								key={index}>
				            	<Text style={ props.props.route.name === data.component ? footerStyle.btnText : {} }>{ data.name}</Text>
				            </Button>
		          		))
		          	}

	          </FooterTab>
	        </Footer>
        </View>
	);
};

export default FooterComponent;
