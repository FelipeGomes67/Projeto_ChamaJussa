import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { Footer } from "../../Components/footer/Footer";
import { PerfilStyle } from "./perfilStyle";
import { useNavigation } from "@react-navigation/native";



export function Perfil () {

    const navigation = useNavigation()
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [name, setName] = useState('Torolho')
    const [email, setEmail] = useState('torolho@gmail.com')
    const [editName, setEditName] = useState(name)
    const [editEmail, setEditEmail] = useState(email)
    const [photo, setPhoto] = useState()

    function openEditModal(){
        setEditName(name)
        setEditEmail(email)
        setIsEditModalVisible(true)
    }

    function saveProfile(){
        setName(editName)
        setEmail(editEmail)
        setIsEditModalVisible(false)
    }


    return(
        <View style={PerfilStyle.main_section}>
        <View style={PerfilStyle.section_card}>

            <Image source={require("../../../assets/fotoperfilex.png")} style={PerfilStyle.Image_Profile}/>
            <Text style={PerfilStyle.Profile_name}>{name}</Text>
            <Text style={PerfilStyle.Profile_name__email}>{email}</Text>

        </View>

        <View style={PerfilStyle.Card_leave}>

        <TouchableOpacity 
        style={PerfilStyle.button_leave} 
        onPress={() => navigation.navigate('Login')}
        >
            <Text style={PerfilStyle.button_text}>Sair</Text>
        </TouchableOpacity>

        </View>

        <View style={PerfilStyle.Card_edit_profile}>
            <TouchableOpacity onPress={openEditModal} style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image
                    source={require("../../../assets/Perfil.png")}
                    style={PerfilStyle.icon_edit}
                />
                <Text style={PerfilStyle.Profile_name}>Editar Perfil</Text>
            </TouchableOpacity>
        </View>

        <Modal
            visible={isEditModalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setIsEditModalVisible(false)}
        >
            <View style={PerfilStyle.modalOverlay}>
                <View style={PerfilStyle.modalContent}>
                    <Text style={PerfilStyle.modalTitle}>Editar Perfil</Text>

                    <TouchableOpacity style={PerfilStyle.editPhotoButton} onPress={setPhoto}>
                        <Text style={PerfilStyle.editPhotoButtonText}>Editar Foto</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={PerfilStyle.input}
                        value={editName}
                        onChangeText={setEditName}
                        placeholder="Nome"
                    />
                    <TextInput
                        style={PerfilStyle.input}
                        value={editEmail}
                        onChangeText={setEditEmail}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <View style={PerfilStyle.modalButtons}>
                        <TouchableOpacity style={PerfilStyle.modalButton} onPress={() => setIsEditModalVisible(false)}>
                            <Text style={PerfilStyle.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[PerfilStyle.modalButton, {backgroundColor: '#2C7BE5'}]} onPress={saveProfile}>
                            <Text style={[PerfilStyle.modalButtonText, {color: '#fff'}]}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

        <Footer/>
        </View>

    )
}