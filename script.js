let listaBomba = []
let saida = document.getElementById("txtSaida")

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

function inserirReparo(){
    busca("01 Reparo Bomba Alta")
}
function inserirEsfera(){
    busca("03 Esferas")
}

function mostrarSaida(){
    saida.innerText = ""
    for(let i = 0; i < listaBomba.length; i++){
        saida.innerHTML += listaBomba[i] + '\n';
    }
}
