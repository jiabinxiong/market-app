import {
    StyleSheet,
} from 'react-native';

export const scrollBottomSheetStyle = StyleSheet.create({
    contentContainerStyle: {
        padding: 16,
        backgroundColor: '#F3F4F9',
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHandle: {
        width: 40,
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4
    }
});
