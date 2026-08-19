import { Text, View } from "react-native";
import { PainelNotificacoesStyle } from "./painelNotificacoesStyle";
import { Footer } from "../../../Components/footer/Footer";

export function PainelNotificacoes() {
    return (
        <View style={PainelNotificacoesStyle.Container}>
            <Text style={PainelNotificacoesStyle.Text}>Notificações</Text>
            

            <Footer/>
        </View>
    )
}