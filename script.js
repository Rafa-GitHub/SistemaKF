let listaPeca = []
let listaServico = []
let listaDados = []
let saida = document.getElementById("txtSaida")
let qtd = 0, contProp = 0, numProp = "", contDrv = 0, numDrv = "", contBico = 0, numBico = "", contFdiesel = 0, numFdiesel = "", contFsed = 0, numFsed = "", contBicoU = 0, numBicoU = ""
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
            botao.style.color = "black"
            mostrarSaida()
            break
        }
        ver += 1
    }
    if(ver == 7){
        botao.style.backgroundColor = "#1D566B"
        botao.style.color = "white"
        listaPeca.push(qtd + item)
        mostrarSaida()
    }      
}

function buscaServico(servico, botao){
    let procura = listaServico.indexOf(servico)
    if(procura > -1){
        listaServico.splice(procura, 1)
        botao.style.backgroundColor = "white"
        botao.style.color = "black"
        mostrarSaida()
    }else{
        botao.style.backgroundColor = "#1D566B"
        botao.style.color = "white"
        listaServico.push(servico)
        mostrarSaida()
    }
}

//botoes para inserir item na lista bba alta
function inserirReparo(botao) {
    radios(qtd)
    busca(qtd , " Reparo Bomba Alta", botao)
}
function inserirEsfera(botao) {
    radios(qtd)
    busca(qtd , " Esfera Bomba Alta", botao)
}
function inserirAspiracao(botao) {
    radios(qtd)
    busca(qtd , " Valvula Aspiracao Bba", botao)
}
function inserirMprop(botao) {
    if(contProp == 0){
        numProp = window.prompt("Informe o numero da M-prop:").toUpperCase()
        contProp = 1
        radios(qtd)
        busca(qtd ," Valvula M-prop " + numProp, botao)
    }else{
        radios(qtd)
        busca(qtd ," Valvula M-prop " + numProp, botao)
        contProp = 0
    }
}
function inserirDrv(botao) {
    if(contDrv == 0){
        numDrv = window.prompt("Informe o numero da DRV:").toUpperCase()
        contDrv = 1
        radios(qtd)
        busca(qtd ," Valvula DRV " + numDrv, botao)
    }else{
        radios(qtd)
        busca(qtd ," Valvula DRV " + numDrv, botao)
        contDrv = 0
    }
}
function inserirMola(botao) {
    radios(qtd)
    busca(qtd , " Mola Bomba Alta", botao)
}
function inserirRetentor(botao) {
    radios(qtd)
    busca(qtd , " Retentor Bomba Alta", botao)
}
function inserirEixo(botao) {
    radios(qtd)
    busca(qtd , " Eixo Acionamento Bba", botao)
}
function inserirElemento(botao) {
    radios(qtd)
    busca(qtd , " Elemento Bomba Alta", botao)
}
function inserirBaixa(botao) {
    radios(qtd)
    busca(qtd , " Bomba de Baixa", botao)
}
function inserirAlta(botao) {
    radios(qtd)
    busca(qtd , " Bomba de Alta", botao)
}

function inserirAnelFla(botao) {
    radios(qtd)
    busca(qtd , " Anel Flange Bba", botao)
}

function inserirValvCasc(botao) {
    radios(qtd)
    busca(qtd , " Valvula Cascata Bba", botao)
}

//inserir lista servico
function inserirRevBbaServico(botao) {
    buscaServico("Revisao Bba Alta", botao)
}

function inserirTestBbaServico(botao) {
    buscaServico("Teste Bba Alta", botao)
}

function inserirLimpBbaServico(botao) {
    buscaServico("Limpeza Bba Alta", botao)
}

function inserirRetBbaServico(botao) {
    buscaServico("Ret/Colocar Bba Alta", botao)
}

//botoes para inserir lista injetor
function inserirReparoInjetor(botao) {
    radios(qtd)
    busca(qtd , " Reparo Injetor", botao)
}

function inserirEsferaInjetor(botao) {
    radios(qtd)
    busca(qtd , " Esfera Injetor", botao)
}

function inserirCalcoInjetor(botao) {
    radios(qtd)
    busca(qtd , " Calco Injetor", botao)
}

function inserirArruelaInjetor(botao) {
    radios(qtd)
    busca(qtd , " Arruela Injetor", botao)
}

function inserirConjValvula(botao) {
    radios(qtd)
    busca(qtd , " Conjunto Valvula Injetor", botao)
}

function inserirBicoInjetor(botao) {
    if(contBico == 0){
        numBico = window.prompt("Informe o numero do Bico:").toUpperCase()
        contBico = 1
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBico, botao)
    }else{
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBico, botao)
        contBico = 0
    }
}

function inserirPorcaInjetor(botao) {
    radios(qtd)
    busca(qtd , " Porca Injetor", botao)
}

function inserirAnelInjetor(botao) {
    radios(qtd)
    busca(qtd , " Anel Injetor", botao)
}

