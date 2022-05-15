var myQuiz =[
    {
        question: " Javascript is an _______ language?",

        answers: {
            a: 'script',
            b: 'procedural',
            c: 'object-oriented',
            d: 'None of the above'

        },
        correctAnswer:'c' 
    },

    {
        question: " Which is the correct syntax to call an external JavaScript file in the current HTML document?",

        answers: {
            a: '<script link=" jsfile.js"></script>',
            b: '<script href=" jsfile.js"></script>',
            c: '<import src=" jsfile.js"></import>',
            d: '<script src="jsfile.js"></script>'

        },
        correctAnswer:'d' 
    },

    {
        question: " JavaScript ignores?",

        answers: {
            a: 'newlines',
            b: 'All of the above',
            c: 'tabs',
            d: 'spaces'

        },
        correctAnswer:'b' 
    },

    {
        question: " JavaScript code can be written in ____.",

        answers: {
            a: 'JavaScript file (.js file)',
            b: 'HTML document directly',
            c: 'In style sheets (.css file)',
            d: 'JavaScript file and in HTML document directly'

        },
        correctAnswer:'d' 
    },

    {
        question: " JWhich symbol is used separate JavaScript statements?",

        answers: {
            a: 'Semicolon (;)',
            b: 'Comma (,)',
            c: 'Colon (:)',
            d: 'Hyphen (_)'

        },
        correctAnswer:'a' 
    },

    {
        question: " Which JavaScript method is used to access an HTML element by id?",

        answers: {
            a: 'getElement(id)',
            b: 'elementById(id)',
            c: 'getElementById(id)',
            d: 'getElementById()'

        },
        correctAnswer:'c' 
    },

    {
        question: " Which JavaScript method is used to write HTML output?",

        answers: {
            a: 'console.log()',
            b: 'document.writeHTML()',
            c: 'document.output()',
            d: 'document.write()'

        },
        correctAnswer:'d' 
    },

    {
        question: "  Which JavaScript method is used to write into an alert box?",

        answers: {
            a: 'window.alertContent()',
            b: 'window.alertHTML()',
            c: 'window.alertBox()',
            d: 'window.alert()'

        },
        correctAnswer:'d' 
    },

    {
        question: " Which JavaScript keyword is used to declare a variable?",

        answers: {
            a: 'Var',
            b: 'var',
            c: 'Let',
            d: 'None of the above'

        },
        correctAnswer:'b' 
    },

    {
        question: "  In JavaScript, single line comment begins with ___.",

        answers: {
            a: '//',
            b: '/*',
            c: '$',
            d: 'None of the above'

        },
        correctAnswer:'a' 
    }

];

// PLACE THE FUNCTIONS HERE

function showQuiz(quiz,quizContainer){
    var output = [];
    var answers;
}

for (var i=0; i<questions.length; i++){
    answers = [];
}