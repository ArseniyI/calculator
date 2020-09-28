function buttonClick(button){
    var expression = document.getElementById("expression");
    
    if(expression.value === "0")
        expression.value = button.value;
    else
        expression.value = expression.value + button.value;

    calculate();
    return true;
}

function buttonClearAll(){
    var expression = document.getElementById("expression");
    expression.value = "0";
    calculate();
    return true;
}

function buttonBackspace(){
    var expression = document.getElementById("expression");
    expression.value = expression.value.substring(0, expression.value.length - 1);
    calculate();
    return true;
}

function calculate(){
    var expression = document.getElementById("expression");
    var result = document.getElementById("result");
    result.innerText = eval(expression.value);
    return true;
}