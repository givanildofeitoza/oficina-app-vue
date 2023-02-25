<template>
    <div>
        <h5>N° {{ dadosOs.numero }}</h5>
     
        <div class="alert alert-danger " v-if="retornos.sucesso == false">
            <div class="content">                
                <p>{{ retornos.mensagem }}</p>
                <p @click="FecharAlert()">x</p>
            </div>            
        </div>
        
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">GERAL</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">PEÇAS</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">SERVIÇOS</button>
                <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled"
                    type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">TOTALIZADOR</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                tabindex="0">
                <!--Dados cabeçalho-->
                <br><br>
                <form>
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Cliente</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" aria-label="Text input with dropdown button"
                                    v-model="dadosOs.clienteOs">
                                <ModalComponentSecundary icoFa="magnifying-glass" Style="exLarge" titulo="Clientes">
                                    <ClientesComponentList :ObterCli="Select"></ClientesComponentList>
                                </ModalComponentSecundary>
                            </div>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Abertura</label>
                            <input type="date" :value="dadosOs.dataAbertura" class="form-control" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Responsável</label>
                            <div class="input-group mb-3">
                                <input type="text" v-model="dadosOs.responsavelOs" class="form-control"
                                    aria-label="Text input with dropdown button">
                                <ModalComponentSecundary icoFa="magnifying-glass" Style="exLarge" titulo="Clientes">
                                    <ResponsavelComponentList :Obter="SelectResp"></ResponsavelComponentList>
                                </ModalComponentSecundary>
                            </div>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label">Fechamento</label>
                            <input type="date" :value="dadosOs.dataFechamento" class="form-control" aria-label="Last name">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Observação</label>
                        <textarea class="form-control" v-model="dadosOs.observacao" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Desc. Problema</label>
                        <textarea class="form-control" v-model="dadosOs.desProblema" id="exampleInputPassword1" />
                    </div>

                    <button  class="btn btn-primary" @click="SalvarOSApi()">Salvar OS</button>
                </form>
                <!--Dados cabeçalho-->
            </div>




          
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <!--Dados peças-->
                <h4 v-if="newPeca.descricao != ''"> {{ newPeca.descricao }}</h4>
                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Código</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" v-model="newPeca.codigo"
                                aria-label="Text input with dropdown button">
                            <ModalComponentSecundary icoFa="magnifying-glass" Style="exLarge" titulo="">
                                <ProdutosComponentList :SelectProd="SelectPeca" tipo="0"></ProdutosComponentList>
                            </ModalComponentSecundary>
                        </div>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Qtd</label>
                        <input type="number" class="form-control" v-model="newPeca.quantidade" aria-label="Last name">
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Preço</label>
                        <input type="number" class="form-control" v-model="newPeca.preco" aria-label="Last name">
                    </div>
                    <div class="col">

                        <button class="btn btn-primary" style="margin-top: 23px;" @click="IncPecas">
                            <fa :icon="['fa', 'circle-plus']" />
                        </button>

                    </div>

                </div>
                <table class="table table-striped" v-if="dadosOs.pecasOs.length > 0">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Peça</th>
                            <th scope="col">Qtd.</th>
                            <th scope="col">Preço R$.</th>
                            <th scope="col">Total R$</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="p in dadosOs.pecasOs" :key="p.inc">
                            <th scope="row">{{ p.codigo }}</th>
                            <td>{{ p.descricao }}</td>
                            <td>{{ p.quantidade }}</td>
                            <td>{{ p.preco.toFixed(2) }}</td>
                            <td>{{ p.total.toFixed(2) }}</td>
                            <td><button class="btn btn-outline-Secondary" @click="DeletePecas(p.inc)">
                                    <fa :icon="['fa', 'trash']"></fa>
                                </button></td>
                        </tr>
                    </tbody>
                </table>
                <!--Dados peças-->
            </div>


            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <h4 v-if="newServico.descricao != ''"> {{ newServico.descricao }}</h4>
                <!--Dados servicos-->
               
                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Código</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" v-model="newServico.codigo"
                                aria-label="Text input with dropdown button">
                            <ModalComponentSecundary icoFa="magnifying-glass" Style="exLarge" titulo="">
                                <ProdutosComponentList :SelectProd="SelectServico" tipo="1"></ProdutosComponentList>
                            </ModalComponentSecundary>
                        </div>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Qtd</label>
                        <input type="number" class="form-control" v-model="newServico.quantidade" aria-label="Last name">
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">Preço</label>
                        <input type="number" class="form-control" v-model="newServico.preco" aria-label="Last name">
                    </div>
                    <div class="col">

                        <button class="btn btn-primary" style="margin-top: 23px;" @click="IncServico">
                            <fa :icon="['fa', 'circle-plus']" />
                        </button>

                    </div>
                </div>
                <table class="table table-striped" v-if="dadosOs.servicosOs.length > 0">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Serviço</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">Preço R$</th>
                            <th scope="col">Total R$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in dadosOs.servicosOs" :key="s.inc">
                            <th scope="row">{{ s.codigo }}</th>
                            <td>{{ s.descricao }}</td>
                            <td>{{ s.quantidade }}</td>
                            <td>{{ s.preco.toFixed(2) }}</td>
                            <td>{{ s.total.toFixed(2) }}</td>
                            <td><button class="btn btn-outline-Secondary" @click="DeleteServicos(s.inc)">
                                    <fa :icon="['fa', 'trash']"></fa>
                                </button></td>
                        </tr>
                    </tbody>
                </table>
                <!--Dados servicos-->
            </div>
            <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">

                <br>
                <div class="alert alert-success" role="alert">
                    <h3>TOTAL A PAGAR R$: {{ (somaServ + somaPeca).toFixed(2) }}</h3>
                </div>
                <div class="rowCard">

                    <div class="card green">
                        <h4>Total das peças</h4>
                        <p>R$ {{ somaPeca.toFixed(2) }}</p>
                        <div class="campoImage">
                            <img class="image" src="../../../public/img/pecas-de-reposicao.png" />
                        </div>
                    </div>
                    <div class="card blue">
                        <h4>Total das Serviços</h4>
                        <p>R$ {{ somaServ.toFixed(2) }}</p>
                        <div class="campoImage">
                            <img class="image" src="../../../public/img/serra-de-vaivem.png" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>


