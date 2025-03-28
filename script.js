function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
 
 
    if(num1 === 0 || num2 === 0) {
        alert("Please enter valid numbers!");
        return;
    let result;
     
     
    if(operation === 'add') result = num1 + num2;
    else if(operation === 'subtract') result = num1 - num2;
    else if(operation === 'multiply') result = num1 * num2;
    else if(operation === 'divide') result = num1 / num2;
     
     
    document.getElementById('result').innerText = 'Energon Result: ' + result;
    }
}