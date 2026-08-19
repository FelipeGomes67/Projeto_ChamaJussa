import axios from "axios";

const apiPort = "7096";
const localapi = `https://localhost:${apiPort}/api`;
export const localAPIImagePath = `https://localhost:${apiPort}`;

const api = axios.create({
    baseURL: localapi
});

const erro = (acao, error) => {
    console.log(`Erro ao ${acao}`, error?.response?.data || error.message);
};

// REQUISIÇÕES USUÁRIOS

export const getUsers = async () => {
    try {
        const retornoAPI = await api.get("/Usuario");
        return retornoAPI.data;
    } catch (error) {
        erro("Buscar", error);
    }
};

export const postUsers = async (e, nome, email, senha, tipoUsuario, imagem) => {
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
    }
    if (nome.trim().length === 0) {
        alert("Preencha o campo de nome corretamente");
        return;
    }
    if (email.trim().length === 0) {
        alert("Preencha o campo de email corretamente");
        return;
    }
    if (senha.trim().length <= 6) {
        alert("Preencha o campo de senha corretamente");
        return;
    }
    if (tipoUsuario !== "Técnico" && tipoUsuario !== "Comum") {
        alert("Selecione um tipo válido (Técnico ou Comum)");
        return;
    }

    const formData = new FormData();
    formData.append("Nome", nome);
    formData.append("Email", email);
    formData.append("Senha", senha);
    formData.append("TipoUsuario", tipoUsuario || "Comum");

    if (imagem) {
        formData.append("Imagem", imagem);
    }

    try {
        const retornoAPI = await api.post("/Usuario", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (retornoAPI.status === 201) {
            console.log("Usuário Cadastrado", retornoAPI.data);
            return retornoAPI.data;
        } else {
            alert('Problema inesperado ao salvar usuário');
        }
    } catch (error) {
        erro("Cadastrar", error);
    }
};

export const deleteUsers = async (id) => {
    try {
        const retornoAPI = await api.delete(`/Usuario/${id}`);

        if (retornoAPI.status === 200 || retornoAPI.status === 204) {
            console.log("Usuário Deletado com sucesso");
            return true;
        }
    } catch (error) {
        erro("Deletar", error);
    }
};

export const putUsers = async (id, nome, email, senha, tipoUsuario, imagem) => {
    if (nome.trim().length === 0) {
        alert("Preencha o campo de nome corretamente");
        return;
    }
    if (email.trim().length === 0) {
        alert("Preencha o campo de email corretamente");
        return;
    }

    if (senha && senha.trim().length <= 6) {
        alert("A nova senha deve ter mais de 6 caracteres");
        return;
    }

    const formData = new FormData();
    formData.append("Nome", nome);
    formData.append("Email", email);
    formData.append("Senha", senha || "");
    formData.append("TipoUsuario", tipoUsuario || "Comum");

    if (imagem) {
        formData.append("Imagem", imagem);
    }

    try {
        const retornoAPI = await api.put(`/Usuario/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        // Corrigida a validação de status do Axios
        if (retornoAPI.status === 200 || retornoAPI.status === 204) {
            alert("Usuário editado com sucesso!");
            return true;
        }
    } catch (error) {
        erro("Editar", error);
    }
};

// REQUISIÇÕES OS

export const getOS = async () => {
    try {
        const retornoAPI = await api.get('/OrdemServico');
        return retornoAPI.data;
    } catch (error) {
        erro("Buscar", error);
    }
};

export const postOS = async (e, titulo, equipamento, local, descricao, imagem, status) => {
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
    }
    if (!titulo || titulo.trim().length === 0) {
        alert("Preencha o campo de titulo corretamente");
        return;
    }
    if (!equipamento || equipamento.trim().length === 0) {
        alert("Preencha o campo de equipamento corretamente");
        return;
    }
    if (!local || local.trim().length === 0) {
        alert("Preencha o campo de local corretamente");
        return;
    }
    if (!descricao || descricao.trim().length === 0) {
        alert("Preencha o campo de descricao corretamente");
        return;
    }
    if (!imagem) {
        alert("Selecione um arquivo de imagem válido");
        return;
    }

    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Equipamento", equipamento);
    formData.append("Local", local);
    formData.append("Descricao", descricao);
    formData.append("Imagem", imagem);
    formData.append("Status", status || "Aberto");

    try {
        const retornoAPI = await api.post("/OrdemServico", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (retornoAPI.status === 201) {
            alert("Ordem de serviço cadastrada com sucesso!");
            return retornoAPI.data;
        }
    } catch (error) {
        erro("Cadastrar OS", error);
    }
};

export const deleteOS = async (id) => {
    try {
        const retornoAPI = await api.delete(`/OrdemServico/${id}`);

        if (retornoAPI.status === 200 || retornoAPI.status === 204) {
            console.log("Ordem de Serviço deletada com sucesso");
            return true;
        }
    } catch (error) {
        erro("Deletar", error);
    }
};

export const putOS = async (id, titulo, equipamento, local, descricao, imagem, status) => {
    if (!titulo || titulo.trim().length === 0) {
        alert("Preencha o campo de título corretamente");
        return;
    }
    if (!equipamento || equipamento.trim().length === 0) {
        alert("Preencha o campo de equipamento corretamente");
        return;
    }
    if (!local || local.trim().length === 0) {
        alert("Preencha o campo de local corretamente");
        return;
    }
    if (!descricao || descricao.trim().length === 0) {
        alert("Preencha o campo de descrição corretamente");
        return;
    }

    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Equipamento", equipamento);
    formData.append("Local", local);
    formData.append("Descricao", descricao);
    formData.append("Status", status || "Aberto");

    if (imagem) {
        formData.append("Imagem", imagem);
    }

    try {
        const retornoAPI = await api.put(`/OrdemServico/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (retornoAPI.status === 200 || retornoAPI.status === 204) {
            alert("Ordem de serviço atualizada com sucesso!");
            return true;
        }
    } catch (error) {
        erro("Editar OS", error);
    }
};

export default api;