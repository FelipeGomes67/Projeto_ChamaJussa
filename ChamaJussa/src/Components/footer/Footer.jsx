import { View, TouchableOpacity, Image, Text } from "react-native";
import { FooterStyle } from "./FooterStyle";

export function Footer() {
    return (
        <View style={FooterStyle.Container}>

            {/* Minhas OS */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
<<<<<<< HEAD:ChamaJussa/Components/footer/Footer.jsx
                    source={require("../../assets/Minhas-OS.png")}
                    style={FooterStyle.Icone}
                />
                <Text style={FooterStyle.Label}>
                    Minhas OS
                </Text>
=======
                    source={require("../../../assets/Minhas-OS.png")}
                    style={[FooterStyle.Icone, "minhasOS" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, "minhasOS" && FooterStyle.LabelAtivo]}>Minhas OS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FooterStyle.Item}>
                    <Image
                        source={require("../../../assets/Criar OS.png")}
                        style={FooterStyle.Icone}
                    />
                <Text>Criar OS</Text>
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420:ChamaJussa/src/Components/footer/Footer.jsx
            </TouchableOpacity>

            {/* Criar OS */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
<<<<<<< HEAD:ChamaJussa/Components/footer/Footer.jsx
                    source={require("../../assets/Criar OS.png")}
                    style={FooterStyle.Icone}
=======
                    source={require("../../../assets/Notificacao.png")}
                    style={[FooterStyle.Icone, "notificacoes" && FooterStyle.IconeAtivo]}
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420:ChamaJussa/src/Components/footer/Footer.jsx
                />
                <Text style={FooterStyle.Label}>
                    Criar OS
                </Text>
            </TouchableOpacity>

            {/* Notificações */}
            <TouchableOpacity style={FooterStyle.Item}>
                <Image
<<<<<<< HEAD:ChamaJussa/Components/footer/Footer.jsx
                    source={require("../../assets/Notificacao.png")}
                    style={FooterStyle.Icone}
=======
                    source={require("../../../assets/Perfil.png")}
                    style={[FooterStyle.Icone, "perfil" && FooterStyle.IconeAtivo]}
>>>>>>> fee4fac314280c5b0be72999dbdc3c9bda212420:ChamaJussa/src/Components/footer/Footer.jsx
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