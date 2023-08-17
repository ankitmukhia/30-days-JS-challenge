const inputField = document.getElementById('text-input');
const buttons = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const equalsButton = document.getElementById('equal');
const clearField = document.getElementById('clear');

const arithmeticOperation = (val1, val2, operator) => {
    if (!isNaN(val1) && !isNaN(val2)) {
        let currentVal;
        switch (operator) {
            case '+':
                currentVal = val1 + val2
                break;
            case '*':
                currentVal = val1 * val2
                break;
            case '-':
                currentVal = val1 - val2
                break;
            case '/':
                currentVal = val1 / val2
                break;
            default:
                inputField.value = 'provide some expression';
                return;
        }
        inputField.value = currentVal;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        inputField.value += button.textContent
    })
})

operator.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        const operator = operatorButton.textContent
        inputField.value += ` ${operator} `;
    })
})

equalsButton.addEventListener('click', () => {
    const val = inputField.value;
    const part = val.split(' ')
    // checking if ew have value to perform some thing, else give error
    if (part.length === 3) {
        let val1 = Number(part[0]);
        let val2 = Number(part[2]);
        let operator = part[1];
        arithmeticOperation(val1, val2, operator)
    } else {
        inputField.value = 'provide some expression';
    }
})

clearField.addEventListener('click', () => {
    inputField.value = ''
})