let listaBomba = []
let saida = document.getElementById("txtSaida")

/*
    verifica a existencia do item na lista,
    passado como parametro pelos botoes.
*/
function busca(item){
    let procura = listaBomba.indexOf(item)
    if(procura > -1){
        listaBomba.splice(procura, 1)
        mostrarSaida()
    }else{
        listaBomba.push(item)
        mostrarSaida()
    }
}

//botoes para inserir item na lista
function inserirReparo(){
    busca("01 Reparo Bomba Alta")
}
function inserirEsfera(){
    busca("03 Esferas")
}

/*
    recebe dados do cliente,
    valida campos nulos para saida.
*/ 
function dadosCliente(){
    let txtCli = document.getElementById("txtCli")
    let txtCliente = txtCli.value.toUpperCase()
    let txtPla = document.getElementById("txtPla")
    let txtPlaca = txtPla.value.toUpperCase()
    let txtKm = document.getElementById("txtKm")
    let km = txtKm.value.toUpperCase()
    let txtVei = document.getElementById("txtVei")
    let txtVeiculo = txtVei.value.toUpperCase()
    saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nKM.:${km}\nVeiculo.: ${txtVeiculo}\n`
}

//mostra saida na area de texto
function mostrarSaida(){
    dadosCliente()
    for(let i = 0; i < listaBomba.length; i++){
        saida.innerHTML += listaBomba[i] + '\n'
    }
}