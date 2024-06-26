let arrayCalculator = [];

function clicked(e) {
    let newBtn = e.target.value;
    arrayCalculator.push(newBtn);
    console.log(arrayCalculator);
    updateDisplay();
}

//Defining operators precedence and associative property and creates an object
const operators = {
    '^': {
        prec: 4,
        assoc: 'right'
    },
    '*': {
        prec: 3,
        assoc: 'left',
    },
    '/': {
        prec: 3,
        assoc: 'left',
    },
    '+': {
        prec: 2,
        assoc: 'left',
    },
    '-': {
        prec: 2,
        assoc: 'left',
    },
};

//if it is false it throws the Error. When true does nothing
const assert = (predicate) =>{
    if(predicate) return;
    throw new Error('Assertion failed due to invalid token')
}

const toRPN = (input) => {
    const opSymbols = Object.keys(operators);
    const stack = []; //primarily for operators
    let output = ''; //primarily for numbers

    //returns the last element in stack
    const lastElement = () => {
        return stack.at(-1);
    };

    //adds token to the output string
    const addToOutput = (token) => {
        output += ' ' + token;
    };

    //removes the last element form stack
    const handlePop = () => {
        return stack.pop();
    }

    //Pushes the token to the right category
    const handleToken = (token) => {
        switch (true) {
            // if it is a number a function to add to the output is called
            case !isNaN(parseFloat(token)):
                addToOutput(token);
                break;
            // testing if token is in operators object as a key.
            case opSymbols.includes(token):
                const o1 = token;
                let o2 = lastElement(); //operator 2 is checked if it is on the top

                //checks if the operator 2 can be pushed to the output string
                while (
                    o2 !== undefined &&
                    o2 !== '(' &&
                    //example o2 = * and o1 = +. '*' has prec = 3 and '+' has prec = 2
                    (operators[o2].prec > operators[o1].prec ||
                        //example o1 = + and o2 = -. Both have the same prec, but the '+' will come in front of '-'
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                    ) {
                    addToOutput(handlePop());
                    o2 = lastElement();
                }
                stack.push(o1);
                break;
            //'(' pushing into the stack
            case token === '(':
                stack.push(token);
                break;

            case token === ')':
                let topOfStack = lastElement();
                while (topOfStack !== '(') {
                    //checks if stack is not empty
                    assert(stack.length !== 0);

                    addToOutput(handlePop());
                    topOfStack = lastElement();
                }
                assert(lastElement() === '(');
                handlePop();
                break;
            default:
                throw new Error(`Invalid token: ${token}`);
        }
    };

    for (let i of input) {
        if (i === ' ') continue;
        handleToken(i);
    }

    while (stack.length !== 0) {
        assert(lastElement() !== '(');
        addToOutput(stack.pop());
    }
    debugger
    return output;
};

function calculate() {
    let result = toRPN(arrayCalculator)
}

//clears the last digit from display, by removing the last element from arrayCalculator
function clearLast() {
    arrayCalculator.splice(-1);
    updateDisplay();
}

//Updates the arrayCalculator to void so it will show a clean display
function clearDisplay() {
    arrayCalculator = [];
    updateDisplay();
}

//sends from JS file to HTML display
function updateDisplay(result) {
    if (result !== undefined) {
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = arrayCalculator.join(' ');
    }
}
