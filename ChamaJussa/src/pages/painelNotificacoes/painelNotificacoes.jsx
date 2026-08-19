import { Image, ScrollView, Text, View } from "react-native";
import { PainelNotificacoesStyle } from "./painelNotificacoesStyle";
import { Footer } from "../../Components/footer/Footer";

export function PainelNotificacoes() {
    return (
        <View style={PainelNotificacoesStyle.Container}>
            <Text style={PainelNotificacoesStyle.Text}>Notificações</Text>

            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View style={PainelNotificacoesStyle.cardNotificacao}>
                    <Image
                        source={require("../../../assets/Sino.png")}
                        style={PainelNotificacoesStyle.Icone}
                    />

                    <View style={PainelNotificacoesStyle.conteudoTexto}>
                        <Text style={PainelNotificacoesStyle.titulo}>
                            Ordem de Serviço finalizada
                        </Text>
                        <Text style={PainelNotificacoesStyle.descricao}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>
                        <View style={PainelNotificacoesStyle.linhaRodape}>
                            <Text style={PainelNotificacoesStyle.data}>22/06/2026</Text>
                            <Text style={PainelNotificacoesStyle.hora}>16:03</Text>
                        </View>
                    </View>
                </View>

                <View style={PainelNotificacoesStyle.cardNotificacao}>
                    <Image
                        source={require("../../../assets/Sino.png")}
                        style={PainelNotificacoesStyle.Icone}
                    />

                    <View style={PainelNotificacoesStyle.conteudoTexto}>
                        <Text style={PainelNotificacoesStyle.titulo}>
                            Ordem de Serviço finalizada
                        </Text>
                        <Text style={PainelNotificacoesStyle.descricao}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>
                        <View style={PainelNotificacoesStyle.linhaRodape}>
                            <Text style={PainelNotificacoesStyle.data}>22/06/2026</Text>
                            <Text style={PainelNotificacoesStyle.hora}>16:03</Text>
                        </View>
                    </View>
                </View>

                <View style={PainelNotificacoesStyle.cardNotificacao}>
                    <Image
                        source={require("../../../assets/Sino.png")}
                        style={PainelNotificacoesStyle.Icone}
                    />

                    <View style={PainelNotificacoesStyle.conteudoTexto}>
                        <Text style={PainelNotificacoesStyle.titulo}>
                            Ordem de Serviço finalizada
                        </Text>
                        <Text style={PainelNotificacoesStyle.descricao}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>
                        <View style={PainelNotificacoesStyle.linhaRodape}>
                            <Text style={PainelNotificacoesStyle.data}>22/06/2026</Text>
                            <Text style={PainelNotificacoesStyle.hora}>16:03</Text>
                        </View>
                    </View>
                </View>

                <View style={PainelNotificacoesStyle.cardNotificacao}>
                    <Image
                        source={require("../../../assets/Sino.png")}
                        style={PainelNotificacoesStyle.Icone}
                    />

                    <View style={PainelNotificacoesStyle.conteudoTexto}>
                        <Text style={PainelNotificacoesStyle.titulo}>
                            Ordem de Serviço finalizada
                        </Text>
                        <Text style={PainelNotificacoesStyle.descricao}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>
                        <View style={PainelNotificacoesStyle.linhaRodape}>
                            <Text style={PainelNotificacoesStyle.data}>22/06/2026</Text>
                            <Text style={PainelNotificacoesStyle.hora}>16:03</Text>
                        </View>
                    </View>
                </View>

                <View style={PainelNotificacoesStyle.cardNotificacao}>
                    <Image
                        source={require("../../../assets/Sino.png")}
                        style={PainelNotificacoesStyle.Icone}
                    />

                    <View style={PainelNotificacoesStyle.conteudoTexto}>
                        <Text style={PainelNotificacoesStyle.titulo}>
                            Ordem de Serviço finalizada
                        </Text>
                        <Text style={PainelNotificacoesStyle.descricao}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>
                        <View style={PainelNotificacoesStyle.linhaRodape}>
                            <Text style={PainelNotificacoesStyle.data}>22/06/2026</Text>
                            <Text style={PainelNotificacoesStyle.hora}>16:03</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Footer />
        </View>
    )
}