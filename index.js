let arrayCalculator = [];

function clicked(e){
    let newBtn = e.target.value;
    arrayCalculator.push(newBtn);
    console.log(arrayCalculator);
    updateDisplay();
}

function calculate(arrayCalculator){
    for (let i = 0; i < arrayCalculator.length; i++){
        if (arrayCalculator[i].isInteger()){

        }
        else if (arrayCalculator[i] in '+-*/'){
            if (arrayCalculator[i] === '+'){
                let result = arrayCalculator[i-1] + arrayCalculator[i+1];
                console.log(result)
            }
        }

    }
}

//button Clear Last functionality
function clearLast(){
    arrayCalculator.splice(-1);
    updateDisplay();
}

function clearDisplay(){
    arrayCalculator = [];
    updateDisplay();
}


//see the displayed result
function updateDisplay() {
    document.getElementById('display').value = arrayCalculator.join(' ');
}