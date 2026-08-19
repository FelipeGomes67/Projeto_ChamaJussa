import { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/Services"; 

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarUsuarioSalvo = async () => {
            try {
                const usuarioSalvo = await AsyncStorage.getItem("usuario");
                if (usuarioSalvo) {
                    setUsuario(JSON.parse(usuarioSalvo));
                }
            } catch (error) {
                console.log("Erro ao carregar sessão salva:", error);
            } finally {
                setCarregando(false);
            }
        };

        carregarUsuarioSalvo();
    }, []);

    const login = async (email, senha) => {
        if (!email || email.trim().length === 0) {
            Alert.alert("Erro", "Preencha o campo de e-mail corretamente.");
            return false;
        }

        if (!senha || senha.trim().length === 0) {
            Alert.alert("Erro", "Preencha o campo de senha corretamente.");
            return false;
        }

        const objLogin = {
            Email: email.trim(),
            Senha: senha.trim(),
        };

        try {
            const retornoAPI = await api.post("/Auth/Login", objLogin);

            if (retornoAPI.status === 200 || retornoAPI.status === 201) {
                const dadosUsuario = retornoAPI.data;
                
                setUsuario(dadosUsuario);
                await AsyncStorage.setItem("usuario", JSON.stringify(dadosUsuario));
                
                return true;
            } else {
                Alert.alert("Aviso", "Problema inesperado ao tentar realizar login.");
                return false;
            }
        } catch (error) {
            console.log("Erro ao realizar login:", error);
            Alert.alert(
                "Erro no Login",
                error?.response?.data || "E-mail ou senha incorretos."
            );
            return false;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("usuario");
            setUsuario(null);
        } catch (error) {
            console.log("Erro ao desconectar:", error);
        }
    };

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario, login, logout, carregando }}>
            {children}
        </UsuarioContext.Provider>
    );
};