<template>
    <div>
    <div>
        <TituloComponent>
            <fa :icon="['fa', 'gears']" />
            <span class="titulo">SERVIÇOS</span>
        </TituloComponent>

    </div>
    <div>
        <label>Buscar</label>


<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Cliente</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Número</a></li>
    <li><a class="dropdown-item" href="#">Cliente</a></li>
  </ul>
  <ModalComponent icoFa="circle-plus" Style="exLarge" titulo="Manutenção OS" >
    <FormOS/>
  </ModalComponent>
</div>


       
    </div>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Abertura</th>
                    <th scope="col">Encerrada</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td colspan="2">Jhon Snow</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td colspan="2">Steven Tylor</td>
                    <td>@twitter</td>
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


</div>
</template>
<script>

import TituloComponent from './TituloComponent.vue';
import ModalComponent from './ModalComponent.vue';
import FormOS from './Forms/FormOS.vue';

export default {
    name: 'ServicosComponent',
    components: {
        TituloComponent,
        ModalComponent,
        FormOS        
    }

}
</script>
<style>
.titulo {
    padding-left: 10px;
    font-size: 13px;
}
</style>