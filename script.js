let listaBomba = []
let listaMaoObra = []
let listaBico = []
let saida = document.getElementById("txtSaida")


/*
    verifica a existencia do item na lista,
    passado como parametro pelos botoes.
*/
function busca(item) {
    let procura = listaBomba.indexOf(item)
    if (procura > -1) {
        listaBomba.splice(procura, 1)
        mostrarSaida()
    } else {
        listaBomba.push(item)
        mostrarSaida()
    }
}

//botoes para inserir item na lista
function inserirReparo() {
    busca("01 Reparo Bomba Alta")
}
function inserirEsfera() {
    busca("03 Esferas")
}

/*
    recebe dados do cliente,
    valida campos nulos para saida.
*/
function dadosCliente() {
    let txtCli = document.getElementById("txtCli")
    let txtCliente = txtCli.value.toUpperCase()
    if (txtCliente == "") {
        let nome = window.prompt("Insira o nome do CLIENTE!")
        document.getElementById("txtCli").value = `${nome}`
        txtCliente = nome.toLocaleUpperCase()
    }
    let txtPla = document.getElementById("txtPla")
    let txtPlaca = txtPla.value.toUpperCase()
    let txtKm = document.getElementById("txtKm")
    let km = txtKm.value.toUpperCase()
    let txtVei = document.getElementById("txtVei")
    let txtVeiculo = txtVei.value.toUpperCase()

    /*
        impressao no text area dos dados de cliente e lista de pecas
    */     
    if (txtPlaca == "" && txtVeiculo != "" && km != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nKM.:${km}\nVeiculo.: ${txtVeiculo}\n────────────────────────────\n`
    } else if (km == "" && txtPlaca != "" && txtVeiculo != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nVeiculo.: ${txtVeiculo}\n────────────────────────────\n`
    } else if (txtVeiculo == "" && txtPlaca != "" && km != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nKM.:${km}\n────────────────────────────\n`
    } else if (txtPlaca == "" && km == "" && txtVeiculo != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nVeiculo.: ${txtVeiculo}\n────────────────────────────\n`
    } else if (txtPlaca == "" && txtVeiculo == "" && km != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nKM.:${km}\n────────────────────────────\n`
    } else if (km == "" && txtVeiculo == "" && txtPlaca != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\n────────────────────────────\n`
    } else if (txtPlaca == "" && txtVeiculo == "" && km == "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\n────────────────────────────\n`
    } else {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nKM.:${km}\nVeiculo.: ${txtVeiculo}\n────────────────────────────\n`
    }

}

function dadosServico(){
    let txtbba = document.getElementById("txtbba")
    let txtBomba = txtbba.value.toLocaleUpperCase()
    let selMar = document.getElementById("marca")
    let marca = selMar.value.toLocaleUpperCase()
    saida.innerHTML += `────────────────────────────\n` + `` + `Bomba: ` + txtBomba + `\n` + `Marca: ` + marca
}

//mostra saida na area de texto
function mostrarSaida() {
    dadosCliente()
    for (let i = 0; i < listaBomba.length; i++) {
        saida.innerHTML += listaBomba[i] + '\n'
    }
    dadosServico()
}