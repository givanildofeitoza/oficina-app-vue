<template>
    <div>
        <ul class="usuario" v-if="userName!=''">
            <li>                                
                <fa :icon="['fa', 'user']" />
            </li>        
            <li>
                <p>{{ user }}</p>
                
            </li>
        </ul>        

    </div>
</template>

<script>

import db from '../Helpers.js'

export default {

name:'AuthenticationComponent',
data() {
    return {
        user:""
    }
},
mounted() {
    this.SetarUser()
},
methods:{
     SetarUser(){
         this.user=db.RetornarUsuario();
         console.log(this.user);
     },
}

}
</script>

<style>
 .usuario {
    padding: 10px;
    display: flex;
 }
 .usuario li{
    padding: 5px;
 }
</style>