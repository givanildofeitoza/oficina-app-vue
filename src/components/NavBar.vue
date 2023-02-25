<template>
  
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Logo do App</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Nova pesquisa" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                    <AuthenticationComponent/>
                </form>
            </div>
        </nav>
  
</template>

<script>

import AuthenticationComponent from './AuthenticationComponent.vue';
//import db from '../Helpers.js'

export default {
    
    name:'NavBar',
    components:{
        AuthenticationComponent 
    },
    data() {
        return {
            usuario:"",
        }
    },
    methods:{
      GetUsuario(){
       // this.usuario = db.RetornarUsuario();
      }  
    },
}
</script>


<style>

</style>