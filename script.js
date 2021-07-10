let listaBomba = []
let saida = document.getElementById("txtSaida")

function inserirReparo(){
    let procura = listaBomba.indexOf("Reparo")
    if(procura > -1){
        listaBomba.splice(procura, 1)
        mostrarSaida()
    }else{
        listaBomba.push("Reparo")
        mostrarSaida()
    }
}
function inserirEsfera(){
    let procura = listaBomba.indexOf("Esfera")
    if(procura > -1){
        listaBomba.splice(procura, 1)
        mostrarSaida()
    }else{
        listaBomba.push("Esfera")
        mostrarSaida()
    }
}

function mostrarSaida(){
    saida.innerText = ""
    for(let i = 0; i < listaBomba.length; i++){
        saida.innerHTML += listaBomba[i] + '\n';
    }
}
