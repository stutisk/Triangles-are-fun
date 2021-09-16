const anglesInput=document.querySelectorAll(".angle-input");
const btnSubmit=document.querySelector("#btn-isTriangle");
const outPut=document.querySelector("#output");


<<<<<<< HEAD
function isTriangle(){
    const sumofangles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if (sumofangles == "") {
		outPut.innerText = "Please enter all the values";
	} 
    else if (sumofangles<0) {
		outPut.innerText = "Please enter positive values";
	} 
     else if (sumofangles===180){
        outPut.innerText="its a traingle";
    }
    else{
        outPut.innerText="its  not a traingle";
    }
=======
function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
>>>>>>> b4b3de60794f7e323a2a8c71f38ea7fcac843d8e
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(anglesInput[0].value),
    Number(anglesInput[1].value),
    Number(anglesInput[2].value)
  );
  if (sum === 180) {
   
    outPut.innerText = "yupieeeee!!, the angles form a triangle!";
  } else {
    
    outPut.innerText = "sorry ! The angle doesn't form a triangle";
  }
}
<<<<<<< HEAD



btnSubmit.addEventListener("click",isTriangle)
=======
btnSubmit.addEventListener("click", isTriangle);
>>>>>>> b4b3de60794f7e323a2a8c71f38ea7fcac843d8e
