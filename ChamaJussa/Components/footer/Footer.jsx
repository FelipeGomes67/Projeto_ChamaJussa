import { View, TouchableOpacity, Image, Text } from "react-native";
import { FooterStyle } from "./FooterStyle";

export function Footer() {
    return (
        <View style={FooterStyle.Container}>

            {/* Minhas OS */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/Minhas-OS.png")}
                    style={FooterStyle.Icone}
                />
                <Text style={FooterStyle.Label}>
                    Minhas OS
                </Text>
            </TouchableOpacity>

            {/* Criar OS */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/Criar OS.png")}
                    style={FooterStyle.Icone}
                />
                <Text style={FooterStyle.Label}>
                    Criar OS
                </Text>
            </TouchableOpacity>

            {/* Notificações */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/Notificacao.png")}
                    style={FooterStyle.Icone}
                />
                <Text style={FooterStyle.Label}>
                    Notificações
                </Text>
            </TouchableOpacity>

            {/* Perfil */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
                    source={require("../../assets/Perfil.png")}
                    style={FooterStyle.Icone}
                />
                <Text style={FooterStyle.Label}>
                    Perfil
                </Text>
            </TouchableOpacity>

        </View>
    );
}