function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function insertNumber(number) {
    document.getElementById('display').value += number;
}

function insertOperator(operator) {
    document.getElementById('display').value += operator;
}

function insertFunction(func) {
    document.getElementById('display').value += func + '(';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
