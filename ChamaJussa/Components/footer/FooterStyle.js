import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 16,
    },
    Item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    CirculoAtivo: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icone: {
        width: 24,
        height: 24,
    },
    IconeAtivo: {
        tintColor: '#000',
    },
    Label: {
        fontSize: 12,
        color: '#999',
    },
    LabelAtivo: {
        color: '#000',
        fontWeight: 'bold',
    },
});