const ages = document.querySelector(".ages");
let next3 = document.querySelector("#next3");
// const nextbtn = document.querySelector(".next-button");
ages.onclick = () => {
    //     const show = document.querySelector(".input-val").value;
    // if(show == ""){
    // alert("Please Enter Name to Move Ahead")
    // return;
    // }


    categories.classList.add("disp");
    QuestionBox.classList.add("activeQuiz");
    document.querySelector(".title-bar").innerHTML = "Ages";
    showQuestionages(0);
    questionCountage(1);
    printname();
    Runtimer();
};

next3.onclick = () => {
    if (question_count < Ages.length - 1) {
        question_count++;
        question_number++;
        count++;
        score.innerHTML = "Score: " + userscore;
        showQuestionages(question_count);
        questionCountage(question_number);
        //   next_button.classList.remove("show");
        //   next2.classList.remove("show");
        //   next3.classList.remove("show");
    } else {
        count++;
        ShowResultSection();
    }
};

// This section is for displaying questions related Ages.
showQuestionages = (index) => {
    const question_text = document.querySelector(".Question");

    let showQuestion =
        Ages[index].numb + ". " + Ages[index].question;
    let showOptions =
        '<span class="option">' +
        Ages[index].option[0] +
        "</span>" +
        '<span class="option">' +
        Ages[index].option[1] + //add loops here
        "</span>" +
        '<span class="option">' +
        Ages[index].option[2] +
        "</span>" +
        '<span class="option">' +
        Ages[index].option[3] +
        "</span>";

    question_text.innerHTML = showQuestion;
    answer_options.innerHTML = showOptions;
    const option = answer_options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelectedages(this)"); //adding onclick event on options
    }
};


// This section compares answer of user selected with correct answer
function optionSelectedages(answer) {
    let userAns = answer.textContent;
    let correctAns = Ages[question_count].answer;
    let alloptions = answer_options.children.length;

    if (userAns == correctAns) {
        answer.classList.add("correctAns"); //if answer is correct background color of answer will be green
        userscore += 1;
      

    } else {
        answer.classList.add("incorrectAns"); // if answer is wrong background color will be red.

        for (let i = 0; i < alloptions; i++) {
            if (answer_options.children[i].textContent == correctAns) {
                answer_options.children[i].classList.add("correctAns");
                answer_options.children[i].classList.remove("option");
        
            }
        }
    }

    // once user click one option disable all other options
    for (let i = 0; i < alloptions; i++) {
        answer_options.children[i].classList.add("disabled");
       
    }

    next3.classList.add("show");
}


// This section changes question count on the top of question
function questionCountage(index) {
    const top_question_count = QuestionBox.querySelector(".qucount");
    let totalQuestioncount = "<span>" + index + "/" + Ages.length + "</span>";
    top_question_count.innerHTML = totalQuestioncount;
}












