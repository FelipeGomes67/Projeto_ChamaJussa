import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    Container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingBottom: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    Item: {
        alignItems: "center",
        justifyContent: "center",
    },

    Icone: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },

    Label: {
        fontSize: 12,
        color: "#999999",
        marginTop: 4,
    },
});