import router from './router'

const dbprodutos = [
    { codigo: 1, referencia: "", descricao: "Parafuso Sextavado de Rosca Fina", quantidade: 2.00, preco: 0.30, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 2, referencia: "", descricao: "Retentor do Amortecedor Dianteiro", quantidade: 2.00, preco: 70.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 3, referencia: "", descricao: "Óleo de Freio", quantidade: 1.00, preco: 25.30, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 4, referencia: "", descricao: "Burrinho de Freio", quantidade: 1.00, preco: 8.20, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 5, referencia: "", descricao: "Troca de Óleo", quantidade: 1, preco: 30.10, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 7, referencia: "", descricao: "Óleo Mobil1 Motor", quantidade: 1, preco: 75.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 8, referencia: "", descricao: "Óleo Mobil Alta Rodagem", quantidade: 1, preco: 80.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 9, referencia: "", descricao: "Mangote de Sistema Arrefecimento", quantidade: 1, preco: 62.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 10, referencia: "", descricao: "Bateria Moura", quantidade: 1, preco: 300.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 11, referencia: "", descricao: "Bateria Raiovac", quantidade: 1, preco: 276.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 12, referencia: "", descricao: "Disco de freios", quantidade: 1, preco: 125.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 13, referencia: "", descricao: "Pastilha de Freios", quantidade: 1, preco: 76.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 14, referencia: "", descricao: "Cabos de vela Turbo", quantidade: 1, preco: 132.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 15, referencia: "", descricao: "Velas turbo", quantidade: 1, preco: 25, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 16, referencia: "", descricao: "Troca de cabos de velas e velas", quantidade: 1, preco: 25.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 17, referencia: "", descricao: "Manutenção de freios", quantidade: 1, preco: 50.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 18, referencia: "", descricao: "Troca de bateria", quantidade: 1, preco: 20.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 19, referencia: "", descricao: "Limpeza de sistema de arefecimento", quantidade: 1, preco: 200.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 20, referencia: "", descricao: "Alinhamento de Pneus", quantidade: 1, preco: 70.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 21, referencia: "", descricao: "Pneu Aro 15 Goodyear", quantidade: 1, preco: 500.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 22, referencia: "120045", descricao: "Pneu Aro 13 Pireli", quantidade: 1, preco: 250.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 23, referencia: "", descricao: "Rebimbela Cruzada Fixa Terceirizada", quantidade: 1, preco: 1.50, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 24, referencia: "21005", descricao: "Recondicionamento das Válvulas", quantidade: 1, preco: 130.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 25, referencia: "", descricao: "Escapamento Parte Final", quantidade: 1, preco: 200.50, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 26, referencia: "", descricao: "Escapamento intermediário", quantidade: 1, preco: 76.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 27, referencia: "", descricao: "Troca de Pneus", quantidade: 1, preco: 10.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
    { codigo: 28, referencia: "", descricao: "Depósito de Água Sistema Arrefecimento", quantidade: 1, preco: 112.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 29, referencia: "", descricao: "Tampa do Depósito de água ", quantidade: 1, preco: 22.00, situacao: "Normal", tipo: 0, unidade: "UNI" },
    { codigo: 30, referencia: "", descricao: "Troca de lámpada do Farol", quantidade: 1, preco: 10.00, situacao: "Normal", tipo: 1, unidade: "UNI" },
];

var accesToken = "";
var nome_usuario = "ENTRAR";
var emailusuario = "";
var tokenExpirado = true;

export default {

    //isso deve ser substituído por uma chamada na api de login
    FazerLoginApi: (email, senha) => {
        if (email != "givanildofeitoza@hotmail.com" || senha != "1234")
           // router.push('/auth');
           return "erro"
        else {
            nome_usuario = "Givanildo";
            emailusuario = "givanildofeitoza@hotmail.com";
            accesToken = "kjdhfkjhfjhsdfhjdhflkajsdhfjkahfjjdbbubjkbkjl";
            tokenExpirado = false;
            router.push('/');
            
        }

    },
    //isso deve ser substituído por uma chamada na api de login

    TokenExpeirado: () => {
        return tokenExpirado;
    },

    RetornarUsuario: () => {
        return nome_usuario;
    },
    db_produtos: dbprodutos,
    acces_Token: accesToken,
    email_usuario: emailusuario,
    token_Expirado: tokenExpirado,
}

