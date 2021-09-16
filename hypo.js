const inputs = document.querySelectorAll(".angle-input");
const btnCalculate = document.querySelector("#btn-calculate");
const outPut = document.querySelector("#output");

function calculateSumOfSquares() {
    var a = Number(inputs[0].value);
	var b = Number(inputs[1].value);
    if (a == "" || b == "") {
		outPut.innerText = "Please enter both the values";
	} 
    else if (a < 0 || b < 0) {
		outPut.innerText = "Please enter positive values";
	}
     else {
        calculateHypotenuse(a,b);

     
	
	}
   
}

function calculateHypotenuse(a,b) {
 
    const lengthOfHypotenus=Math.sqrt(a * a + b * b); 
    outPut.innerText = "the length of hypotenuse is " + lengthOfHypotenus;
}

btnCalculate.addEventListener("click", calculateSumOfSquares);