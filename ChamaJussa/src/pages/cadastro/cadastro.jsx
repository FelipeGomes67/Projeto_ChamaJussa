import { Text, View, TextInput, TouchableOpacity, Image, } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { CadastroStyle } from "./cadastroStyle";
import { useState } from "react";

export function Cadastro({ navigation }) {
    const [emailDigitado, setEmailDigitado] = useState("");
    const [usuarioDigitado, setUsuarioDigitado] = useState("");
    const [senhaDigitada, setSenhaDigitada] = useState("");
    const [tipodeusuario, setTipodeusuario] = useState('usuario');

    /*const [tiposDeUsuario, settiposDeUsuario] = useState([]);*/


    const tiposDeUsuario = [
        { id: 1, label: "Selecione...", value: "" },
        { id: 2, label: "Padrão", value: "usuario" },
        { id: 3, label: "Técnico", value: "tecnico" }
    ];


    return (
        <View style={CadastroStyle.main_section}>
            <View style={CadastroStyle.figure_section}>
                <Image
                    style={CadastroStyle.figure_section__img}
                    source={require("../../../assets/Jussa-Logo.png")}
                />
            </View>

            <View style={CadastroStyle.section_card}>
                <View style={CadastroStyle.teste}>

                    <View style={CadastroStyle.header_section}>
                        <Text style={CadastroStyle.header_section__tittle}>Chama Jussa</Text>
                        <Text style={CadastroStyle.header_section__subtittle}>Gerenciamento de Ordens e Serviços</Text>
                    </View>

                    <View style={CadastroStyle.login_user}>

                        <Text style={CadastroStyle.text_input}>E-mail</Text>
                        <TextInput
                            style={CadastroStyle.login_user__input}
                            placeholder="Digite seu Email"
                            placeholderTextColor="#0000005d"
                            value={emailDigitado}
                            onChangeText={setEmailDigitado}
                        />

                        <Text style={CadastroStyle.text_input}>Nome de Usuário</Text>
                        <TextInput
                            style={CadastroStyle.login_user__input}
                            placeholder="Digite seu User"
                            placeholderTextColor="#0000005d"
                            value={usuarioDigitado}
                            onChangeText={setUsuarioDigitado}
                        />

                        <Text style={CadastroStyle.text_input}>Senha</Text>
                        <TextInput
                            style={CadastroStyle.login_user__input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#0000005d"
                            secureTextEntry={true}
                            value={senhaDigitada}
                            onChangeText={setSenhaDigitada}
                        />

                        <Text style={CadastroStyle.text_input}>Tipo de Usuário</Text>
                        
                        <View style={CadastroStyle.login_user__picker_container}>
                            <Picker
                                selectedValue={tipodeusuario}
                                onValueChange={(itemValue) => setTipodeusuario(itemValue)}
                                style={CadastroStyle.login_user__picker}
                            >
                                {tiposDeUsuario.map((tipo) => (
                                    <Picker.Item key={tipo.id} label={tipo.label} value={tipo.value} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={CadastroStyle.text_input}>Foto de Perfil</Text>
                        <TouchableOpacity style={CadastroStyle.login_user__input}>
                            <Text style={CadastroStyle.login_user__button_text_image}>Insira imagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={CadastroStyle.login_user__button}
                            onPress={() => navigation.navigate('CriarOS')}
                        >
                            <Text style={CadastroStyle.login_user__button_text}>Acessar o sistema</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    );
}