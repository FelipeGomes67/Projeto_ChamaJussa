import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { LoginStyle } from "./loginStyle";
import { useState } from "react";

<<<<<<< HEAD

export function Login() {


    const [emailDigitado, SetemailDigitado] = useState("")

    const [SenhaDigitada, SetSenhaDigitada] = useState("")
=======
export function Login({ navigation }) {
    const [emailDigitado, setEmailDigitado] = useState("");
    const [senhaDigitada, setSenhaDigitada] = useState("");
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420


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
                        <Text style={LoginStyle.header_section__tittle}>Chama Jussa</Text>
                        <Text style={LoginStyle.header_section__subtittle}>Gerenciamento de Ordens e Serviços</Text>
                    </View>

                    <View style={LoginStyle.login_user}>
                        <Text style={LoginStyle.text_input}>E-mail</Text>
                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite seu Email"
                            placeholderTextColor="#0000005d"
                            value={emailDigitado}
                            onChangeText={setEmailDigitado}
                        />

                        <Text style={LoginStyle.text_input}>Senha</Text>
                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#0000005d"
                            secureTextEntry={true}
                            value={senhaDigitada}
                            onChangeText={setSenhaDigitada}
                        />

                        <TouchableOpacity 
                            style={LoginStyle.login_user__button}
                            onPress={() => navigation.navigate('CriarOS')}
                        >
                            <Text style={LoginStyle.login_user__button_text}>Acessar o sistema</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={LoginStyle.login_user__textCadastroDiv}>
                        <Text style={LoginStyle.login_user__textCadastro}>Não possui conta?</Text>

<<<<<<< HEAD
                    <div style={LoginStyle.login_user__textCadastroDiv}>

                        <Text style={LoginStyle.login_user__textCadastro}>Não possui conta?</Text>

                        <TouchableOpacity style={LoginStyle.login_user__button_Cadastro}>
                            <Text style={LoginStyle.login_user__textCadastroButton}>Cadastra-se</Text>
                        </TouchableOpacity>

                    </div>



                </div>
=======
                        <TouchableOpacity 
                            style={LoginStyle.login_user__button_Cadastro} 
                            onPress={() => navigation.navigate('Cadastro')}
                        >
                            <Text style={LoginStyle.login_user__textCadastroButton}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420

                </View>
            </View>

        </View>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420
}