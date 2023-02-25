<template>
    <div>
        <TituloComponent>
            <fa :icon="['fa', 'cube']" />
            <span class="titulo">PRODUTOS</span>
        </TituloComponent>

        <div>
            <label>Buscar </label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="buscaProdutos"
                    @keypress="LitarProdutos">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ tipoPesquisa }}</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <p class="dropdown-item" @click="MudarTipoPesquisa('Descrição')">Descrição</p>
                    </li>
                    <li>
                        <p class="dropdown-item" @click="MudarTipoPesquisa('Código')">Código</p>
                    </li>
                    <li>
                        <p class="dropdown-item" @click="MudarTipoPesquisa('Referência')">Referência</p>
                    </li>
                    <!--   <li><p class="dropdown-item" @click="MudarTipoPesquisa()">Cód. Barras</p></li>-->
                </ul>
                <ModalComponent nomeBotao="Incluir Produto" Style="exLarge" titulo="Cadastro Produto" icoFa="circle-plus">
                    <FormProdutos />
                </ModalComponent>
            </div>

        </div>
        <div>
            <div v-if="produtosFiltrados.length > 0">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">UNI</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">situação</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="p in produtosFiltrados" :key="p.codigo">
                            <th scope="row">{{ p.codigo }}</th>
                            <td scope="col">{{ p.descricao }}</td>
                            <td scope="col">{{ p.unidade }}</td>
                            <td scope="col">{{ p.preco.toFixed(2) }}</td>
                            <td scope="col">{{ p.quantidade.toFixed(2) }}</td>
                            <td scope="col">{{ p.situacao }}</td>

                        </tr>

                    </tbody>
                </table>

                <div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link">Anterior</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Próxima</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TituloComponent from './TituloComponent.vue';
import ModalComponent from './ModalComponent.vue';
import FormProdutos from './Forms/FormProdutos.vue';
import db from '../Helpers.js'


export default {
    name: 'ProdutosComponent',
    components: {
        TituloComponent,
        ModalComponent,
        FormProdutos,
    },
    data() {

        return {
            tipoPesquisa: "Descrição",
            buscaProdutos: "",
            ultimaPesquisa: "",
            produtosFiltrados: [],          
         
        }
    },
    methods: {
        MudarTipoPesquisa(tipo) {
            this.tipoPesquisa = tipo;
            
        },
        LitarProdutos(key) {
            if (key.key == "Enter" && this.ultimaPesquisa != this.buscaProdutos) {
                this.ultimaPesquisa = this.buscaProdutos;
                this.produtosFiltrados = [];

                //substituir por consumo de api
           
                db.db_produtos.map(x => {

                    switch (this.tipoPesquisa) {
                        case "Descrição": {
                            if (x.descricao.toLowerCase().startsWith(this.buscaProdutos.toLocaleLowerCase()) && x.tipo == 0)
                                this.produtosFiltrados.push(x)
                            break;
                        }
                        case "Código": {
                            if (x.codigo==this.buscaProdutos && x.tipo == 0)
                                this.produtosFiltrados.push(x)
                            break;
                        }
                        default: {
                            if (x.referencia.toLowerCase().startsWith(this.buscaProdutos.toLocaleLowerCase()) && x.tipo == 0)
                                this.produtosFiltrados.push(x)
                        }
                    }


                });
                 //substituir por consumo de api

            }
        },








    },




}
</script>
<style>.titulo {
    padding-left: 10px;
    font-size: 13px;
}</style>