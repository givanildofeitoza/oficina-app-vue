<template>

  <TituloComponent>
    <fa :icon="['fa', 'users']" />
    <span class="titulo">CLIENTES</span>
  </TituloComponent>
  <div>

    <div>
      <label>Buscar</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Text input with dropdown button">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">Nome</button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Nome</a></li>
          <li><a class="dropdown-item" href="#">Aplido</a></li>
          <li><a class="dropdown-item" href="#">CPF/CNPJ</a></li>
        </ul>
       </div>

    </div>

  </div>
  <div>


    <table class="table table-striped" v-if="clientes.length > 1">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cidade</th>      
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in clientes" :key="c.codigo">     
          <th>{{c.codigo}}</th>
          <td>{{c.nome}}</td>
          <td>{{c.cidade}}</td>
          <td><button class="btn btn-primary" @click="BtnClick(c)"><fa :icon="['fa', 'check']"></fa> </button></td>
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


export default {
  name: 'ClientesComponent',
  components: {
    TituloComponent,    
  },
  data(){
    
    return{
      clientes:[
        {codigo:1, nome:"Jhon Snow", cidade:"Nova Iork"},
        {codigo:2, nome:"Bil Gates", cidade:"Flórida"},
        {codigo:3, nome:"Steven Tyler", cidade:"Nova Iork"},
        {codigo:4, nome:"Jhon Secada", cidade:"Reseda"},
        {codigo:5, nome:"D. Larusso", cidade:"Califórnia"},
        {codigo:6, nome:"Peter Chek", cidade:"Londres"},
        {codigo:7, nome:"Maurício Maniere", cidade:"Rio de Janeiro"},
      ],
      
    }
  },
  props:{
    ObterCli:Event
  },
  methods:{
    BtnClick(c){
     this.ObterCli(c);    
     this.$parent.ShowModal();
    }
  }

}
</script>
<style>
.titulo {
  padding-left: 10px;
  font-size: 13px;
}
</style>