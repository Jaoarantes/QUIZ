const startQuizButton = document.querySelector(".start-quiz-button")
const questionContainer = document.querySelector(".class-container")
const answersContainer = document.querySelector(".answers-container")
const questionText = document.querySelector(".question")
const nextQuestionButton = document.querySelector(".next-quiz-button")

startQuizButton.addEventListener("click", startQuiz)
nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0

function startQuiz() {
    startQuizButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextQuestionButton.classList.add("hide")    

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button") 
        newAnswer.classList.add("answer-button")
        newAnswer.textContent = answer.text
        if (answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        } else {
            document.body.classList.add("incorrect")
        }

    document.querySelectorAll(".answer-button").forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true 
    })

    nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

















const questions = [
    {
        question: "Qual país ganhou a Copa do Mundo de 2018?",
        answers: [
            { text: "Brasil", correct: false },
            { text: "Argentina", correct: false },
            { text: "França", correct: true },
            { text: "Espanha", correct: false }
        ]
    },
     {
        question: "Quem é o maior artilheiro da história da Liga dos Campeões da UEFA?",
        answers: [
            { text: "Lionel Messi", correct: false },
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Raúl", correct: false },
            { text: "Robert Lewandowski", correct: false }
        ]
    },
     {
        question: "Em que ano o Brasil sediou a Copa do Mundo pela última vez antes de 2014?",
        answers: [
            { text: "1994", correct: false },
            { text: "1950", correct: true },
            { text: "1998", correct: false },
            { text: "1970", correct: false }
        ]
    },
     {
        question: "Qual é o apelido da seleção nacional de futebol da Argentina?",
        answers: [
            { text: "Os Taurinos", correct: false },
            { text: "Los Gauchos", correct: false },
            { text: "La Albiceleste", correct: true },
            { text: "Los Churros", correct: false }
        ]
    }
]