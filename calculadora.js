let displayBuffer = "" // valores concatenados da variavel 'let valor'
let pressedValues = "" // Valor do botao pressionado
let values = [] // [0] -> primeiro valor, [1] -> sinal operação, [2] -> segundo valor
console.log(values)
let lastSignal = ""
let result 
        
function showDisplay(pressedValues){
    const display = document.querySelector('.display')
    displayBuffer += pressedValues 
    display.innerHTML = displayBuffer
}

function pressNumber(number){
    pressedValues = pressedValues.concat(number)
    showDisplay(number)
}

function clearAll(){
    displayBuffer = ""
    pressedValues = ""
    lastSignal = undefined
    values = []
    showDisplay(displayBuffer)
}

function operationSignal(signal){
    if(values[1] === undefined){
        showDisplay(signal)
        if(signal === "-" && displayBuffer.split(signal)[0] === ""){
            if(lastSignal == signal){
                values[0] = pressedValues
                values[1] = signal
                pressedValues = ""
                lastSignal = ""
            }else{
                pressedValues = pressedValues + signal
                lastSignal = signal
            }       
        }else if(displayBuffer.split(' ')[0] === "+"){
            clearAll()
            showDisplay('The first value is already positive')
            errorTimer(1500)
        }else if(displayBuffer.split(" ")[0] === '/' || displayBuffer.split(" ")[0] === 'x'){
            clearAll()
            showDisplay('I can´t calculate it')
            errorTimer(1000)
        }else{
            values[0] = pressedValues
            values[1] = signal
            pressedValues = ""
        }
    }
}

function pressEqual(){
    let operationValue1 = Number(values[0])
    let operationValue2 = Number(pressedValues)
    switch(values[1]){
        case "+":
            result = operationValue1 + operationValue2
            break
        case "-":
            result = operationValue1 - operationValue2
            break
        case "x":
            result = operationValue1 * operationValue2
            break
        case "/":
            result = operationValue1 / operationValue2 
            break
    }
    clearAll()
    if(result == 0){
        showDisplay(result)
        errorTimer(1000)
    }else if(!Number.isInteger(result)){
        pressedValues = result.toFixed(2)
        showDisplay(result.toFixed(2))
    }else {
        pressedValues = result
        showDisplay(result)
    }
}

function errorTimer(time){
    setTimeout(clearAll, time)
}