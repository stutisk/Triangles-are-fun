const inputs = document.querySelectorAll(".angle-input");
const areabtn = document.querySelector("#btn-calculate");
const outPut = document.querySelector("#output");






function multiply(){
    var a = Number(inputs[0].value);
	var b = Number(inputs[1].value);
    if (a == "" || b == "") {
		outPut.innerText = "Please enter both the values";
	} 
    else if (a < 0 || b < 0) {
		outPut.innerText = "Please enter positive values";
	}
    else{
        areaOfTriangle(a,b);
    }
    
}
function areaOfTriangle(a,b){
    const answers = 0.5 *a * b;
  
outPut.innerText = "The area is "+ answers;
}
    
 



areabtn.addEventListener('click', multiply);