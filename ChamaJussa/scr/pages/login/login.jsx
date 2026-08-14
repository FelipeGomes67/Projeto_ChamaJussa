import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LoginStyle } from "./loginStyle";
import LogoChamaJussa from "../../../assets/Jussa Logo.png"


export function Login () {



    return(
   <View style={LoginStyle.main_section}>
    <figure style={LoginStyle.figure_section}>
    <img style={LoginStyle.figure_section__img} src={LogoChamaJussa} alt="Logo Chama Jussa" />
    </figure>
   
    <section style={LoginStyle.section_card}>

        <div style={LoginStyle.teste}>

        <header style={LoginStyle.header_section}>

         <Text style={LoginStyle.header_section__tittle}></Text>

         <Text style={LoginStyle.header_section__subtittle}></Text>

        </header>

        <form action="" style={LoginStyle.login_user}>

        <TextInput
        style={LoginStyle.login_user__input}
        placeholder="E-mail"
        value=""
        onChangeText=''
        />
        <TextInput
        style={LoginStyle.login_user__input}
        placeholder="Senha"
        value=""
        onChangeText=''
        />
        <TouchableOpacity style={LoginStyle.login_user__button}>
        Entrar
        </TouchableOpacity>

        </form>

        </div>

    </section>

   </View>
    )
}