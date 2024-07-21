document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.innerText = '';
                return;
            }

            if (value === '=') {
                if (previousInput && operator && currentInput) {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    display.innerText = currentInput;
                    operator = '';
                    previousInput = '';
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                    display.innerText = previousInput + ' ' + operator;
                }
                return;
            }

            currentInput += value;
            display.innerText = previousInput + ' ' + operator + ' ' + currentInput;
        });
    });
});
