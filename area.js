const baseInputs = document.querySelectorAll(".angle-input");
const areabtn = document.querySelector("#btn-calculate");
const outPut = document.querySelector("#output");


function multiply(a,b){
    return a*b;
}


function areaOfTriangle(){
    const product = multiply(Number(baseInputs[0].value),Number(baseInputs[1].value));
    const answers = 0.5*product;
  
    outPut.innerText = "The area is "+ answers;
}




areabtn.addEventListener('click', areaOfTriangle);