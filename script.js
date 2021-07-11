let listaBomba = []
let saida = document.getElementById("txtSaida")

/*verifica a existencia do item na lista,
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

function dadosCliente(){
    let txtCli = document.getElementById("txtCli")
    let txtCliente = txtCli.value
    saida.innerHTML = `${txtCliente}  \n`
}




//mostra saida na area de texto
function mostrarSaida(){
    dadosCliente()
    for(let i = 0; i < listaBomba.length; i++){
        saida.innerHTML += listaBomba[i] + '\n'
    }
}
