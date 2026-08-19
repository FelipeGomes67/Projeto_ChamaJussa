import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { LoginStyle } from "./loginStyle";
import { useState } from "react";


export function Login() {


    const [emailDigitado, SetemailDigitado] = useState("")

    const [SenhaDigitada, SetSenhaDigitada] = useState("")


    return (
        <View style={LoginStyle.main_section}>
            <figure style={LoginStyle.figure_section}>
                <Image style={LoginStyle.figure_section__img} source={require("../../../assets/Jussa-Logo.png")} />
            </figure>

            <section style={LoginStyle.section_card}>

                <div style={LoginStyle.teste}>

                    <header style={LoginStyle.header_section}>

                        <Text style={LoginStyle.header_section__tittle}>Chama Jussa</Text>
                        <br />
                        <Text style={LoginStyle.header_section__subtittle}>Gerenciamento de Ordens e Serviços</Text>

                    </header>

                    <form action="" style={LoginStyle.login_user}>

                        <Text style={LoginStyle.text_input}>E-mail</Text>

                        <br />

                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite seu Email"
                            placeholderTextColor="#0000005d"
                            value={emailDigitado}
                            onChangeText={SetemailDigitado}
                        />

                        <br />

                        <Text style={LoginStyle.text_input}>Senha</Text>
                        <br />
                        <TextInput
                            style={LoginStyle.login_user__input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#0000005d"
                            value={SenhaDigitada}
                            onChangeText={SetSenhaDigitada}
                        />

                        <TouchableOpacity style={LoginStyle.login_user__button}>

                            <Text style={LoginStyle.login_user__button_text}>Acessar o sistema</Text>

                        </TouchableOpacity>

                    </form>

                    <div style={LoginStyle.login_user__textCadastroDiv}>

                        <Text style={LoginStyle.login_user__textCadastro}>Não possui conta?</Text>

                        <TouchableOpacity style={LoginStyle.login_user__button_Cadastro}>
                            <Text style={LoginStyle.login_user__textCadastroButton}>Cadastra-se</Text>
                        </TouchableOpacity>

                    </div>



                </div>

            </section>

        </View>
    )
}