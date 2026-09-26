document.querySelector("button").addEventListener("click", gradeQuiz);

let q1Message = document.querySelector("#q1Message");
let q2Message = document.querySelector("#q2Message");
let q3Message = document.querySelector("#q3Message");
let q4Message = document.querySelector("#q4Message");
let q5Message = document.querySelector("#q5Message");
let scoreMessage = document.querySelector("#scoreMessage");
let attemptsMessage = document.querySelector("#attemptsMessage");

let quizAttempts =
    Number(localStorage.getItem("quizAttempts")) || 0;

let congratsMessage =
    document.querySelector("#congratsMessage");

attemptsMessage.textContent =
    "Quiz attempts: " + quizAttempts;

let q1Image = document.querySelector("#q1Image");
let q2Image = document.querySelector("#q2Image");
let q3Image = document.querySelector("#q3Image");
let q4Image = document.querySelector("#q4Image");
let q5Image = document.querySelector("#q5Image");

const correctMessage = "You got it right!";
const incorrectMessage = "You got it wrong";


shuffleQ1();


function shuffleQ1() {

    let q1Choices = ["select", "option", "dropdown", "menu"];

    q1Choices = shuffleArray(q1Choices);

    console.log(q1Choices);

    for (let i of q1Choices) {

        // Create radio button
        let inputElement = document.createElement("input");

        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;


        // Create label
        let labelElement = document.createElement("label");

        labelElement.textContent = i;

        labelElement.prepend(inputElement);


        // Add choice to page
        document.querySelector("#q1Choices").append(labelElement);
    }
}


function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


function gradeQuiz() {

    // Question 1
    let score = 0;

    quizAttempts += 1;

    localStorage.setItem(
        "quizAttempts",
        quizAttempts
    );

    attemptsMessage.textContent =
        "Quiz attempts: " + quizAttempts;


    let q1Answer = "select";

    let selectedQ1 = document.querySelector("input[name=q1]:checked");

    if (selectedQ1 == null) {

        q1Message.textContent = "Please answer question 1";
        q1Message.style.color = "red";

        q1Image.src = "images/incorrect.svg";
        q1Image.alt = "Incorrect answer";

    } else {

        let userAnswerQ1 = selectedQ1.value;

        if (q1Answer == userAnswerQ1) {

            q1Message.textContent = correctMessage;
            q1Message.style.color = "green";

            q1Image.src = "images/correct.svg";
            q1Image.alt = "Correct answer";

            score += 20;

        } else {

            q1Message.textContent = incorrectMessage;
            q1Message.style.color = "red";

            q1Image.src = "images/incorrect.svg";
            q1Image.alt = "Incorrect answer";
        }
    }


    // Question 2
    let q2Answer = "text";

    let userAnswerQ2 = document.querySelector("#q2").value;

    if (q2Answer == userAnswerQ2) {

        q2Message.textContent = correctMessage;
        q2Message.style.color = "green";

        q2Image.src = "images/correct.svg";
        q2Image.alt = "Correct answer";

        score += 20;

    } else {

        q2Message.textContent = incorrectMessage;
        q2Message.style.color = "red";

        q2Image.src = "images/incorrect.svg";
        q2Image.alt = "Incorrect answer";
    }


    // Question 3
    let q3Answer = "option";

    let userAnswerQ3 = document.querySelector("#q3").value;

    if (q3Answer == userAnswerQ3) {

        q3Message.textContent = correctMessage;
        q3Message.style.color = "green";

        q3Image.src = "images/correct.svg";
        q3Image.alt = "Correct answer";

        score += 20;

    } else {

        q3Message.textContent = incorrectMessage;
        q3Message.style.color = "red";

        q3Image.src = "images/incorrect.svg";
        q3Image.alt = "Incorrect answer";
    }


    // Question 4
    let q4Answer = 5;

    let userAnswerQ4 = document.querySelector("#q4").value;

    if (q4Answer == userAnswerQ4) {

        q4Message.textContent = correctMessage;
        q4Message.style.color = "green";

        q4Image.src = "images/correct.svg";
        q4Image.alt = "Correct answer";

        score += 20;

    } else {

        q4Message.textContent = incorrectMessage;
        q4Message.style.color = "red";

        q4Image.src = "images/incorrect.svg";
        q4Image.alt = "Incorrect answer";
    }

    // Question 5
    let q5Input = document.querySelector("#q5Input").checked;
    let q5Select = document.querySelector("#q5Select").checked;
    let q5Div = document.querySelector("#q5Div").checked;

    if (q5Input && q5Select && !q5Div) {

        q5Message.textContent = correctMessage;
        q5Message.style.color = "green";

        q5Image.src = "images/correct.svg";
        q5Image.alt = "Correct answer";

        score += 20;

    } else {

        q5Message.textContent = incorrectMessage;
        q5Message.style.color = "red";

        q5Image.src = "images/incorrect.svg";
        q5Image.alt = "Incorrect answer";
    }

    scoreMessage.textContent =
    "Score: " + score + " / 100";

    if (score > 80) {

        congratsMessage.textContent =
            "Congratulations! Great job!";

        congratsMessage.style.color = "green";

    } else {

        congratsMessage.textContent = "";
    }

}
