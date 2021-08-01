let listaPeca = []
let listaServico = []
let saida = document.getElementById("txtSaida")
let qtd = 0, contProp = 0, numProp = "", contDrv = 0, numDrv = "", contBico = 0, numBico = ""
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
    for(let i = 0; i < 7; i++){
        let procura = listaPeca.indexOf(ver + item)   
        if (procura > -1) { //se achar
            listaPeca.splice(procura, 1)
            botao.style.backgroundColor = "white"
            mostrarSaida()
            break
        }
        ver += 1
    }
    if(ver == 7){
        listaPeca.push(qtd + item)
        mostrarSaida()
    }      
}

function buscaServico(servico, botao){
    let procura = listaServico.indexOf(servico)
    if(procura > -1){
        listaServico.splice(procura, 1)
        botao.style.backgroundColor = "white"
        mostrarSaida()
    }else{
        listaServico.push(servico)
        mostrarSaida()
    }
}

//limpa todos os dados
function limpar() {
    /*em construcao*/
}

//botoes para inserir item na lista bba alta
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

function inserirAnelFla(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Anel Flange Bba", botao)
}

//inserir lista servico
function inserirRevBbaServico(botao) {
    botao.style.backgroundColor = "gray"
    buscaServico("Revisao Bba Alta", botao)
}

function inserirTestBbaServico(botao) {
    botao.style.backgroundColor = "gray"
    buscaServico("Teste Bba Alta", botao)
}

function inserirLimpBbaServico(botao) {
    botao.style.backgroundColor = "gray"
    buscaServico("Limpeza Bba Alta", botao)
}

function inserirRetBbaServico(botao) {
    botao.style.backgroundColor = "gray"
    buscaServico("Ret/Colocar Bba Alta", botao)
}

//botoes para inserir lista injetor
function inserirReparoInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Reparo Injetor", botao)
}

function inserirEsferaInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Esfera Injetor", botao)
}

function inserirCalcoInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Calco Injetor", botao)
}

function inserirArruelaInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Arruela Injetor", botao)
}

function inserirConjValvula(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Conjunto Valvula Injetor", botao)
}

function inserirBicoInjetor(botao) {
    if(contBico == 0){
        numBico = window.prompt("Informe o numero do Bico:")
        contBico = 1
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBico, botao)
    }else{
        botao.style.backgroundColor = "gray"
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBico, botao)
        contBico = 0
    }
}

function inserirPorcaInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Porca Injetor", botao)
}

function inserirAnelInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Anel Injetor", botao)
}

function inserirFiltroInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Filtro Injetor", botao)
}

function inserirSolenoideInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Solenoide Injetor", botao)
}

function inserirCompletoInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Injetor Completo", botao)
}

function inserirRecuperacaoInjetor(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd , " Recuperacao Injetor", botao)
}

//inserir lista servico
function inserirCalibInjServico(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd, " Calibragem Injetor ", botao)
}

function inserirTestInjServico(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd, " Teste Injetor ", botao)
}

function inserirLimpInjServico(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd, " Limpeza Injetor ", botao)
}

function inserirRetInjServico(botao) {
    botao.style.backgroundColor = "gray"
    radios(qtd)
    busca(qtd, " Ret/Colocar Injetor ", botao)
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
    for (let i = 0; i < listaPeca.length; i++) {
        saida.innerHTML += `0` + listaPeca[i] + '\n'
    }
    for (let j = 0; j < listaServico.length; j++) {
        saida.innerHTML += listaServico[j] + '\n'
    }
    dadosServico()
}