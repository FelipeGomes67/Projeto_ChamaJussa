import { StyleSheet } from "react-native";

export const CriarOSStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
    },

    Text: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 16,
        textAlign: 'center'
    },

    cardProblema: {
        width: '80%',
        height: '78%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    Label: {
        paddingLeft: 3,
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 8,
        marginTop: 16,
    },
    Input: {
        paddingLeft: 3,
        fontSize: 12,
        backgroundColor: '#F3F4F6',
        borderColor: '#E0E1E3',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        height: 30
    },
    inputDescricao: {
        paddingLeft: 3,
        fontSize: 12,
        backgroundColor: '#F3F4F6',
        borderColor: '#E0E1E3',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        height: 60,
        textAlignVertical: 'top',
    },
    PlaceholderText: {
        color: '#999',
        fontSize: 14,
    },
    Button: {
        backgroundColor: '#2F6FED',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 28,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});