import ClientesComponentList from '../ClientesComponentList.vue';
import ProdutosComponentList from '../ProdutosComponentList.vue';
import ResponsavelComponentList from '../ResponsavelComponentList.vue';
import ModalComponentSecundary from '../ModalComponentSecundary.vue';


export default {
    name: 'FormOS',
    components: {
        ModalComponentSecundary,
        ClientesComponentList,
        ProdutosComponentList,
        ResponsavelComponentList,
       

    },
    data() {

        return {          
            somaServ: 0,
            somaPeca: 0,
            newPeca: {
                inc: 0,
                numeroOs: 0,
                codigo: '',
                descricao: '',
                quantidade: 0.00,
                preco: 0.00,
                total: 0
            },
            newServico: {
                inc: 0,
                numeroOs: 0,
                codigo: '',
                descricao: '',
                quantidade: 0.00,
                preco: 0.00,
                total: 0
            },
            dadosOs:
            {
                numero: 1,
                codigoCliente: 0,
                clienteOs: '',
                codigoResponsavel: 0,
                responsavelOs: '',
                dataAbertura: '2023-02-15',
                dataFechamento: '1900-01-01',
                observacao: '',
                desProblema: '',

                pecasOs: [
                    // { inc: 0, numeroOS: 0, codigo: 0, descricao: "", quantidade: 0.00, preco: 0.00, total: 0.00 },
                    //{ inc: 1, numeroOS: 1, codigo: 1, descricao: "Parafuso Sextavado de Rosca Fina", quantidade: 2.00, preco: 0.30, total: 0.60 },
                    //{ inc: 2, numeroOS: 1, codigo: 2, descricao: "Retentor do Amortecedor Dianteiro", quantidade: 2.00, preco: 70.00, total: 140.00 },
                    //{ inc: 3, numeroOS: 1, codigo: 3, descricao: "Óleo de Freio", quantidade: 1.00, preco: 25.30, total: 50.60 },
                    //{ inc: 4, numeroOS: 1, codigo: 4, descricao: "Burrinho de Freio", quantidade: 1.00, preco: 8.20, total: 160.40 },
                ],
                servicosOs: [
                    //{ inc: 0, numeroOS: 0, codigo: 0, descricao: "", quantidade: 0, preco: 0.00, total: 0.00 },
                    //   { inc: 1, numeroOS: 1, codigo: 1, descricao: "Troca de Óleo", quantidade: 1, preco: 30.10, total: 30.20 },
                    //  { inc: 2, numeroOS: 1, codigo: 2, descricao: "Recondicionamento dos Freios", quantidade: 1, preco: 130.00, total: 130.00 },
                ]
            },
            retornos: {
                sucesso: true,
                mensagem: ""
            },
        }

    },
    mounted() {
        this.Totalizar();

    },
    watch: {
        dadosOs: {
            handler() {
                this.Totalizar();
            },
            deep: true
        },

    },
    methods: {
        SalvarOSApi(){
            console.log(this.dadosOs);
        },
        Select(c) {
            this.dadosOs.clienteOs = c.nome;
            this.dadosOs.codigoCliente = c.codigo;
        },
        SelectResp(r) {
            this.dadosOs.responsavelOs = r.nome;
            this.dadosOs.codigoResponsavel = r.codigo;
        },
        SelectPeca(peca) {
            this.newPeca.codigo = peca.codigo;
            this.newPeca.descricao = peca.descricao;
            this.newPeca.preco = peca.preco;
        },
        SelectServico(serv) {
            this.newServico.codigo = serv.codigo;
            this.newServico.descricao = serv.descricao;
            this.newServico.preco = serv.preco;
        },

        IncPecas() {

            var nPeca = {
                inc: Math.max(...this.dadosOs.pecasOs.map(x => x.inc), 0) + 1,
                numero: this.dadosOs.numero,
                codigo: this.newPeca.codigo,
                descricao: this.newPeca.descricao,
                quantidade: Number(this.newPeca.quantidade),
                preco: Number(this.newPeca.preco),
                total: (Number(this.newPeca.preco) * Number(this.newPeca.quantidade)),
            }

            if (this.newPeca.codigo != "" && (Number(this.newPeca.preco).toFixed(2) * Number(this.newPeca.quantidade).toFixed(2)) > 0) {

                this.dadosOs.pecasOs.push(nPeca);
                this.newPeca.codigo = "";
                this.newPeca.descricao = "";
                this.newPeca.quantidade = 0;
                this.newPeca.preco = 0;

                this.retornos.sucesso = true;
                this.retornos.mensagem = "Produto Incluído com sucesso!";

            }
            else {
                this.retornos.sucesso = false;
                this.retornos.mensagem = "Não foi possível incluir Produto!";
                setTimeout(() => {
                    this.retornos.sucesso = true;
                    //console.log("Delayed for 1 second.");
                }, "7000")


            }

        },
        IncServico() {
            var nServ = {
                inc: Math.max(...this.dadosOs.servicosOs.map(x => x.inc), 0) + 1,
                numero: this.dadosOs.numero,
                codigo: this.newServico.codigo,
                descricao: this.newServico.descricao,
                quantidade: Number(this.newServico.quantidade),
                preco: Number(this.newServico.preco),
                total: (Number(this.newServico.preco) * Number(this.newServico.quantidade)),
            }
            if (this.newServico.codigo != "" && (Number(this.newServico.preco).toFixed(2) * Number(this.newServico.quantidade).toFixed(2)) > 0) {
                this.dadosOs.servicosOs.push(nServ);
                this.newServico.codigo = "";
                this.newServico.descricao = "";
                this.newServico.quantidade = 0;
                this.newServico.preco = 0;

                this.retornos.sucesso = true;
                this.retornos.mensagem = "Serviço incluído com sucesso!";

            }
            else {
                this.retornos.sucesso = false;
                this.retornos.mensagem = "Não foi possível incluir serviço!";
                setTimeout(() => {
                    this.retornos.sucesso = true;
                    //console.log("Delayed for 1 second.");
                }, "7000")

            }

        },
        DeletePecas(inc) {
            this.dadosOs.pecasOs = this.dadosOs.pecasOs.filter(x => x.inc != inc)
        },
        DeleteServicos(inc) {
            this.dadosOs.servicosOs = this.dadosOs.servicosOs.filter(x => x.inc != inc)
        },
        Totalizar() {
            this.somaServ = 0;
            this.somaPeca = 0;

            this.dadosOs.servicosOs.map(x => {
                this.somaServ += Number(x.total);
            });

            this.dadosOs.pecasOs.map(x => {
                this.somaPeca += Number(x.total);
            });


        },
        FecharAlert(){
            this.retornos.sucesso=true; 
        }
    }

}
</script>
<style >
.rowCard {

    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;

}

.card {
    font-family: "Poppins", sans-serif !important;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 400px;
    transition: all 0.3s ease-out;
}

.card:hover {
    transform: translateY(-5px);
    cursor: pointer;
}

.card p {
    color: #a3a5ae;
    font-size: 25px;
}

.campoImage {
    text-align: right;
}

.image {
    float: right;
    max-width: 50px;
    max-height: 50px;
}

.blue {
    border-left: 3px solid #4895ff;
}

.green {
    border-left: 3px solid #3bb54a;
}
.content{
    display: flex;
    justify-content: space-between;
}
.content p{
    cursor: pointer;
}
</style>