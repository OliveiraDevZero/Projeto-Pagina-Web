let displayBuffer = "" // valores concatenados da variavel 'let valor'
let valor = "" // Valor do botao pressionado
let valores = ["", "", ""] // [0] -> primeiro valor, [1] -> sinal operação, [2] -> segundo valor
let result 
        
function showDisplay(valor){
    const display = document.querySelector('.display')
    displayBuffer = displayBuffer.concat(valor) // Salvar o valor toda vez que for adicionado um novo
    display.innerHTML = displayBuffer
}

function clearAll(){
    displayBuffer = ""
    valor = ""
    valores = ["", "", ""]
    showDisplay(displayBuffer)
}

function operationsValue(sinal){
    showDisplay(sinal)
    if(valores[0] == sinal){
        clearAll()
        showDisplay('I can´t calculate this')
        time()
    }else{
        if(displayBuffer.split(sinal)[0] === ""){
            valores[0] = "" + sinal         
        }else if(displayBuffer.split(sinal)[0] !== "" || displayBuffer.split(valor)[0] !== ""){
            valores[0] += valor
            valores[1] = sinal
            valor = ""
        }
    }
    
}
function time() {setTimeout(() => {clearAll()}, 1800)}

function pressNumber(valorNumero){
    valor = valor.concat(valorNumero)
    showDisplay(valorNumero)
}

function pressPoint(){
    valor = valor.concat('.')
    showDisplay('.')
}

function pressEqual(){
    const valor1 = Number(valores[0])
    const valor2 = Number(valor)    
    switch(valores[1]){
        case '+':
            result = valor1 + valor2
            break
        case '-':
            result = valor1 - valor2
            break
        case 'x':
            result = valor1 * valor2
            break
        case '/':
            result = valor1 / valor2
            break
        }
    
    let saveValor = result // Salvando o resultado para quando for apagado todos os valores seja adicionado como 'valor1' na operacao
    clearAll()
    
    if(!Number.isInteger(result)){
        showDisplay(result.toFixed(2))
    }else{
        showDisplay(result)
    }
    valor = saveValor
}