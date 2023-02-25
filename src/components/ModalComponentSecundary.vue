<template>
  <div>
    <!-- Modal -->
    <div class="modal show fade" id="staticBackdrop" tabindex="-1" role="dialog" style="display:block" v-if="visible">
      <div :class="GerarStyleModal()">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ titulo }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              @click="ShowModal"></button>
          </div>
          <div class="modal-body">
            <slot>

            </slot>

          </div>
          <div class="modal-footer">

          </div>
        </div>
      </div>

    </div>
    <div class="modal-backdrop fade show" v-if="visible"></div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-secondary" @click="ShowModal">
      <fa :icon="['fa', icoFa]" />
    </button>

  </div>
</template>
<script>


export default {
  name: 'ModalComponentSecundary',
  data() {

    return {
      visible: false
    }

  },
  props: {
    icoFa: String,
    Style: String,
    titulo: String,
   
  },
  
  methods: {

    ShowModal() {
      this.visible = !this.visible
    },
  
    GerarStyleModal() {

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