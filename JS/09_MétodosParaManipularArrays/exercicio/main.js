var numeros = [17, 43, 8, 4, 97, 56, 29, 109]

numeros.forEach(parOuImpar)

function parOuImpar(valor){
    console.log()
    console.log(`${valor}`)
}

const imparOuPar = [17, 43, 8, 4, 97, 56, 29, 109]
let descobrindo = imparOuPar.filter((imparOuPar) => {
    return imparOuPar % 2
})
console.log(descobrindo)
console.clear()

// Correção da Professora

const number = [17, 43, 8, 4, 97, 56, 29, 45]
number.forEach(imparPar)

function imparPar(valor){
    if(valor%2 == 0){
        console.log(`${valor} Esse número é par`)
    }else{
        console.log(`${valor} Esse número é impar`)
    }
}


