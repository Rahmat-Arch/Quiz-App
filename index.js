const answersArea = document.getElementById("answers")
const questionHeading = document.getElementById('question')
const startButton = document.getElementById('start')
const points = document.getElementById('points')
let totalPoints = 0
let currentQuestionIndex = 0
const questions = [
    {
        question: "Which is the largest creature?",
        answers: [
            { name: "Crow", isCorrect: false },
            { name: "Whale", isCorrect: true },
            { name: "Bear", isCorrect: false },
            { name: "Ant", isCorrect: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { name: "Berlin", isCorrect: false },
            { name: "Madrid", isCorrect: false },
            { name: "Paris", isCorrect: true },
            { name: "Rome", isCorrect: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { name: "Earth", isCorrect: false },
            { name: "Mars", isCorrect: true },
            { name: "Jupiter", isCorrect: false },
            { name: "Venus", isCorrect: false },
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { name: "William Shakespeare", isCorrect: true },
            { name: "Charles Dickens", isCorrect: false },
            { name: "Mark Twain", isCorrect: false },
            { name: "Jane Austen", isCorrect: false },
        ]
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answers: [
            { name: "Oxygen", isCorrect: false },
            { name: "Carbon Dioxide", isCorrect: true },
            { name: "Nitrogen", isCorrect: false },
            { name: "Hydrogen", isCorrect: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { name: "Gold", isCorrect: false },
            { name: "Iron", isCorrect: false },
            { name: "Diamond", isCorrect: true },
            { name: "Silver", isCorrect: false },
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { name: "Atlantic Ocean", isCorrect: false },
            { name: "Indian Ocean", isCorrect: false },
            { name: "Pacific Ocean", isCorrect: true },
            { name: "Arctic Ocean", isCorrect: false },
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            { name: "5", isCorrect: false },
            { name: "6", isCorrect: false },
            { name: "7", isCorrect: true },
            { name: "8", isCorrect: false },
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answers: [
            { name: "K2", isCorrect: false },
            { name: "Mount Everest", isCorrect: true },
            { name: "Kangchenjunga", isCorrect: false },
            { name: "Lhotse", isCorrect: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { name: "O2", isCorrect: false },
            { name: "H2O", isCorrect: true },
            { name: "CO2", isCorrect: false },
            { name: "NaCl", isCorrect: false },
        ]
    }
];

function startQuestions() {
    questionHeading.innerHTML = `${currentQuestionIndex+1}. ${questions[currentQuestionIndex].question}`
    startButton.remove()
    for (i = 0; i < 4; i++) {
        let option = document.createElement('button')
        option.innerHTML = questions[currentQuestionIndex].answers[i].name
        option.classList = "options"
        option.addEventListener('click', (e) => {
            checkCorrect(e)
        })
        answersArea.appendChild(option)
    }
}
function checkCorrect(e) {
    if (e.target.tagName === "BUTTON") {
        let options = document.querySelectorAll(".options")
        options.forEach((item, index) => {
            if (item.innerHTML === questions[currentQuestionIndex].answers[index].name && questions[currentQuestionIndex].answers[index].isCorrect ===true) {
                if (e.target.innerHTML === item.innerHTML){
                    totalPoints +=1
                }
                points.innerHTML =`Total points: ${totalPoints}`
                item.classList.add("correct")
            } else {
                item.classList.add("wrong")
                console.log("RED ROCKED");
                console.log(item.innerHTML)
            }
        })
        options.forEach(element => {
            element.disabled = true
        });
        let nextBTN = document.createElement('button')
        nextBTN.innerHTML = "Next"
        nextBTN.classList = "next"
        nextBTN.addEventListener('click', (e) => {
            handleNext(e)
        })
        answersArea.appendChild(nextBTN)
    }
}
function handleNext(){
    let length = questions.length
    if (currentQuestionIndex < length -1){
        currentQuestionIndex +=1
        answersArea.innerHTML =""
        startQuestions()
    }else{
        questionHeading.innerHTML = `Congratulations you have scored ${totalPoints} Points`
        answersArea.innerHTML =""
    }
}