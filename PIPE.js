const pipe = document.querySelector(".pipe");
let next2 = document.querySelector("#next2");

// on click of pipe categorie this function will be executed
pipe.onclick = () => {
  // const show = document.querySelector(".input-val").value;
  // if(show == ""){
  //   alert("Please Enter Name to Move Ahead");
  //   return;
  // }
  categories.classList.add("disp");
  QuestionBox.classList.add("activeQuiz");//for showing question section
  document.querySelector(".title-bar").innerHTML = "PIPE AND CRISTRENS";
  showQuestionpipes(0);
  queCounterprofit(1);
  printname();
  Runtimer();
};
// This next2 button will work only for changing next question of pipe
next2.onclick = () => {
  if (question_count < PIPES.length - 1) {
    question_count++;
    question_number++;
    count++;
    score.innerHTML = "Score: " + userscore;
    showQuestionpipes(question_count);
    queCounterprofit(question_number);
  }
  else {
    count++;
    ShowResultSection();
  }
};
showQuestionpipes = (index) => {

  const question_text = document.querySelector(".Question");

  let showQuestion = PIPES[index].numb + "." + PIPES[index].question;

  let showOptions = '<span class="option">' +
    PIPES[index].option[0] + 
    "</span>" +
    '<span class="option">' + PIPES[index].option[1] + 
    "</span>" + 
    '<span class="option">' +
    PIPES[index].option[2] +
    "</span>" +
    '<span class="option">' +
    PIPES[index].option[3] +
    "</span>";
  question_text.innerHTML = showQuestion;
  answer_options.innerHTML = showOptions;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelectedpipe(this)");//adding onclick event on options
  }
};


//if answer is correct background color of answer will be green
function optionSelectedpipe(answer) {
  let userAns = answer.textContent;
  let correctAns = PIPES[question_count].answer;
  let alloptions = answer_options.children.length;

  if (userAns == correctAns) {
    answer.classList.add("correctAns");
userscore +=1;
  }
  else {
    answer.classList.add("incorrectAns");



    for ( i = 0; i < alloptions; i++) {

      if (answer_options.children[i].textContent == correctAns) {
        answer_options.children[i].classList.add("correctAns");
        answer_options.children[i].classList.remove("option");

      }
    }
  }
  for (let i = 0; i < alloptions; i++) {
    answer_options.children[i].classList.add("disabled");
  }

  next2.classList.add("show");
}

// This section changes question count on the top of question
function queCounterprofit(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount = "<span>" + index + "/" + PIPES.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
