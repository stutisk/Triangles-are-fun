const formquiz=document.querySelector(".quizForm");
const btnSubmit=document.querySelector(".btn");
const outPut=document.querySelector("#output");
const answers = ["Equilateral","√3/4 a*√3/4 a", "3","10cm","108 sq.cm"," 30 cm","18 cm","4.33 cm","∠B=∠D","16: 81"];


function calculateScore(e){
     e.preventDefault();
    
    const resultForm = new FormData(formquiz);
    let score=0;
    let index=0;
    for ( let value of resultForm.values()) {
        if(value === answers[index]){
            score = score+1;

        }
        index= index+1;
    }
    console.log(score);
    outPut.innerText="your score is " + score;


}


btnSubmit.addEventListener("click" ,calculateScore);