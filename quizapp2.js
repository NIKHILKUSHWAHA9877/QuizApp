

const categories = document.querySelector(".categories-box");
const backbutton = document.querySelector(".backbtn button");
const QuestionBox = document.querySelector(".Question-box");
let answer_options = document.querySelector(".answer-options");
const timecount = document.querySelector("#timer");
const score = document.querySelector("#score");
const ShowResult = document.querySelector(".result-container");
let username = document.querySelector(".input-val").value;
const result_box = document.querySelector(".result-container");
const restart = document.querySelector(".restart");
const home = document.querySelector(".home");

let question_count = 0;
let question_number = 1;
let userscore = 0;
let timeStart;//for set interval
let numb = 300;//300sec timer
let count = 0;//This variable is for total attempts by user

printname = () => {
  const showName = document.querySelector(".input-val").value;
if(isNaN(showName)){
document.querySelector("#displayname").innerHTML = "Welcome " + showName + " 😎🙌";
document.querySelector(".name").innerHTML =
"Participent Name : " + " " + showName + " ";

}

};
const Runtimer = () => {
  timeStart = setInterval(() => {
    timecount.innerHTML = numb;
    numb--;

    // if time is 00 then Result will be shown directly.

    if (numb == 0) {
      QuestionBox.classList.remove("activeQuiz");
      
     ShowResultSection();
    }


    // if time left is less then 3 color of timer will be red.
    if (numb < 30) {
      timecount.style.color = "red";
      timecount.style.borderColor = "red";
    }
  }, 1000);
};



// Show Result Box After our 10 questions finished...
function ShowResultSection(){
categories.classList.remove("activeInfo");
QuestionBox.classList.remove("activeQuiz");
ShowResult.classList.add("activeResult")
const Participent_name = document.querySelector(".name-result");
const timeTaken = document.querySelector(".time_taken");
const quesAttempt = document.querySelector(".attempts")
const correctAnswers = document.querySelector(".correct");
const wrongAnswers = document.querySelector(".wrong")
const Percentage = document.querySelector(".Percentage");

  let username = document.querySelector(".input-val").value;
  let attemp = document.querySelector(".attempts");
   ShowNameTag = "<strong>"+"("+ username +")"+" "+ "</strong>" + "Your Result is :-" ;
   Participent_name.innerHTML = ShowNameTag;
   let time = Math.abs(300 - numb);
 timeTaken.innerHTML = `You took: <strong>${time}</strong> seconds to complete`
//  "You took "+ ": "+"<strong>" +time +"</strong>" +" "+ "seconds to complete";
   
let correctAns = `No. of Correct Answers are: ${userscore}`
correctAnswers.innerHTML = correctAns;

let wrongAns = 10 -  userscore;
wrongAnswers.innerHTML = `No. of Wrong Answers are: ${wrongAns}`

let OverallPerc = (userscore / 10) * 100;
Percentage.innerHTML = `Your Percentage Are: <strong>${OverallPerc}</strong>%`
attemp.innerHTML = `Total Attempts: <strong> ${count}</strong>`
console.log("working"); 
}



 // Window reload at result page after clicking on home button
home.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload(true); 
   
  }, 1);
});