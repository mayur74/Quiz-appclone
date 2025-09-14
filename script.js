const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Ganga River", correct: false },
            { text: "Yangtze River", correct: false },
        ]
    },
    {
        question: "Which is the national bird of India?",
        answers: [
            { text: "Sparrow", correct: false },
            { text: "Peacock", correct: true },
            { text: "Parrot", correct: false },
            { text: "Crow", correct: false },
        ]
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Europe", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Who invented the light bulb?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Isaac Newton", correct: false },
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Leopard", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "Korea", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionsNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionsNO + ". " + currentQuestion.question;

     currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selesctedBtn = e.target;
    const isCorrect = selesctedBtn.dataset.correct == "true";
    if(isCorrect){
        selesctedBtn.classList.add("correct");
        score++;
    }else{
        selesctedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();