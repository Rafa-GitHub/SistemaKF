let listaBomba = []
let listaMaoObra = []
let listaBico = []
let listaDadosServico = []
let saida = document.getElementById("txtSaida")
let qtd = 0, contProp = 0, numProp = "", contDrv = 0, numDrv = ""
/*
    verifica a existencia do item na lista,
    passado como parametro pelos botoes.
*/
function radios(radios){
    switch(radios){
        case 0:
            qtd = 1
            break
        case 1:
            qtd = 1
            break
        case 2:
            qtd = 2
            break
        case 3:
            qtd = 3
            break
        case 4:
            qtd = 4
            break
        case 5:
            qtd = 5
            break
        case 6:
            qtd = 6
            break
    }
}

function busca(qtd, item, botao) {
    let ver = 0
    for(let i = 0; i < 6; i++){
        let procura = listaBomba.indexOf(ver + item)   
        if (procura > -1) { //se achar
            listaBomba.splice(procura, 1)
            botao.style.backgroundColor = "white"
            mostrarSaida()
            break
        }
        ver += 1
    }
    if(ver == 6){
        listaBomba.push(qtd + item)
        mostrarSaida()
    }      
}

//limpa todos os dados
function limpar() {
    /*em construcao*/
}

//botoes para inserir item na lista
function inserirReparo(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Reparo Bomba Alta", botao)
}
function inserirEsfera(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Esfera", botao)
}
function inserirAspiracao(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Valvula Aspiracao", botao)
}
function inserirMprop(botao) {
    if(contProp == 0){
        numProp = window.prompt("Informe o numero da M-prop:")
        contProp = 1
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Valvula M-prop " + numProp, botao)
    }else{
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Valvula M-prop " + numProp, botao)
        contProp = 0
    }
}
function inserirDrv(botao) {
    if(contDrv == 0){
        numDrv = window.prompt("Informe o numero da DRV:")
        contDrv = 1
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Valvula DRV " + numDrv, botao)
    }else{
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Valvula DRV " + numDrv, botao)
        contDrv = 0
    }
}
function inserirMola(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Mola", botao)
}
function inserirRetentor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Retentor", botao)
}
function inserirEixo(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Eixo Acionamento", botao)
}
function inserirElemento(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Elemento", botao)
}
function inserirBaixa(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Bomba de Baixa", botao)
}
function inserirAlta(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Bomba de Alta", botao)
}

/*
    recebe dados do cliente,
    valida campos nulos para saida.
*/
function dadosCliente() {
    let txtCli = document.getElementById("txtCli")
    let txtCliente = txtCli.value.toUpperCase()
    while (txtCliente == "") {
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
        saida.innerHTML += `0` + listaBomba[i] + '\n'
    }
    dadosServico()
}