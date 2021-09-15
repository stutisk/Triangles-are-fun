const inputs=document.querySelectorAll(".angle-input");
const btnSubmit=document.querySelector("#btn-isTriangle");
const outPut=document.querySelector("#output");


function isTriangle(){
     if (inputs[0].value && inputs[1].value && inputs[2].value) {
    if (
      Number(inputs[0].value) +
        Number(inputs[1].value) +
        Number(inputs[2].value) ==
      180
    ) {
      showMessage("It's a Triangle!!");
    } else {
      showMessage("it is not  a Triangle.");
    }
  } else {
    showMessage("Please enter all angles...");
  }
});

                            
btnSubmit.addEventListener("click",isTriangle)


const showMessage(msg){
     outPut.innerText= msg;
};


