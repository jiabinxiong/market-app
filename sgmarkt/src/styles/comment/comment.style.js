import { StyleSheet } from "react-native";

export const commentScreenStyle = StyleSheet.create({
	textInputView: {
	    marginTop: -70,
	    padding: 8,
	    height: 70,
	    flexDirection: "row",
	    justifyContent: "space-between",
	    alignItems: "center",
	    backgroundColor: "#fff"
  	},
	textInput: {
		height: 42,
	    flexGrow: 1,
	    borderWidth: 1,
	    borderRadius: 10,
	    borderColor: "#CCC",
	    padding: 10,
	    fontSize: 16,
	    marginRight: 10,
	    textAlignVertical: "top",
	},
	btn: {
		paddingLeft: 20,
		paddingRight: 20,
		height: 41,
		marginTop: 7
	},
	btnText: {
		color: "#fff"
	}
});
