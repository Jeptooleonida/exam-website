// create variables
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");
const option3 = document.getElementById("3");
const option4 = document.getElementById("4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const quizText = document.getElementById("quiz");

// define variables
let currentQuestion = 0;
let score = 0;

let myQuiz =[
    {
        question: " Javascript is an _______ language?",

        answers: {
            option1: 'script',
            option2: 'procedural',
            option3: 'object-oriented',
            option4: 'None of the above'

        },
        correctAnswer:'option3'
    },

    {
        question: " Which is the correct syntax to call an external JavaScript file in the current HTML document?",

        answers: {
            option1: '<script link=" jsfile.js"></script>',
            option2: '<script href=" jsfile.js"></script>',
            option3: '<import src=" jsfile.js"></import>',
            option4: '<script src="jsfile.js"></script>'

        },
        correctAnswer:'option4' 
    },

    {
        question: " JavaScript ignores?",

        answers: {
            option1: 'newlines',
            option2: 'All of the above',
            option3: 'tabs',
            option4: 'spaces'

        },
        correctAnswer:'option2' 
    },

    {
        question: " JavaScript code can be written in ____.",

        answers: {
            option1: 'JavaScript file (.js file)',
            option2: 'HTML document directly',
            option3: 'In style sheets (.css file)',
            option4: 'JavaScript file and in HTML document directly'

        },
        correctAnswer:'option4' 
    },

    {
        question: " JWhich symbol is used separate JavaScript statements?",

        answers: {
            option1: 'Semicolon (;)',
            option2: 'Comma (,)',
            option3: 'Colon (:)',
            option4: 'Hyphen (_)'

        },
        correctAnswer:'option1' 
    },

    {
        question: " Which JavaScript method is used to access an HTML element by id?",

        answers: {
            option1: 'getElement(id)',
            option2: 'elementById(id)',
            option3: 'getElementById(id)',
            option4: 'getElementById()'

        },
        correctAnswer:'option3' 
    },

    {
        question: " Which JavaScript method is used to write HTML output?",

        answers: {
            option1: 'console.log()',
            option2: 'document.writeHTML()',
            option3: 'document.output()',
            option4: 'document.write()'

        },
        correctAnswer:' option4' 
    },

    {
        question: "  Which JavaScript method is used to write into an alert box?",

        answers: {
            option1: 'window.alertContent()',
            option2: 'window.alertHTML()',
            option3: 'window.alertBox()',
            option4: 'window.alert()'

        },
        correctAnswer:'option4' 
    },

    {
        question: " Which JavaScript keyword is used to declare a variable?",

        answers: {
            option1: 'Var',
            option2: 'var',
            option3: 'Let',
            option4: 'None of the above'

        },
        correctAnswer:'option2' 
    },

    {
        question: "  In JavaScript, single line comment begins with ___.",

        answers: {
            option1: '//',
            option2: '/*',
            option3: '$',
            option4: 'None of the above'

        },
        correctAnswer:'option1' 
    }

];

// onclick events
prevBtn.addEventListener("click",prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

const lastQuiz =question.length-1;
//function to display questions
function displayQuiz(){
    let qn = myQuiz[currentQuestion];
    myQuiz.innerHTML = "<p>"+qn.myQuiz +"</p>";
    option1.innerHTML = qn.option1;
    option2.innerHTML = qn.option2;
    option3.innerHTML = qn.option3;
    option4.innerHTML = qn.option4;
}


// function to begin the quiz

/*function startQuiz(){
    currentQuestion = 0;
    totalScore.innerHTML=myQuiz.length;
    quizText.innerHTML =myQuiz[currentQuestion].question;
    option1.innerHTML =myQuiz[currentQuestion].o
}























function showQuiz(quiz,quizContainer){
    var output = [];
    var answers;


for (var i=0; i<quiz.length; i++){
    answers = [];

for (letter in quiz[i].answers){
        answers.push(
            'label'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quiz[i].answers[letter]

            + '</label>'

        );
    
    }

    output.push(
        '<div class = "question">' + quiz[i].question + '</div'
        + '<div class="answers">' + answers.join('') + '</div>'

    );
}
quizContainer.innerHTML = output.join('');



}

showQuiz(quiz, quizContainer);

// function to calculate the result on quiz
 function result(quiz,quizContainer,resultContainer){
     var answerContainer = quizContainer.querySelectorAll('.answers')

     var userAnswer = '';
     var numCorrect = 0;



   for (var i=0; i<quiz.length; i++){
       userAnswer = (answerContainer[i].querySelector('input[name=quiz '+i+']:checked')||{}).value;


       if (userAnswer === quiz[i].correctAnswer){
           numCorrect++;
           answerContainer[i].style.color = 'blue';
       }
       else{
           answerContainer[i].style.color = 'red';
       }
   }
   resultContainer.innerHTML = numCorrect + 'out of' +quiz.length;

 }
 // show results after submitting the questions
 submitButton.onclick = function(){
	showResults(quiz, quizContainer, resultsContainer);
}
*/