const profit = document.querySelector(".profit_loss");
let next4 = document.querySelector("#next4");


profit.onclick = () =>{

    // enter name 
    const val = document.querySelector(".input-val").value;

    if (val == "") {
      alert("Please Enter Name Before Choosing Category");
      return;
    } 
// without name alert will be pop up

categories.classList.add("disp");
QuestionBox.classList.add("activeQuiz");
document.querySelector(".title-bar").innerHTML = "PROFIT & LOSS"
showQuestionProf_Loss(0);
queCounterprof_loss(1);
printname();
Runtimer();

}

// by this code when will click on next button new quection will come
next4.onclick = () => {
if(question_count < PROFIT.length - 1){
question_count++;
question_number++;
count++;
score.innerHTML = "Score: " + userscore;
showQuestionProf_Loss (question_count);
queCounterprof_loss(question_number);

}
else{
count++;
ShowResultSection();    //after questions finished this Result box will be shown 
}
}

showQuestionProf_Loss = (index) =>{
    const question_text = document.querySelector(".Question");
let showQuestion = PROFIT[index].numb + ". " + PROFIT[index].question;

let showOptions = '<span class="option">' +  PROFIT[index].option[0] + "</span>"+
'<span class="option">' +
PROFIT[index].option[1] + 
"</span>" +
'<span class="option">' +
PROFIT[index].option[2] +
"</span>" +
'<span class="option">' +
PROFIT[index].option[3] +
"</span>";
question_text.innerHTML = showQuestion;
answer_options.innerHTML = showOptions;
const option = answer_options.querySelectorAll(".option")   //loop will run until end of questions 
for(let i = 0 ; i< option.length;i++){
    option[i].setAttribute("onclick" , "optionSelectedProfit_loss(this)");
}

}
// green and red color will be added if answer is wrong or corrrect by this below code
function optionSelectedProfit_loss(answer){
    let userAns = answer.textContent;
    let correctAns = PROFIT[question_count].answer;
    let alloptions = answer_options.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correctAns");
        userscore += 1;
         //if answer is correct background color of answer will be green
      } else {
        answer.classList.add("incorrectAns");
        // if answer is wrong background color will be red.
    
        for (let i = 0; i < alloptions; i++) {
          if (answer_options.children[i].textContent == correctAns) {
            answer_options.children[i].classList.add("correctAns");
            answer_options.children[i].classList.remove("option");
           
          }
        }
      } 
  /* when we click on 1 option then this disabled function will run */
      for (let i = 0; i < alloptions; i++) {
        answer_options.children[i].classList.add("disabled");
      }
      // after clicking on options this show next button function will run
      next4.classList.add("show");
    }
    
    // inside legend box question count increse with every click
    function queCounterprof_loss(index) {
      const top_question_count = QuestionBox.querySelector(".qucount");
      let totalQuestioncount = "<span>" + index + "/" + PROFIT.length + "</span>";
      top_question_count.innerHTML = totalQuestioncount;
    }
    
