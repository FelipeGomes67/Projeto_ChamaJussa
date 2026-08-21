export default function OSItem() {

    return (

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
    )
}