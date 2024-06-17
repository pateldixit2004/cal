
// function appendToDisplay(value) {
// //     const display = document.getElementById('display');
// //     display.value += value;
// document.getElementById("display").value += value;

// }


/**
 * 
 */
// function appendToDisplay(value) {
//     const display = document.getElementById('display');
    
//     if (value === '.') {
//         const currentValue = display.value;
//         const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
//         if (lastNumber.includes('.')) {
//             return; // Prevent adding another decimal point to the current number
//         }
//     }
    
//     display.value += value;
// }

// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     const operators = ['+', '-', '*', '/'];

//     if (value === '.') {
//         const currentValue = display.value;
//         const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
//         if (lastNumber.includes('.')) {
//             return; // Prevent adding another decimal point to the current number
//         }
//     } else if (operators.includes(value)) {
//         const lastChar = display.value.slice(-1);
//         if (operators.includes(lastChar)) {
//             return; // Prevent adding another operator
//         }
//     }

//     display.value += value;
// }

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const operators = ['+', '-', '*', '/'];

    if (value === '.') {
        const currentValue = display.value;
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            return; // Prevent adding another decimal point to the current number
        }
    } else if (operators.includes(value)) {
        const lastChar = display.value.slice(-1);
        console.log(lastChar);
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + value; // Replace the last operator with the new one
            return;
        }
    }

    display.value += value;
    adjustCursorPosition(display);
}
function clearDisplay()
{
    document.getElementById('display').value='';
}

function cancelLastEntry()
{
    const display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
    
}

function calculateResult()
{
    const display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }
    catch(e)
    {
        display.value="Wrong Value Entre";
    }
}
function adjustCursorPosition(display) {
    // To handle cursor positioning, we must focus and then set the selection range to the end
    display.focus();
    display.setSelectionRange(display.value.length, display.value.length);
}