import { Text, TouchableOpacity, View, TextInput, Image, ScrollView, Alert } from "react-native";
import { CriarOSStyle } from "./CriarOSStyle";
import { useState } from "react";
import { Footer } from "../../Components/footer/Footer";
import { postOS } from "../../services/Services";
import imagemPadrao from '../../../assets/padrao.png';


export function CriarOS({ navigation }) {
    const [titulo, setTitulo] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [loading, setLoading] = useState(false);

    const obterImagemObjeto = (imagemUri) => {
        if (!imagemUri) {
            return imagemPadrao;
        }

        if (typeof imagemUri === 'object' && imagemUri.uri) {
            return imagemUri;
        }

        const nomeArquivo = imagemUri.split('/').pop() || 'padrao.png';

        return {
            uri: imagemUri,
            name: nomeArquivo,
            type: 'image/png'
        };
    };

    const handleCriarOS = async () => {
        const imagemParaEnviar = obterImagemObjeto(imagemPadrao);

        const ok = await postOS(
            equipamento,
            titulo,
            equipamento,
            local,
            descricao,
            imagemParaEnviar,
            "Aberto"
        );

        if (ok) {
            Alert.alert("Sucesso", "OS criada com sucesso!");
            navigation.goBack();
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={CriarOSStyle.Container}>
                <Text style={CriarOSStyle.Text}>Criar ordem de serviço</Text>

                <View style={CriarOSStyle.cardProblema}>
                    <Text style={CriarOSStyle.Label}>Título do problema *</Text>
                    <TextInput
                        style={CriarOSStyle.Input}
                        placeholder="Ex: Vazamento na tubulação"
                        placeholderTextColor="#999"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <Text style={CriarOSStyle.Label}>Máquina/Equipamento *</Text>
                    <TextInput
                        style={CriarOSStyle.Input}
                        placeholder="Ex: Torno Mecânico"
                        placeholderTextColor="#999"
                        value={equipamento}
                        onChangeText={setEquipamento}
                    />

                    <Text style={CriarOSStyle.Label}>Local/Setor *</Text>
                    <TextInput
                        style={CriarOSStyle.Input}
                        placeholder="Ex: Setor de Usinagem"
                        placeholderTextColor="#999"
                        value={local}
                        onChangeText={setLocal}
                    />

                    <Text style={CriarOSStyle.Label}>Descrição do problema *</Text>
                    <TextInput
                        style={CriarOSStyle.inputDescricao}
                        placeholder="Ex: O equipamento está apresentando ruídos e vazando óleo."
                        placeholderTextColor="#999"
                        multiline
                        numberOfLines={4}
                        value={descricao}
                        onChangeText={setDescricao}
                    />

                    <Text style={CriarOSStyle.Label}>Imagem do problema</Text>

                    <Image
                        source={imagemPadrao}
                        style={{ width: '100%', height: 85, borderRadius: 8, marginVertical: 10 }}
                        resizeMode="contain"
                    />

                    <TouchableOpacity
                        style={[CriarOSStyle.Button, loading && { opacity: 0.6 }]}
                        onPress={handleCriarOS}
                        disabled={loading}
                    >
                        <Text style={CriarOSStyle.ButtonText}>
                            {loading ? "Enviando..." : "Abrir Ordem de Serviço"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Footer />
            </View>
        </ScrollView>
    );
}