function inserirFiltroInjetor(botao) {
    radios(qtd)
    busca(qtd , " Filtro Injetor", botao)
}

function inserirSolenoideInjetor(botao) {
    radios(qtd)
    busca(qtd , " Solenoide Injetor", botao)
}

function inserirAnelSolenoideInjetor(botao) {
    radios(qtd)
    busca(qtd , " Anel Solenoide Injetor", botao)
}

function inserirCompletoInjetor(botao) {
    radios(qtd)
    busca(qtd , " Injetor Completo", botao)
}

function inserirRecuperacaoInjetor(botao) {
    radios(qtd)
    busca(qtd , " Recuperacao Injetor", botao)
}

//inserir lista servico injetor
function inserirCalibInjServico(botao) {
    radios(qtd)
    busca(qtd, " Calibragem Injetor", botao)
}

function inserirTestInjServico(botao) {
    radios(qtd)
    busca(qtd, " Teste Injetor", botao)
}

function inserirLimpInjServico(botao) {
    radios(qtd)
    busca(qtd, " Limpeza Injetor", botao)
}

function inserirRetInjServico(botao) {
    radios(qtd)
    busca(qtd, " Ret/Colocar Injetor", botao)
}

//inserir lista pecas unidades
function inserirRepExUnidade(botao) {
    radios(qtd)
    busca(qtd, " Reparo Externo Unidade", botao)
}

function inserirRepInUnidade(botao) {
    radios(qtd)
    busca(qtd, " Reparo Geral Unidade", botao)
}

function inserirAnelCanUnidade(botao){
    radios(qtd)
    busca(qtd, " Anel Caneta", botao)
}

function inserirAnelInjUnidade(botao){
    radios(qtd)
    busca(qtd, " Anel Injetor", botao)
}

function inserirPinInjUnidade(botao){
    radios(qtd)
    busca(qtd, " Pino Injetor", botao)
}

function inserirDiscInjUnidade(botao){
    radios(qtd)
    busca(qtd, " Disco Injetor", botao)
}

function inserirMolInjUnidade(botao){
    radios(qtd)
    busca(qtd, " Mola Injetor", botao)
}

function inserirBicoUnidade(botao) {
    if(contBicoU == 0){
        numBicoU = window.prompt("Informe o numero do Bico:").toUpperCase()
        contBicoU = 1
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBicoU, botao)
    }else{
        radios(qtd)
        busca(qtd ," Bico Injetor " + numBicoU, botao)
        contBicoU = 0
    }
}

function inserirCalcoUnidade(botao){
    radios(qtd)
    busca(qtd, " Calco Injetor", botao)
}

//inserir lista servico unidades
function inserirTestUnidade(botao) {
    radios(qtd)
    busca(qtd, " Teste Unidade", botao)
}

function inserirRevUnidade(botao) {
    radios(qtd)
    busca(qtd, " Revisao Unidade", botao)
}

function inserirLimpUnidade(botao) {
    radios(qtd)
    busca(qtd, " Limpezao Unidade", botao)
}

function inserirUltrassomUnidade(botao) {
    radios(qtd)
    busca(qtd, " Ultrassom Injetor", botao)
}

function inserirRetUnidade(botao) {
    radios(qtd)
    busca(qtd, " Ret/Colocar Unidade", botao)
}

function inserirRetInjUnidade(botao) {
    radios(qtd)
    busca(qtd, " Ret/Colocar Injetor", botao)
}

//inserir outras pecas
function inserirCanPeca(botao) {
    radios(qtd)
    busca(qtd, " Caneta Injetora", botao)
}

function inserirAnCanPeca(botao) {
    radios(qtd)
    busca(qtd, " Anel Caneta Injetora", botao)
}

function inserirFiltroArPeca(botao) {
    radios(qtd)
    busca(qtd, " Filtro AR", botao)
}

function inserirFiltroDiPeca(botao) {
    if(contFdiesel == 0){
        numFdiesel = window.prompt("Informe o numero do Filtro Diesel:").toUpperCase()
        contFdiesel = 1
        radios(qtd)
        busca(qtd ," Filtro Diesel " + numFdiesel, botao)
    }else{
        radios(qtd)
        busca(qtd ," Filtro Diesel " + numFdiesel, botao)
        contFdiesel = 0
    }
}

function inserirFiltroSePeca(botao) {
    if(contFsed == 0){
        numFsed = window.prompt("Informe o numero do Filtro Sedimentador:").toUpperCase()
        contFsed = 1
        radios(qtd)
        busca(qtd ," Filtro Sedimentador " + numFsed, botao)
    }else{
        radios(qtd)
        busca(qtd ," Filtro Sedimentador " + numFsed, botao)
        contFsed = 0
    }
}

function inserirValSegRailPeca(botao) {
    radios(qtd)
    busca(qtd, " Valvula Seguranca RAIL", botao)
}

function inserir20DieselPeca(botao) {
    buscaServico("20 Litros Diesel", botao)
}

function inserir40DieselPeca(botao) {
    buscaServico("40 Litros Diesel", botao)
}

