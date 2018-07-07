$(document).ready(function() {

    // starting variables
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var incompleteAnswers = 0;
    
    var questions = [{
            question: "Which team won the NBA championship in 2018?",
            choices: ["LA Lakers", "GS Warriors", "Chicago Bulls"],
            answerIndex: 1,
            identifier: "questionOne"
        },
        {
            question: "What team did Kobe Bryant play for ?",
            choices: ["LA Lakers", "NY Knicks", "Boston Celtics"],
            answerIndex: 0,
            identifier: "questionTwo"
        },
        {
            question: "How many championship did Michael Jordan win?",
            choices: ["12", "6", "8"],
            answerIndex: 1,
            identifier: "questionThree"
        },
        {
            question: "Which team drafted Lebron James for 2018-19 season?",
            choices: ["LA Lakers", "Cleveland Cavaliers", "Chicago Bulls"],
            answerIndex: 0,
            identifier: "questionFour"
        },
        {
            question: "Where is United Center Arena?",
            choices: ["Chicago", "Boston", "Sacramento"],
            answerIndex: 0,
            identifier: "questionFive"
        },
        {
            question: "Who owns LA Clippers?",
            choices: ["Steva Ballmer", "Bill Gates", "Dan Gilbert"],
            answerIndex: 0,
            identifier: "questionSix"
        },
        {
            question: "Who has won the most regular season MVP Awards of the following players??",
            choices: ["LeBron James", "Jimmy Buttler", "Michael Jordan"],
            answerIndex: 0,
            identifier: "questionSeven"
        },
        {
            question: "Which of the following players was NOT traded for Kyrie Irving?",
            choices: ["Jae Cowder", "Isaiah Thomas", "Avery Bradley"],
            answerIndex: 2,
            identifier: "questionEight"
        },
        {
            question: "Which team did Paul Pierce play his final game for?",
            choices: ["Boston Celtics", "Washington Wizards", "LA Clippers"],
            answerIndex: 2,
            identifier: "questionNine"
        },
        {
            question: "How many teams did Ray Allen win an NBA Championship with?",
            choices: ["1", "2", "3"],
            answerIndex: 1,
            identifier: "questionTen"
            
        }];
    
    //call iteration function and pass through array argument
    iterateThroughQuestionsArray(questions);
    
    //function to iterate through questions array
    function iterateThroughQuestionsArray(questions) {
    
        for(var x = 0; x < questions.length; x++){
    
            //call display questions function
            displayQuestions(questions[x]);
            //call display choices function
            displayChoices(questions[x].choices, x);
    
        };
        //call display button function
        displayButton();
    };
    
    //append button to bottom of the form
    function displayButton(){
    
        $("#submitButton").append("<input type='submit' value='submit' id='buttonStyle'>");
    
    };
    
    //append questions
    function displayQuestions(questions) {
    
        $(".question-div").append("<div class='question-styling'>" + questions.question + "</div>");
    
    };
    
    //append choices
    function displayChoices(choices, questionIndex) {
    
        for(var y = 0; y < choices.length; y++) {
    
        $(".question-div").append(`<input type='radio' name=${questions[questionIndex].identifier} class='options' value=${y}>${choices[y]} </input> <br />`);
    
        }
    };
    
    //submit button calls for time to stop, calculate function, and print results function
    $("#submitButton").on("click", function(){
        clearInterval(timer);
        calculateScore();
        printResults();
    });
    
    //calculate correct and incorrect answers, as well as unselected answers
    function calculateScore() {
    
        $.each(questions, function(key, value) {
    
            var valueOf = $(`input[name=${value.identifier}]:checked`).val()
    
            if (valueOf == value.answerIndex) {
                correctAnswers++;
            } else if (valueOf == undefined) {
                incompleteAnswers++;
            } else {
                wrongAnswers++;
            };
    
        });
    };
    
    //print results of quiz
    function printResults() {
        $(".question-div").html("<br><br><h4><b>Correct Answers : </b>" + correctAnswers + "</h4> <br /> <h4><b>Incorrect Answers : </b>" + wrongAnswers + "</h4> <br /> <h4><b>Number of Questions Left Unanswered : </b>" + incompleteAnswers + "</h4><br><br>")
        $("#submitButton").empty();
    };
    
    //timer countdown
    var secondsRemaining = 120;
    
    var timer = setInterval(timeQuiz, 1000)
    
    function timeQuiz() {
        displayTime();
        if (secondsRemaining !== 0) {
            secondsRemaining -= 1;
        }
        if (secondsRemaining == 0) {
        clearInterval(timer);
        calculateScore();
        printResults();
        }
    };
    
    function displayTime() {
        $("#timeRemaining").html(secondsRemaining);
    };
    
    function resetGame() {
    
    
    }
    
    });