import axios from "axios"

const apiPort = "7096"
const localapi = `https://localhost:${apiPort}/api`
export const localAPIImagePath = `https://localhost:${apiPort}/imagens`;

const api = axios.create({
    baseURL: localapi
})


const erro = (acao, error) => {
    console.log(`Erro ao ${acao}`, error?.response?.data || error.message)
}

//Requisições Usuarios

export const getUsers = async () => {
    try {
        const retornoAPI = await api.get("/Usuario")

        return retornoAPI.data;
    } catch (error) {
        erro("Buscar", error)

    }
}

export const postUsers = async (e, nome, email, senha, tipoUsuario) => {
    e.preventDefault();

    if (nome.trim().length === 0) {
        alert("Preencha o campo de nome corretamente")
        return;
    }
    else if (email.trim().length === 0) {
        alert("Preencha o campo de email corretamente");
        return;
    }
    else if (senha.trim().length <= 6) {
        alert("Preencha o campo de senha corretamente");
        return
    }
    else if (tipoUsuario !== "Técnico" && tipoUsuario !== "Padrão") {
        alert("Selecione um tipo válido");
        return;
    }

    const objCadastro = {
        nome,
        email,
        senha,
        tipoUsuario,
    }

    try {
        const retornoAPI = await api.post("/Usuario", objCadastro)

        if (retornoAPI.status === 201) {
            console.log("Usuário Cadastrado", retornoAPI.data);
            return retornoAPI.data;

        } else {
            alert('Problema inesperado ao salvar tarefa');
        }


    } catch (error) {
        erro("Cadastrar", error)

    }


}

export const deleteUsers = async (id) => {
    try {
        const retornoAPI = await api.delete(`/Usuario/${id}`)

        if (retornoAPI.status === 200 || retornoAPI.status === 204) {
            console.log("Usuário Deletado com sucesso")
            return true;
        }

    } catch (error) {
        erro("Deletar", error)
    }

}

export const putUsers = async (id, nome, email, senha, tipoUsuario) => {

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

    const objCadastro = {
        nome,
        email,
        senha: senha || "",
        tipoUsuario,
    }

    try {
        const retornoAPI = await api.put(`/Usuario/${id}`, objCadastro)

        if (retornoAPI === 200) {
            alert("Usuário editado com sucesso!")
            return true
        }

    } catch (error) {
        erro("Editar", error)
    }

}


export default api