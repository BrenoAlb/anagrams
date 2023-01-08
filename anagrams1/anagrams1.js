let arrDePalavrasAlphabetizadas = []


function getAnagramsOf(input, arr){
    let arrDeRetorno = []
    let inputAlphabetizado = alphabetize(input)
    for(let i = 0; i < arr.length; i++){
        let nomeRetorno = arr[i].nome
        let alphabetizado = arr[i].alphabetizado
        if(inputAlphabetizado == alphabetizado){
            
            arrDeRetorno.push(nomeRetorno)
        }
    }return criandoTagDeRetorno(arrDeRetorno)
     
}

function alphabetizePalavras(arr){
    for(let i = 0; i < arr.length; i++){
        let criandoObjeto = 
        {
            nome: arr[i],
            alphabetizado: alphabetize(arr[i]),
        }
        arrDePalavrasAlphabetizadas.push(criandoObjeto)
    }
}
alphabetizePalavras(palavras)

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

const button = document.getElementById("findButton");
    button.addEventListener("click", function () {
    // seu código vai aqui
    let input = document.getElementById("input")
    let valorDoInput = input.value
    return getAnagramsOf(valorDoInput,arrDePalavrasAlphabetizadas)
})

function criandoTagDeRetorno(arr){
    let tagH2 = document.createElement("h2")
    tagH2.innerText = `anagramas: ${arr.toString()}`
    let tagSection = document.getElementById("retorno")
    tagSection.appendChild(tagH2)
}