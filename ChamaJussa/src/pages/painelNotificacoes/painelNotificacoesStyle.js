import { StyleSheet } from "react-native";

export const PainelNotificacoesStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        alignItems: 'center'
    },

    Text: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 16,
        textAlign: 'center'
    },
    cardNotificacao: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    Icone: {
        width: 28,
        height: 28,
        marginRight: 10,
        marginTop: 30
    },
    titulo: {
        fontSize: 15,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 4
    },
    descricao: {
        fontSize: 13,
        color: '#6B7280',
        lineHeight: 18,
        marginBottom: 8
    },
    linhaRodape: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    data: {
        fontSize: 12,
        color: '#9CA3AF'
    },
    hora: {
        fontSize: 12,
        color: '#9CA3AF'
    }
})