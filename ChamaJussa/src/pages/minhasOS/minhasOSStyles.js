import { StyleSheet } from "react-native";

export const MinhasOSStye = StyleSheet.create({
    main_section: {
        flex: 1,
        margin: 15,
    },
    header_section: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
    },
    header_section_texts: {

        flex: 1,
    },
    header_section_textnorm: {
        fontSize: 24,
    },
    header_section_textstrong: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    header_section_button: {
        backgroundColor: '#006FFF',
        width: 80,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_section_button_text: {
        color: 'white',
        fontSize: 16,
    },
    section_filtro: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginVertical: 10,
    },
    section_filtro_button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justify: 'center',

    },
    button_active: {
        backgroundColor: '#006FFF',
        borderColor: '#006FFF',
    },
    button_inactive: {
        backgroundColor: 'transparent',
        borderColor: '#2B68E8',
    },
    text_active: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    text_inactive: {
        color: '#A0A0A0',
        fontWeight: '400',
        fontSize: 14,
    },
    section_card: {
        borderWidth: 2,
        borderColor: 'red',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 18,
        marginVertical: 10,
        elevation: 4,
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    },
    card_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    card_code: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#006FFF',
    },
    status_badge: {
        backgroundColor: '#DCEBFF',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 12,
    },
    status_text: {
        color: '#006FFF',
        fontWeight: '600',
        fontSize: 14,
    },
    card_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    card_description: {
        fontSize: 14,
        color: '#707070',
        lineHeight: 20,
    },

    //Modal
    modal_overlay: {
        flex: 1,
        backgroundColor: "#f3f4f6",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    modal_container: {
        width: "100%",
        maxHeight: "100%",
    },
    modal_main_title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000",
        marginBottom: 0,
    },
    modal_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    modal_close_wrapper: {
        flex: 1,
        alignItems: "flex-end",
    },
    modal_close_button: {
        padding: 4,
    },
    modal_card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        elevation: 5,
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    },
    modal_os_title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
    modal_os_date: {
        fontSize: 13,
        color: "#808080",
        marginBottom: 18,
    },
    info_group: {
        gap: 14,
    },
    info_row: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    info_icon: {
        marginRight: 10,
        marginTop: 2,
    },
    info_label: {
        fontSize: 13,
        color: "#808080",
    },
    info_value: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#222222",
    },
    divider: {
        height: 1,
        backgroundColor: "#E5E5E5",
        marginVertical: 18,
    },
    section_title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 8,
    },
    section_text: {
        fontSize: 14,
        color: "#555555",
        lineHeight: 20,
        marginBottom: 18,
    },
    problem_image: {
        width: "100%",
        height: 150,
        borderRadius: 12,
    },
    edit_button: {
        marginTop: 16,
        borderWidth: 1.5,
        borderColor: "#006FFF",
        borderRadius: 12,
        paddingVertical: 12,
        backgroundColor: "#F5F8FF",
        alignItems: "center",
    },
    edit_button_text: {
        color: "#006FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    modal_scroll_content: {
        paddingBottom: 24,
    },
    input_label: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#444444",
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#F3F4F6",
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: "#000000",
    },
    input_multiline: {
        height: 90,
        textAlignVertical: "top",
    },
    edit_actions_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        marginTop: 16,
    },
    action_button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    cancel_button: {
        backgroundColor: "#E5E7EB",
        borderWidth: 1,
        borderColor: "#D1D5DB",
    },
    cancel_button_text: {
        color: "#374151",
        fontWeight: "bold",
        fontSize: 15,
    },
    save_button: {
        backgroundColor: "#006FFF",
    },
    save_button_text: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 15,
    },
})