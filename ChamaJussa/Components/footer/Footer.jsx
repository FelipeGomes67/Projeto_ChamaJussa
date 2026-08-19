import { Image, View, TouchableOpacity, Text } from "react-native";
import { FooterStyle } from "./FooterStyle";

export function Footer() {
    return (
        <View style={FooterStyle.Container}>

            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/MinhasOS.png")}
                    style={[FooterStyle.Icone, "minhasOS" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, "minhasOS" && FooterStyle.LabelAtivo]}>Minhas OS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FooterStyle.Item}>
                    <Image
                        source={require("../../assets/CriarOS.png")}
                        style={FooterStyle.Icone}
                    />
                <Text>Criar OS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/Notificacoes.png")}
                    style={[FooterStyle.Icone, "notificacoes" && FooterStyle.IconeAtivo]}
                />
                <Text>Notificações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("./assets/Perfil.png")}
                    style={[FooterStyle.Icone, "perfil" && FooterStyle.IconeAtivo]}
                />
                <Text>Perfil</Text>
            </TouchableOpacity>

        </View>
    )
}