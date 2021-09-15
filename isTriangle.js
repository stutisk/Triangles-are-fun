const anglesInput=document.querySelectorAll(".angle-input");
const btnSubmit=document.querySelector("#btn-isTriangle");
const outPut=document.querySelector("#output");


function isTriangle(){
     if (anglesInput[0].value && anglesInput[1].value && anglesInput[2].value) {
    if (
      Number(anglesInput[0].value) +
        Number(anglesInput[1].value) +
        Number(anglesInput[2].value) ==
      180
    ) {
      showMessage("It's a Triangle!!");
    } else {
      showMessage("it is not  a Triangle.");
    }
  } else {
    showMessage("Please enter all angles");
  }
});

                            
btnSubmit.addEventListener("click",isTriangle)


const showMessage(msg){
     outPut.innerText= msg;
};


