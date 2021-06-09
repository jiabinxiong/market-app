import {
    StyleSheet,
  } from 'react-native';
  
 export const searchStyle = StyleSheet.create({    
    iptBlock: {
        position: "relative",        
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
        backgroundColor: "#fff",
        borderRadius: 20        
    },
    icon: {
        position: "absolute",
        top: 8,
        left: 8,
        fontSize: 30,
        fontWeight: "bold"
    },  
    ipt: {
        height: 40,
        
        paddingLeft: 40,
        paddingRight: 15,
    }
});