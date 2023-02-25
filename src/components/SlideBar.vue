<template>
    <div class="SlidBar">
        <ul class="ico-menu">
            <li>
                <RouterLink to="/servicos">
                    <fa :icon="['fa', 'gears']" />
                  <!--   <p>Serviços</p> -->    
                </RouterLink>                 
               
            </li>
            <li>
                <RouterLink to="/clientes">
                    <fa :icon="['fa', 'users']" />
                 <!--   <p>Clientes</p>-->    
                </RouterLink>                 
             
            </li>
            <li> 
                <RouterLink to="/produtos">
                  <fa :icon="['fa', 'cube']" />
                 <!--  <p>Peças</p>--> 
                </RouterLink>               
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SlideBar',
    methods:{
        goTo(link){
            this.$router.push({name:link})
        }
    }

}
</script>

<style>
.SlidBar{
    width: 50px;
    background-color: var(--CorPrimariaria1);
    height: 100vh;

    color: white;
}
.ico-menu {       
    text-align: center;
}
.ico-menu li {
    padding-top: 50px; 
    height: 100px;
}

.ico-menu li a {
    text-decoration: none;
    text-align: center;
}
</style>