const quizData = [
    {
        question: "What date is our anniversary?",
        options: ["April 16th", "May 22nd", "April 22nd", "May 24th"],
        answer: "April 22nd"
    },
    {
        question: "When did we have our first kiss?",
        options: ["April 23rd", "April 22nd", "April 21st", "April 24th"],
        answer: "April 22nd"
    },
    {
        question: "What was our first meal that we had together?",
        options: ["Chocolate", "Soup", "Chinese", "Maccies"],
        answer: "Soup"
    },
    {
        question: "What type(s) is slowpoke?",
        options: ["Normal", "Psychic and Water", "Water", "Water and Normal"],
        answer: "Psychic and Water"
    },
    {
        question: "What game did we first play together?",
        options: ["Overwatch", "Minecraft", "Fortnite"],
        answer: "Fortnite"
    },
    {
        question: "What did we first watch together? (irl)",
        options: ["CaseOh", "OW Clips", "Fortnite Lore", "Space Documentary"],
        answer: "OW Clips"
    },
    {
        question: "First community day we went to?",
        options: ["Beldum", "Popplio", "Tynamo", "Mabosstiff"],
        answer: "Beldum"
    },
    {
        question: "Best Chloyo quote?",
        options: ["Zoos in a cage", "Fliny Shittle", "CD shaped disc", "I'd eat the flakes"],
        answer: "CD shaped disc"
    },
    {
        question: "My favourite thing about you?",
        options: ["Eyes", "Smile", "DAT ASSSSS", "Hands"],
        answer: "Smile"
    },
    {
        question: "Is she the best gf in the world?",
        options: ["Yes", "Yes", "Yes", "Yes"],
        answer: "Yes"
    },

];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}. Well done my baby!!! I already know I'm so proud of you. I'll have a new one of these next month, I love you!!! </p>
    `;
}

showQuestion();