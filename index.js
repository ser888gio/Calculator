//const all_buttons = document.querySelectorAll(".toArray");
let arrayCalculator = [];

/*all_buttons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        arrayCalculator.push(e.target.innerHTML);
        console.log(arrayCalculator);
    })
})


for (let i = 0; i < all_buttons.length; i++){
    all_buttons[i].addEventListener("click", function(e){
        alert("You clicked " + e.target.id)
    })
}
 */
function clicked(e){
    let newBtn = e.target.value;
    arrayCalculator.push(newBtn);
    console.log(arrayCalculator)
}

function calculate(arrayCalculator){
    for (let i = 0; i < arrayCalculator.length; i++){

    }
}

//button Clear Last functionality
function clearLast(){
    arrayCalculator.splice(-1);
}

function clearDisplay(){
    arrayCalculator = [];
}


//see the displayed result
function displayResult(){
}