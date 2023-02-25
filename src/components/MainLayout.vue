<template>
    
        <div class="container-fluid " style="background-color:blue; padding: 0px;">
            <NavBar />
            <div class="body">
            <SlideBar />
            <div class="Container-Main-Render">
                <RouterView />
            </div>
        </div>
        </div>      
        <!--
             <div class="container-fluid" style="background-color:blue">
                <NavBar />
            </div>
        -->    
</template>

<script>
import SlideBar from './SlideBar.vue';
import NavBar from './NavBar.vue';
export default {
    name: "MainLayout",
    components: {
        SlideBar,
        NavBar
    }
}

</script>

<style>
#app {
    font-family: 'Poppins', sans-serif;
}
.body {
    width: 100%;
    padding: 0px !important;
    background-color: var(--CorBrancoPrincipal);   
    display: flex;
}
.Container-Main-Render {
    width: 100%;
    padding: 20px;  
    text-align: left;
}
</style>