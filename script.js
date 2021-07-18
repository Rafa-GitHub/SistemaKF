let listaBomba = []
let listaMaoObra = []
let listaBico = []
let listaDadosServico = []
let saida = document.getElementById("txtSaida")
let qtd = 0

/*
    verifica a existencia do item na lista,
    passado como parametro pelos botoes.
*/
function radios(radios){
    switch(radios){
        case 0:
            qtd = "01"
            break
        case 1:
            qtd = "01"
            break
        case 2:
            qtd = "02"
            break
        case 3:
            qtd = "03"
            break
        case 4:
            qtd = "04"
            break
        case 5:
            qtd = "05"
            break
        case 6:
            qtd = "06"
            break
    }
    
}


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
//limpa todos os dados
function limpar() {
    /*em construcao*/
}

//botoes para inserir item na lista
function inserirReparo() {
    radios(qtd)
    busca(qtd + " Reparo Bomba Alta")
}
function inserirEsfera() {
    busca(qtd + " Esferas")
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

function dadosServico() {
    let txtbba = document.getElementById("txtbba")
    let txtBomba = txtbba.value.toLocaleUpperCase()
    let selMar = document.getElementById("marca")
    let marca = selMar.value.toLocaleUpperCase()
    let txtAut = document.getElementById("selAutor")
    let autor = txtAut.value.toLocaleUpperCase()
    if (txtBomba != "" && marca != "" && autor != "") {
        saida.innerHTML += `────────────────────────────\n` + `Bomba: ` + txtBomba + `\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor
    } else if (txtBomba != "" && marca != "" && autor == "") {
        saida.innerHTML += `────────────────────────────\n` + `Bomba: ` + txtBomba + `\n` + `Marca: ` + marca
    } else if (txtBomba != "" && marca == "" && autor != "") {
        saida.innerHTML += `────────────────────────────\n` + `Bomba: ` + txtBomba + `\n` + `Autor: ` + autor
    } else if (txtBomba == "" && marca != "" && autor == "") {
        saida.innerHTML += `────────────────────────────\n` + `Marca: ` + marca
    } else if (txtBomba == "" && marca == "" && autor != "") {
        saida.innerHTML += `────────────────────────────\n` + `Autor: ` + autor
    } else if (txtBomba != "" && marca == "" && autor == "") {
        saida.innerHTML += `────────────────────────────\n` + `Bomba: ` + txtBomba
    } else if (txtBomba == "" && marca != "" && autor != "") {
        saida.innerHTML += `────────────────────────────\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor
    }
}

//mostra saida na area de texto
function mostrarSaida() {
    dadosCliente()
    for (let i = 0; i < listaBomba.length; i++) {
        saida.innerHTML += listaBomba[i] + '\n'
    }
    dadosServico()
}