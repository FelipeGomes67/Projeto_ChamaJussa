import { StyleSheet } from "react-native"
export const PerfilStyle = StyleSheet.create({
    main_section : {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    },
    Image_Profile : {
        width: 150,
        height: 150,
        borderRadius: 100,

    },
    section_card : {
        backgroundColor : "#FFF",
        width : 350,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        padding: 10,
        borderRadius: 5,
        marginBottom: 30
    },
    Profile_name : {
        fontWeight: 600,
    
    },
    Profile_name__email : {
        fontWeight: 600,
        color: "#2C7BE5"
    },
    button_leave : {
    width: 350,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#2C7BE5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 30
    },
    button_text : {
        color: "#fff",
        fontWeight: 500,
    },
    Card_edit_profile : {
        backgroundColor: "#fff",
        width : 350,
        height: 70,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        gap: 7,
        padding: 10,
        borderRadius: 5,
        marginBottom: 30        
    },
    icon_edit : {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    }
    ,
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        alignItems: 'stretch'
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginHorizontal: 4,
        backgroundColor: '#eee'
    },
    modalButtonText: {
        color: '#333',
        fontWeight: '600'
    }
    ,
    editPhotoButton: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 10
    },
    editPhotoButtonText: {
        color: '#333',
        fontWeight: '600'
    }
})