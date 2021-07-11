let listaBomba = ["Repolho", "Arroz"]

function busca(item){
    let procura = listaBomba.indexOf(item)
    if(procura > -1){
        listaBomba.splice(procura, 1)
        console.log(listaBomba)
    }else{
        listaBomba.push(item)
        console.log(listaBomba)
    }
}

console.log(busca("LEGUMEs"))
console.log(listaBomba)