//inserir outros servico na lista servico

function inserirScanServico(botao) {
    buscaServico("Diagnostico SCANNER", botao)
}

function inserirScanOriServico(botao) {
    buscaServico("Diagnostico SCANNER Original", botao)
}

function inserirLimpRailServico(botao) {
    buscaServico("Limpeza Tubo Rail", botao)
}

function inserirLimpTanqServico(botao) {
    buscaServico("Limpeza Tanque", botao)
}

function inserirLimpCatServico(botao) {
    buscaServico("Limpeza Catalizador", botao)
}

function inserirDesAdmisServico(botao) {
    buscaServico("Descarbonizacao de Admissao", botao)
}

function inserirTestInterServico(botao) {
    buscaServico("Teste Intercooler", botao)
}

function inserirRegValvServico(botao) {
    buscaServico("Regulagem de Valvulas", botao)
}

function inserirRevChiServico(botao) {
    buscaServico("Revisao Chicote", botao)
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
        saida.innerHTML = `Cliente.: ${txtCliente}\nKM.:${km}\nVeiculo.: ${txtVeiculo}\n─────────────────────────\n`
    } else if (km == "" && txtPlaca != "" && txtVeiculo != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nVeiculo.: ${txtVeiculo}\n─────────────────────────\n`
    } else if (txtVeiculo == "" && txtPlaca != "" && km != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nKM.:${km}\n─────────────────────────\n`
    } else if (txtPlaca == "" && km == "" && txtVeiculo != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nVeiculo.: ${txtVeiculo}\n─────────────────────────\n`
    } else if (txtPlaca == "" && txtVeiculo == "" && km != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nKM.:${km}\n─────────────────────────\n`
    } else if (km == "" && txtVeiculo == "" && txtPlaca != "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\n─────────────────────────\n`
    } else if (txtPlaca == "" && txtVeiculo == "" && km == "") {
        saida.innerHTML = `Cliente.: ${txtCliente}\n─────────────────────────\n`
    } else {
        saida.innerHTML = `Cliente.: ${txtCliente}\nPlaca.: ${txtPlaca}\nKM.:${km}\nVeiculo.: ${txtVeiculo}\n─────────────────────────\n`
    }

}

function dadosServico() {
    let txtbba = document.getElementById("txtbba")
    let txtBomba = txtbba.value.toUpperCase()
    let txtinj = document.getElementById("txtinj")
    let txtInjetor = txtinj.value.toUpperCase()
    let selMar = document.getElementById("marca")
    let marca = selMar.value.toUpperCase()
    let txtAut = document.getElementById("selAutor")
    let autor = txtAut.value.toUpperCase()

    if (txtBomba != "" && marca != "" && autor != "" && txtInjetor != "") {
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Injetor Nº: ` + txtInjetor + `\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor

    } else if (txtBomba != "" && marca != "" && autor != "" && txtInjetor == "") {
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor

    } else if (txtBomba != "" && marca != "" && autor == "" && txtInjetor == "") {
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Marca: ` + marca

    } else if (txtBomba != "" && marca == "" && autor == "" && txtInjetor == "") {
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba

    } else if (txtBomba == "" && marca != "" && autor == "" && txtInjetor == "") {
        saida.innerHTML += `─────────────────────────\n` + `Marca: ` + marca  

    } else if (txtBomba == "" && marca != "" && autor != ""  && txtInjetor == "") {
        saida.innerHTML += `─────────────────────────\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor

    } else if (txtBomba == "" && marca != "" && autor == "" && txtInjetor != "") {
        saida.innerHTML += `─────────────────────────\n` + `Marca: ` + marca + `\n` + `Injetor Nº: ` + txtInjetor
    } else if (txtBomba == "" && marca == "" && autor != "" && txtInjetor == ""){
        saida.innerHTML += `─────────────────────────\n` + `Autor: ` + autor 
    } else if (txtBomba == "" && marca == "" && autor != "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Injetor Nº: ` + txtInjetor + `\n` + `Autor: ` + autor
    } else if(txtBomba != "" && marca == "" && autor != "" && txtInjetor == ""){
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Autor: ` + autor
    } else if (txtBomba == "" && marca == "" && autor == "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Injetor Nº: ` + txtInjetor 
    } else if (txtBomba != "" && marca == "" && autor == "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Injetor Nº: ` + txtInjetor
    } else if(txtBomba != "" && marca != "" && autor == "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Injetor Nº: ` + txtInjetor + `\n` + `Marca: ` + marca 
    } else if (txtBomba != "" && marca == "" && autor != "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Bomba Nº: ` + txtBomba + `\n` + `Injetor Nº: ` + txtInjetor + `\n` + `Autor: ` + autor
    } else if(txtBomba == "" && marca != "" && autor != "" && txtInjetor != ""){
        saida.innerHTML += `─────────────────────────\n` + `Injetor Nº: ` + txtInjetor + `\n` + `Marca: ` + marca + `\n` + `Autor: ` + autor
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