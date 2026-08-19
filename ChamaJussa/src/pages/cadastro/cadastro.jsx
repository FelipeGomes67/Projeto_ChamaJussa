import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { CadastroStyle } from "./cadastroStyle";
import { useState } from "react";


export function Cadastro () {

   const [emailDigitado, SetemailDigitado] = useState("")

   const [usuariodigitado, Setusuariodigitado] = useState("")

   const [SenhaDigitada, SetSenhaDigitada] = useState("")

    return(
   <View style={CadastroStyle.main_section}>
    <figure style={CadastroStyle.figure_section}>
    <Image style={CadastroStyle.figure_section__img} source={require("../../../assets/Jussa-Logo.png")} />
    </figure>
   
    <section style={CadastroStyle.section_card}>

        <div style={CadastroStyle.teste}>

        <header style={CadastroStyle.header_section}>

         <Text style={CadastroStyle.header_section__tittle}>Chama Jussa</Text>
         <br />
         <Text style={CadastroStyle.header_section__subtittle}>Gerenciamento de Ordens e Serviços</Text>

        </header>

        <form action="" style={CadastroStyle.login_user}>

        <Text style={CadastroStyle.text_input}>E-mail</Text>

        <br />
        
        <TextInput
        style={CadastroStyle.login_user__input}
        placeholder="Digite seu Email"
        placeholderTextColor="#0000005d"
        value={emailDigitado}
        onChangeText={SetemailDigitado}
        />

        <br />

        <Text style={CadastroStyle.text_input}>Nome de Usuário</Text>

        <br />
        
        <TextInput
        style={CadastroStyle.login_user__input}
        placeholder="Digite seu User"
        placeholderTextColor="#0000005d"
        value={usuariodigitado}
        onChangeText={Setusuariodigitado}
        />

        <br />


        <Text style={CadastroStyle.text_input}>Senha</Text>

        <br />
        <TextInput
        style={CadastroStyle.login_user__input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#0000005d"
        value={SenhaDigitada}
        onChangeText={SetSenhaDigitada}
        />

        <TouchableOpacity style={CadastroStyle.login_user__button}>

        <Text style={CadastroStyle.login_user__button_text}>Acessar o sistema</Text>

        </TouchableOpacity>

        </form>

        </div>

    </section>

   </View>
    )
}