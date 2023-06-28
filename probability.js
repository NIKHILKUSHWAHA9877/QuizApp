const probab = document.querySelector(".probab");
const next_button = QuestionBox.querySelector("#next");



probab.onclick = () => {
    //     const show = document.querySelector(".input-val").value;
    // if(show == ""){
    // alert("Please Enter Name to Move Ahead")
    // return;
    // }


    categories.classList.add("disp");
    QuestionBox.classList.add("activeQuiz");
    document.querySelector(".title-bar").innerHTML = "PROBABILITY";
    showQuestionprobab(0);
    questionCountprob(1);
    printname();
    Runtimer();
};

next_button.onclick = () => {
    if (question_count < PROBABILITY.length - 1) {
        question_count++;
        question_number++;
        count++;
        score.innerHTML = "Score: " + userscore;
        showQuestionprobab(question_count);
        questionCountprob(question_number);
        // next_button.classList.remove("show");
    } else {
        count++;
        ShowResultSection();
    }
};

showQuestionprobab = (index) => {
    const question_text = document.querySelector(".Question");

    let showQuestion = PROBABILITY[index].numb + "." + PROBABILITY[index].question;

  
    let showOptions = '<span class="option">' +
        PROBABILITY[index].option[0] + "</span>" +
        '<span class="option">' + PROBABILITY[index].option[1] + "</span>" +
        '<span class="option">' + PROBABILITY[index].option[2] + "</span>" +
        '<span class="option">' + PROBABILITY[index].option[3] + "</span>";
    
    question_text.innerHTML = showQuestion;
    answer_options.innerHTML = showOptions;
    
    const option = answer_options.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {

        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = PROBABILITY[question_count].answer;
    let alloptions = answer_options.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correctAns");
        userscore += 1;
    } else {
        answer.classList.add("incorrectAns");

        for (let i = 0; i < alloptions; i++) {
            if (answer_options.children[i].textContent == correctAns) {
                answer_options.children[i].classList.add("correctAns");
                answer_options.children[i].classList.remove("option");
            }


        }

    }

    for (let i = 0; i < alloptions; i++) {
        answer_options.children[i].classList.add("disabled");
    }
    next_button.classList.add("show")
}
function questionCountprob(index) {
    const top_question_count = QuestionBox.querySelector(".qucount");
    let totalQuestioncount =
        "<span>" + index + "/" + PROBABILITY.length + "</span>";
    top_question_count.innerHTML = totalQuestioncount;
}
