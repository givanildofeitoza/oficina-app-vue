<template>
    <div>
        <div class="alert alert-dark">
            <slot>
                
            </slot>                
        </div>
        
    </div>
</template>
<script>
export default {
  name:'TituloComponent',
   
}
</script>
<style>
   .titulo{
    padding-left: 10px;
    font-size: 13px;
   } 
</style>