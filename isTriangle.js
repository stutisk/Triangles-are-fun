const inputs=document.querySelectorAll(".angle-input");
const btnSubmit=document.querySelector("#btn-isTriangle");
const outPut=document.querySelector("#output");


function isTriangle(){
    const sumofangles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumofangles===180){
        outPut.innerText="its a traingle";
    }
    else{
        outPut.innerText="its  not a traingle";
    }
}



function calculateSumOfAngles(angle1,angle2,angle3){
        const sumofangles=angle1+angle2+angle3;
        return(sumofangles);
}



btnSubmit.addEventListener("click",isTriangle)