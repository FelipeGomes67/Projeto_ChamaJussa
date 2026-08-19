import { Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { LoginStyle } from "./loginStyle";
import { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../../services/Services";
import { UsuarioContext } from "../../context/ChamaJussaContext";

export function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setUsuario } = useContext(UsuarioContext);

    const handleLogin = async () => {
        try {
            const resposta = await loginUser(email, senha);

            if (resposta) {
                setUsuario(resposta);
                await AsyncStorage.setItem("usuario", JSON.stringify(resposta));
                
                setEmail("");
                setSenha("");
                
                navigation.navigate("CriarOS");
            }
        } catch (error) {
            Alert.alert(
                "Erro no Login", 
                error?.response?.data || "Não foi possível realizar o login. Verifique suas credenciais."
            );
        }
    };

    return (
        <View style={LoginStyle.main_section}>

            <View style={LoginStyle.figure_section}>
                <Image
                    style={LoginStyle.figure_section__img}
                    source={require("../../../assets/Jussa-Logo.png")}
                />
            </View>

            <View style={LoginStyle.section_card}>

                <View style={LoginStyle.teste}>

                    <View style={LoginStyle.header_section}>
                        <Text style={LoginStyle.header_section__tittle}>
                            Chama Jussa
                        </Text>

                        <Text style={LoginStyle.header_section__subtittle}>
                            Gerenciamento de Ordens e Serviços
                        </Text>
                    </View>

                    <View style={LoginStyle.login_user}>

                        <Text style={LoginStyle.text_input}>
                            E-mail
                        </Text>

                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite seu Email"
                            placeholderTextColor="#0000005d"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />

                        <Text style={LoginStyle.text_input}>
                            Senha
                        </Text>

                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#0000005d"
                            secureTextEntry={true}
                            autoComplete="current-password"
                            value={senha}
                            onChangeText={setSenha}
                        />

                        <TouchableOpacity
                            style={LoginStyle.login_user__button}
                            onPress={handleLogin}
                        >
                            <Text style={LoginStyle.login_user__button_text}>
                                Acessar o sistema
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={LoginStyle.login_user__textCadastroDiv}>

                        <Text style={LoginStyle.login_user__textCadastro}>
                            Não possui conta?
                        </Text>

                        <TouchableOpacity
                            style={LoginStyle.login_user__button_Cadastro}
                            onPress={() => navigation.navigate("Cadastro")}
                        >
                            <Text style={LoginStyle.login_user__textCadastroButton}>
                                Cadastrar-se
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </View>
    );
}