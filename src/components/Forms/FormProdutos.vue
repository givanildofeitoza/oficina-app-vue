<template >
    <div>
    <form>
        <div class="row">
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</template>
<script>
export default {

name:'FormProdutos',
components:{

},
data(){

return{

    produtosFiltrados:[{  codigo: 0, descricao: "", quantidade: 0.00, preco: 0.00, situacao:"Normal", tipo:0 },],
    ListaProdutos: [
                    {  codigo: 1, descricao: "Parafuso Sextavado de Rosca Fina", quantidade: 2.00, preco: 0.30, situacao:"Normal", tipo:0 },
                    {  codigo: 2, descricao: "Retentor do Amortecedor Dianteiro", quantidade: 2.00, preco: 70.00, situacao:"Normal", tipo:0 },
                    {  codigo: 3, descricao: "Óleo de Freio", quantidade: 1.00, preco: 25.30 , situacao:"Normal", tipo:0},
                    {  codigo: 4, descricao: "Burrinho de Freio", quantidade: 1.00, preco: 8.20, situacao:"Normal", tipo:0 },               
                    {  codigo: 5, descricao: "Troca de Óleo", quantidade: 1, preco: 30.10, situacao:"Normal", tipo:1 },
                    {  codigo: 7, descricao: "Óleo Mobil1 Motor", quantidade: 1, preco: 75.00, situacao:"Normal", tipo:0 },
                    {  codigo: 8, descricao: "Óleo Mobil Alta Rodagem", quantidade: 1, preco: 80.00, situacao:"Normal", tipo:0 },
                    {  codigo: 9, descricao: "Mangote de Sistema Arrefecimento", quantidade: 1, preco: 62.00, situacao:"Normal", tipo:0 },
                    {  codigo: 10, descricao: "Bateria Moura", quantidade: 1, preco: 300.00, situacao:"Normal", tipo:0 },
                    {  codigo: 11, descricao: "Bateria Raiovac", quantidade: 1, preco: 276.00, situacao:"Normal", tipo:0 },
                    {  codigo: 12, descricao: "Disco de freios", quantidade: 1, preco: 125.00, situacao:"Normal", tipo:0 },
                    {  codigo: 13, descricao: "Pastilha de Freios", quantidade: 1, preco: 76.00, situacao:"Normal", tipo:0 },
                    {  codigo: 14, descricao: "Cabos de vela Turbo", quantidade: 1, preco: 132.00, situacao:"Normal", tipo:0 },
                    {  codigo: 15, descricao: "Velas turbo", quantidade: 1, preco: 25, situacao:"Normal", tipo:0 },
                    {  codigo: 16, descricao: "Troca de cabos de velas e velas", quantidade: 1, preco: 25.00, situacao:"Normal", tipo:1 },
                    {  codigo: 17, descricao: "Manutenção de freios", quantidade: 1, preco: 50.00, situacao:"Normal", tipo:1 },
                    {  codigo: 18, descricao: "Troca de bateria", quantidade: 1, preco: 20.00, situacao:"Normal", tipo:1 },
                    {  codigo: 19, descricao: "Limpeza de sistema de arefecimento", quantidade: 1, preco: 200.00, situacao:"Normal", tipo:1 },
                    {  codigo: 20, descricao: "Alinhamento de Pneus", quantidade: 1, preco: 70.00, situacao:"Normal", tipo:1 },
                    {  codigo: 21, descricao: "Pneu Aro 15 Goodyear", quantidade: 1, preco: 500.00, situacao:"Normal", tipo:0 },
                    {  codigo: 22, descricao: "Pneu Aro 13 Pireli", quantidade: 1, preco: 250.00, situacao:"Normal", tipo:0 },
                    {  codigo: 23, descricao: "Rebimbela Cruzada Fixa Terceirizada", quantidade: 1, preco: 1.50, situacao:"Normal", tipo:0 },
                    {  codigo: 24, descricao: "Recondicionamento das Válvulas", quantidade: 1, preco: 130.00, situacao:"Normal", tipo:1 },
                    {  codigo: 25, descricao: "Escapamento Parte Final", quantidade: 1, preco: 200.50, situacao:"Normal", tipo:0 },
                    {  codigo: 26, descricao: "Escapamento intermediário", quantidade: 1, preco: 76.00, situacao:"Normal", tipo:0 },
                    {  codigo: 27, descricao: "Troca de Pneus", quantidade: 1, preco: 10.00, situacao:"Normal", tipo:1 },
                    {  codigo: 28, descricao: "Depósito de Água Sistema Arrefecimento", quantidade: 1, preco: 112.00, situacao:"Normal", tipo:0 },
                    {  codigo: 29, descricao: "Tampa do Depósito de água ", quantidade: 1, preco: 22.00, situacao:"Normal", tipo:0 },
                    {  codigo: 30, descricao: "Troca de lámpada do Farol", quantidade: 1, preco: 10.00, situacao:"Normal", tipo:1 },
                ]
}

},
methods:{

},


}
</script>
<style>

</style>