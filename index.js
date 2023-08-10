const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

let output = ""
let specialCharacters = ["%" , "+" , "-" , "*" , "/"];
function calculate(buttonValue){
   
    if(buttonValue === "=" && output !== ""){
       output = eval(output.replace("%" , "/100"))
    }
    else if ( buttonValue ==="AC" ){
        output = "";
    }
    else if (buttonValue === "DEL"){
        output = output.slice(0,-1);
    }
    else{
        if (output === "" && specialCharacters.includes(buttonValue)) return ;
        else if (buttonValue === "=" && output === "") return;
        output += buttonValue
    } 

    display.value = output;
}

buttons.forEach( (button) => {
    button.addEventListener( "click"  ,  (e) => calculate(e.target.innerText)   )
} )

function add( a, b ){
    return a+b;
}

console.log(add(1,2))
