<template >



  <div class="conteudo">
    <div class="cardLogin">
      <div class="alert alert-success " v-if="retorno == 'erro'">
            <div class="content">                
                <p >Erro ! Verifique usuário ou senha!</p>
                <p @click="FecharAlert()">x</p>
            </div>            
        </div>
      <form class="form-signin" @submit.stop.prevent="Login">
        <img class="mb-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iBMuerIHG7eFd6NwEc0SuQ7w-98Yg72ttQ&usqp=CAU" alt=""
          width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Bem-vindo!</h1>
        <label for="inputEmail" class="sr-only">Email</label>
        <input type="email" id="inputEmail" class="form-control" v-model="email" placeholder="Email" required=""
          autofocus="">
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" id="inputPassword" v-model="senha" class="form-control" placeholder="Senha" required="">
        <div class="checkbox mb-3">

        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>

      </form>



    </div>
  </div>
</template>
<script>

import db_access from '../Helpers.js';

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      senha: "",
      retorno:"ok",
    }
  },
  methods: {
    Login() {
      this.retorno = db_access.FazerLoginApi(this.email, this.senha);
    },
    FecharAlert(){
    /*  setTimeout(() => {
                    this.retornos.sucesso = true;
                    //console.log("Delayed for 1 second.");
                }, "4000");*/
              this.retorno="ok";
    },

  },

}

</script>
<style>
.conteudo {
  margin-top:0px;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: var(--CorPrimariaria1);
  padding-top: 30px;
}

.cardLogin {
  padding: 50px;
  background-color: var(--CorBrancoPrincipal);
  width: 500px;
  height: 500px;
  border-radius: 10px;
  margin: auto;
  padding-top: 30px;
  text-align: le;
}
.content{
 
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>