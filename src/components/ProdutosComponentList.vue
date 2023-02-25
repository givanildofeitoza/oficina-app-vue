<template>

    <TituloComponent>
        <fa :icon="['fa', 'cube']" />
        <span class="titulo">PRODUTOS</span>
    </TituloComponent>
    <div>
        <label>Buscar</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Text input with dropdown button" v-model="campoPesquisa" @keypress="ConsultarProdutos">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">{{this.buscaPor}}</button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" @click="DefirnirTipoPesq('Descrição')">Descrição</a></li>
                <li><a class="dropdown-item" @click="DefirnirTipoPesq('Código')">Código</a></li>
                <li><a class="dropdown-item" @click="DefirnirTipoPesq('Referência')">Referência</a></li>
                <li><a class="dropdown-item" @click="DefirnirTipoPesq('Cód. Barras')">Cód. Barras</a></li>
            </ul>        
        </div>

    </div>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">preço</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in ListaProdutos" :key="p.codigo">
                    <td scope="row">{{p.codigo}}</td>
                    <td>{{ p.descricao }}</td>
                    <td>{{ p.preco.toFixed(2) }}</td>
                    <td>{{ p.quantidade.toFixed(2) }}</td>
                    <td><button class="btn btn-primary" @click="ClickBtn(p)"><fa :icon="['fa', 'check']" /></button></td>
                </tr>                
            </tbody>
        </table>
    </div>
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

</template>


<script>

import TituloComponent from './TituloComponent.vue';
import dbprodutos from '../Helpers';

export default {
    name: 'ProdutosComponentList',
    components: {
        TituloComponent, 
    },
    props:{
        SelectProd:Event,
        tipo:Number        
    },
    data(){

        return{
            campoPesquisa:"",
            buscaPor:"Descrição",
            ListaProdutos: [],          
        }
    },
    methods:{
        ClickBtn(codigo){
            this.SelectProd(codigo);
            this.$parent.ShowModal();
            console.log(codigo);
        },
        DefirnirTipoPesq(tipoBusca){
            this.buscaPor = tipoBusca;
        },
        ConsultarProdutos(key){
           
           if(key.key=="Enter"){
            
            this.ListaProdutos=[];
            switch (this.buscaPor){
                case "Descrição":{
                    dbprodutos.db_produtos.map(x=>{
                    if(x.descricao.toUpperCase().startsWith(this.campoPesquisa.toUpperCase()) && x.tipo==this.tipo){
                    this.ListaProdutos.push(x);
                    }})
                   break;  
                }
                case "Código":{
                    dbprodutos.db_produtos.map(x=>{
                    if(x.codigo == this.campoPesquisa && x.tipo==this.tipo){
                    this.ListaProdutos.push(x);
                    }})
                   break;  
                }
                default: { 
                    dbprodutos.db_produtos.map(x=>{
                    if(x.referencia.toUpperCase().startsWith(this.campoPesquisa.toUpperCase()) && x.tipo==this.tipo){
                    this.ListaProdutos.push(x);
                    }})  
                }
            }

            
           } 

        },
    },
  
  
   
   
}
</script>
<style>
.titulo {
    padding-left: 10px;
    font-size: 13px;
}
</style>