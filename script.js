const quizData = [
    {
        question : 'in Which Lane Does Pantheon Play ?',
        a : 'MID',
        b : 'top',
        c : 'Support',
        d : 'All Of The Above',
        correct : 'd'
    }, 
    {
        question : 'Where Is Zed From ?',
        a: 'ionia',
        b : 'Zaun',
        c : 'Void',
        d : 'the blessed islands',
        correct : 'a'
    },
    {
        question : 'Which Elements Does Kennen Use ?',
        a: 'Fire',
        b : 'Water',
        c : 'Lighting',
        d : 'Ice',
        correct : 'c'
    },
    {
        question : 'Who Is The Ruined King ?',
        a: 'Jarvin IV',
        b : 'Viego',
        c : 'Jarvin III',
        d : 'Aatrox',
        correct : 'b'
        },
    {
        question : 'who is the World Ender',
        a: 'Vex',
        b : 'Ksante',
        c : 'Aatrox',
        d : 'b , c',
        correct : 'c'
    },
];

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
let currentQuiz = 0;
let score = 0;


loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   

}

function getSelected() {
    let answer = undefined;
    const answersEls = document.querySelectorAll('.answer')

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
function deselectAnswer() {
    answersEls.forEach((answer) => {
        answer.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You Answered ${score} Out Of ${quizData.length} <button onclick="location.reload()">Reload</button></h2>`
        }
    }
})