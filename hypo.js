const inputs = document.querySelectorAll(".angle-input");
const btnCalculate = document.querySelector("#btn-calculate");
const outPut = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumofsquares = a * a + b * b;
    return sumofsquares;
}

function calculateHypotenuse() {
    const sumofSquares=calculateSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
    const lengthOfHypotenus=Math.sqrt(sumofSquares);
    console.log(lengthOfHypotenus);
    outPut.innerText = "the length of hypotenuse is " + lengthOfHypotenus;
}

btnCalculate.addEventListener("click", calculateHypotenuse);