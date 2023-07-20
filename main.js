let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
function appendToDisplay(value) {
    // Limit to only one decimal point in the number
    if (value === '.' && displayValue.includes('.')) {
        return;
    }
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === "." || key === ",") {
        appendToDisplay(".");
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
