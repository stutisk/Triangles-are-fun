const anglesInput=document.querySelectorAll(".angle-input");
const btnSubmit=document.querySelector("#btn-isTriangle");
const outPut=document.querySelector("#output");


function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
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
