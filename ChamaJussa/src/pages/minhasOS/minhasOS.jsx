import { Text, View, TouchableOpacity, ScrollView, Modal, Image } from "react-native";
import { Footer } from "../../Components/footer/Footer";
import { MinhasOSStye } from "./minhasOSStyles";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import jussaLogo from "../../../assets/Jussa-Logo.png";

export function MinhasOS({ navigation }) {

    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const opcoesFiltro = ["Todos", "Abertas", "Em Andamento", "Concluídas"];

    const [modalVisible, setModalVisible] = useState(false);

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

                    <TouchableOpacity style={MinhasOSStye.header_section_button}>
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
                    <TouchableOpacity style={MinhasOSStye.card} onPress={() => setModalVisible(true)}>
                        <View style={MinhasOSStye.card_header}>
                            <Text style={MinhasOSStye.card_code}>OS - 001</Text>

                            <View style={MinhasOSStye.status_badge}>
                                <Text style={MinhasOSStye.status_text}>Aberta</Text>
                            </View>
                        </View>

                        <Text style={MinhasOSStye.card_title}>
                            Vazamento hidráulico no Bloco B
                        </Text>

                        <Text style={MinhasOSStye.card_description} numberOfLines={3}>
                            Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B...
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <Footer />

            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <TouchableOpacity
                    style={MinhasOSStye.modal_overlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <TouchableOpacity activeOpacity={1} style={MinhasOSStye.modal_container}>

                        <View style={MinhasOSStye.modal_header}>
                            <View style={{ flex: 1 }} />
                            <Text style={MinhasOSStye.modal_main_title}>Detalhes da OS-1001</Text>
                            <View style={MinhasOSStye.modal_close_wrapper}>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
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
                                <Text style={MinhasOSStye.modal_os_title}>Vazamento hidráulico</Text>
                                <Text style={MinhasOSStye.modal_os_date}>Criada em 17/06/2026, 11:29:58</Text>

                                <View style={MinhasOSStye.info_group}>
                                    <View style={MinhasOSStye.info_row}>
                                        <Feather name="tool" size={18} color="#006FFF" style={MinhasOSStye.info_icon} />
                                        <View>
                                            <Text style={MinhasOSStye.info_label}>Máquina / Equipamento</Text>
                                            <Text style={MinhasOSStye.info_value}>Tubulação/Sifão da Pia</Text>
                                        </View>
                                    </View>

                                    <View style={MinhasOSStye.info_row}>
                                        <Feather name="map-pin" size={18} color="#006FFF" style={MinhasOSStye.info_icon} />
                                        <View>
                                            <Text style={MinhasOSStye.info_label}>Local / Setor</Text>
                                            <Text style={MinhasOSStye.info_value}>Banheiro Masculino - Bloco B - 2º Andar</Text>
                                        </View>
                                    </View>

                                    <View style={MinhasOSStye.info_row}>
                                        <Feather name="user" size={18} color="#006FFF" style={MinhasOSStye.info_icon} />
                                        <View>
                                            <Text style={MinhasOSStye.info_label}>Solicitante</Text>
                                            <Text style={MinhasOSStye.info_value}>Késsia Milena</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={MinhasOSStye.divider} />

                                <Text style={MinhasOSStye.section_title}>Descrição do Problema</Text>
                                <Text style={MinhasOSStye.section_text}>
                                    Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.
                                </Text>

                                <Text style={MinhasOSStye.section_title}>Foto do Problema</Text>

                                <Image
                                    source={jussaLogo}
                                    style={MinhasOSStye.problem_image}
                                    resizeMode="contain"
                                />
                            </View>

                            <TouchableOpacity style={MinhasOSStye.edit_button}>
                                <Text style={MinhasOSStye.edit_button_text}>Editar Solicitação</Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    );
}