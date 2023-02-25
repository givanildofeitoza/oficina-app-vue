<template>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div :class="GerarStyleModal()">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{titulo}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot>

          </slot>

        </div>
        <div class="modal-footer">
        <!--   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>-->
        </div>
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <fa :icon="['fa', icoFa]" />
  </button>

</template>
<script>


export default {
  name: 'ModalComponent',
  data() {

    return {
     
    }
  },
  props: {
    nomeBotao: String,
    Style: String,
    titulo:String,
    icoFa:String
  },
  methods: {
 
     GerarStyleModal(){ 
      
                var modal;

                    switch (this.Style) {
                      case "litle": 
                      modal = "modal-dialog";
                      break;                                  
                      case "mediun": 
                      modal = "modal-dialog modal-dialog-scrollable";
                      break; 
                      case "large": 
                      modal = "modal-dialog modal-lg";
                      break; 
                      case "exLarge": 
                      modal = "modal-dialog modal-xl";
                      break; 
                      default:
                      modal = "modal-dialog modal-sm";
                    }

                    return modal;
              } 
             
  }



    
}
</script>
<style>

</style>