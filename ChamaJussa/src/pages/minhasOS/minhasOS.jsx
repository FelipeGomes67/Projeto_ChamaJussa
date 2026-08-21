import { Text, View, TouchableOpacity, ScrollView, Modal, Image, TextInput } from "react-native";
import { Footer } from "../../Components/footer/Footer";
import { MinhasOSStye } from "./minhasOSStyles";
import { useEffect, useState } from "react";
import { Feather } from '@expo/vector-icons';
import jussaLogo from "../../../assets/Jussa-Logo.png";
import { getOS, localAPIImagePath } from "../../services/Services";

export function MinhasOS({ navigation }) {

    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const opcoesFiltro = ["Todos", "Abertas", "Em Andamento", "Concluídas"];

    const [modalVisible, setModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [osSelecionada, setOsSelecionada] = useState(null);

    const [titulo, setTitulo] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [listaOS, setListaOS] = useState([]);

    useEffect(() => {
        const buscarOrdens = async () => {
            try {
                const dados = await getOS();
                if (dados) {
                    setListaOS(dados);
                }
            } catch (err) {
                console.log("Erro ao carregar OS no componente:", err);
            }
        };

        buscarOrdens();
    }, []);

    const abrirDetalhes = (os) => {
        setOsSelecionada(os);
        setTitulo(os.titulo || os.Titulo || "");
        setEquipamento(os.equipamento || os.Equipamento || "");
        setLocal(os.local || os.Local || "");
        setDescricao(os.descricao || os.Descricao || "");
        setStatus(os.status || os.Status || "");
        setModalVisible(true);
    };

    const fecharModal = () => {
        setModalVisible(false);
        setIsEditing(false);
        setOsSelecionada(null);
    };

    const salvarEdicao = () => {
        setIsEditing(false);
    };

    // Lógica de filtragem dos cards
    const ordensFiltradas = listaOS.filter((os) => {
        const statusOS = (os.status || os.Status || "").toLowerCase();
        if (filtroAtivo === "Abertas") return statusOS === "aberto";
        if (filtroAtivo === "Em Andamento") return statusOS === "em andamento";
        if (filtroAtivo === "Concluídas") return statusOS === "concluído" || statusOS === "concluido";
        return true; 
    });

    return (
        <>
            <View style={MinhasOSStye.main_section}>
                <View style={MinhasOSStye.header_section}>
                    <View style={MinhasOSStye.header_section_texts}>
                        <Text style={MinhasOSStye.header_section_textnorm}>
                            Olá, Torolho
                        </Text>
                        <Text style={MinhasOSStye.header_section_textstrong}>
                            Minhas OS's
                        </Text>
                    </View>

                    <TouchableOpacity style={MinhasOSStye.header_section_button} onPress={() => navigation.navigate("CriarOS")}>
                        <Text style={MinhasOSStye.header_section_button_text}>
                            Nova OS
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={MinhasOSStye.section_filtro}>
                    {opcoesFiltro.map((item) => {
                        const isSelected = filtroAtivo === item;

                        return (
                            <TouchableOpacity
                                key={item}
                                onPress={() => setFiltroAtivo(item)}
                                style={[
                                    MinhasOSStye.section_filtro_button,
                                    isSelected
                                        ? MinhasOSStye.button_active
                                        : MinhasOSStye.button_inactive,
                                ]}
                            >
                                <Text
                                    style={[
                                        MinhasOSStye.section_filtro_button_text,
                                        isSelected
                                            ? MinhasOSStye.text_active
                                            : MinhasOSStye.text_inactive,
                                    ]}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <ScrollView>
                    {ordensFiltradas.map((OS) => {
                        const id = OS.idOs || OS.IdOs || OS.id;
                        const tituloCard = OS.titulo || OS.Titulo;
                        const statusCard = OS.status || OS.Status;
                        const descricaoCard = OS.descricao || OS.Descricao;

                        return (
                            <TouchableOpacity 
                                style={MinhasOSStye.card} 
                                onPress={() => abrirDetalhes(OS)} 
                                key={id}
                            >
                                <View style={MinhasOSStye.card_header}>
                                    <Text style={MinhasOSStye.card_code}>
                                        OS - #{id ? id.toString().substring(0, 5) : "---"}
                                    </Text>

                                    <View style={MinhasOSStye.status_badge}>
                                        <Text style={MinhasOSStye.status_text}>{statusCard}</Text>
                                    </View>
                                </View>

                                <Text style={MinhasOSStye.card_title}>
                                    {tituloCard}
                                </Text>

                                <Text style={MinhasOSStye.card_description} numberOfLines={3}>
                                    {descricaoCard}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            <Footer />

            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <TouchableOpacity
                    style={MinhasOSStye.modal_overlay}
                    activeOpacity={1}
                    onPress={fecharModal}
                >
                    <TouchableOpacity activeOpacity={1} style={MinhasOSStye.modal_container}>

                        <View style={MinhasOSStye.modal_header}>
                            <View style={{ flex: 1 }} />
                            <Text style={MinhasOSStye.modal_main_title}>
                                {isEditing ? "Editar OS" : "Detalhes da OS"}
                            </Text>
                            <View style={MinhasOSStye.modal_close_wrapper}>
                                <TouchableOpacity
                                    onPress={fecharModal}
                                    style={MinhasOSStye.modal_close_button}
                                >
                                    <Feather name="x" size={24} color="#000000" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={MinhasOSStye.modal_scroll_content}
                        >
                            <View style={MinhasOSStye.modal_card}>
                                {!isEditing ? (
                                    <>
                                        <Text style={MinhasOSStye.modal_os_title}>{titulo}</Text>
                                        <Text style={MinhasOSStye.modal_os_date}>Status: {status}</Text>

                                        <View style={MinhasOSStye.info_group}>
                                            <View style={MinhasOSStye.info_row}>
                                                <Feather name="tool" size={18} color="#006FFF" style={MinhasOSStye.info_icon} />
                                                <View>
                                                    <Text style={MinhasOSStye.info_label}>Máquina / Equipamento</Text>
                                                    <Text style={MinhasOSStye.info_value}>{equipamento}</Text>
                                                </View>
                                            </View>

                                            <View style={MinhasOSStye.info_row}>
                                                <Feather name="map-pin" size={18} color="#006FFF" style={MinhasOSStye.info_icon} />
                                                <View>
                                                    <Text style={MinhasOSStye.info_label}>Local / Setor</Text>
                                                    <Text style={MinhasOSStye.info_value}>{local}</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={MinhasOSStye.divider} />

                                        <Text style={MinhasOSStye.section_title}>Descrição do Problema</Text>
                                        <Text style={MinhasOSStye.section_text}>{descricao}</Text>

                                        <Text style={MinhasOSStye.section_title}>Foto do Problema</Text>

                                        <Image
                                            source={
                                                osSelecionada?.imagem || osSelecionada?.Imagem
                                                    ? { uri: `${localAPIImagePath}${osSelecionada.imagem || osSelecionada.Imagem}` }
                                                    : jussaLogo
                                            }
                                            style={MinhasOSStye.problem_image}
                                            resizeMode="contain"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Text style={MinhasOSStye.input_label}>Título da OS</Text>
                                        <TextInput
                                            style={MinhasOSStye.input}
                                            value={titulo}
                                            onChangeText={setTitulo}
                                        />

                                        <Text style={MinhasOSStye.input_label}>Máquina / Equipamento</Text>
                                        <TextInput
                                            style={MinhasOSStye.input}
                                            value={equipamento}
                                            onChangeText={setEquipamento}
                                        />

                                        <Text style={MinhasOSStye.input_label}>Local / Setor</Text>
                                        <TextInput
                                            style={MinhasOSStye.input}
                                            value={local}
                                            onChangeText={setLocal}
                                        />

                                        <Text style={MinhasOSStye.input_label}>Descrição do Problema</Text>
                                        <TextInput
                                            style={[MinhasOSStye.input, MinhasOSStye.input_multiline]}
                                            value={descricao}
                                            onChangeText={setDescricao}
                                            multiline
                                            numberOfLines={4}
                                        />
                                    </>
                                )}
                            </View>

                            {!isEditing ? (
                                <TouchableOpacity
                                    style={MinhasOSStye.edit_button}
                                    onPress={() => setIsEditing(true)}
                                >
                                    <Text style={MinhasOSStye.edit_button_text}>Editar Solicitação</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={MinhasOSStye.edit_actions_row}>
                                    <TouchableOpacity
                                        style={[MinhasOSStye.action_button, MinhasOSStye.cancel_button]}
                                        onPress={() => setIsEditing(false)}
                                    >
                                        <Text style={MinhasOSStye.cancel_button_text}>Cancelar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[MinhasOSStye.action_button, MinhasOSStye.save_button]}
                                        onPress={salvarEdicao}
                                    >
                                        <Text style={MinhasOSStye.save_button_text}>Salvar</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                        </ScrollView>

                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    );
}