import { View, TouchableOpacity, Image, Text } from "react-native";
import { FooterStyle } from "./FooterStyle";
import { useNavigation } from "@react-navigation/native";

export function Footer() {
  const navigation = useNavigation();

  return (
    <View style={FooterStyle.Container}>
      <TouchableOpacity
        style={FooterStyle.Item}
        onPress={() => navigation.navigate('MinhasOS')}
      >
        <Image
          source={require("../../../assets/Minhas-OS.png")}
          style={FooterStyle.Icone}
        />
        <Text style={FooterStyle.Label}>Minhas OS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={FooterStyle.Item}
        onPress={() => navigation.navigate('CriarOS')}
      >
        <Image
          source={require("../../../assets/Criar OS.png")}
          style={FooterStyle.Icone}
        />
        <Text style={FooterStyle.Label}>Criar OS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={FooterStyle.Item}
      onPress={() => navigation.navigate('PainelNotificacoes')}
      >

        <Image
          source={require("../../../assets/Notificacao.png")}
          style={FooterStyle.Icone}
        />
        <Text style={FooterStyle.Label}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={FooterStyle.Item}
      onPress={() => navigation.navigate('Perfil')}
      >
        <Image
          source={require("../../../assets/PerfilFooder.png")}
          style={FooterStyle.Icone}
        />
        <Text style={FooterStyle.Label}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}