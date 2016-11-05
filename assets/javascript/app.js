//Create global variable for counter
var counter = 120;

//Create global variable for game that lists questons objects
var game = {
    questions: [{
        question: 'Does the US border four other countries?',
        answer: false
    }, {
        question: 'Is a rose the national flower of the US? ',
        answer: true
    }, {
        question: 'Is the Missouri river the longest river in the US?',
        answer: true
    }, {
        question: 'Is the US the fourth largest country in the world?',
        answer: true
    }, {
        question: 'Did FDR serve 5 terms?',
        answer: false
    }, {
        question: 'Was there only 46 states when the Cubs won the World Series last?',
        answer: true
    }, {
        question: 'There were three presidents who signed the Declaration of Independance went on to become president.',
        answer: false
    }, {
        question: 'Is English the official language of the US?',
        answer: false
    }, {
        question: 'Are there are 5 timezones in the US?',
        answer: false
    }, {
        question: 'Is Juneau is the largest city in the US?',
        answer: false
    }]
};

//set answers to 0
var correctVar = 0;
var incorrectVar = 0;

//set timer for 120 seconds 
var timer = setInterval(twoMinutes, 1000);
console.log('timer started');

//Create global function for counter to decrease every second
function twoMinutes() {
    $('#timer').html('Time Remaining:' + counter + ' seconds');
    counter--;

    //if the counter is less than 0, end the game and display results page
    if (counter < 0) {

        console.log('timer ended');

        finishGame();
        console.log('display results');
    }

}

//Start the Game
$(document).ready(function() {

    //display all questions and radio buttons
    function displayQuestions() {
        var questionsHtml = '';
        for (var i = 0; i < game.questions.length; i++) {
            question = game.questions[i]
            questionStr = question.question;
            questionsHtml = questionsHtml + '<div>' + questionStr + '<div>' + '<label> <input type="radio" name= "questionGroup' + i + '" value= "true"/> True </label>' + '<label><input type="radio" name= "questionGroup' + i + '" value= "false"/> False </label>' + '</div>' + '</div>';

        }
        $('#questionsDisplayed').html(questionsHtml);

    }
    //call displayQuestions function
    displayQuestions();
    console.log('questions displayed');

    //capture on click event of the submit button to end the game before counter ends
    $('.btn-group').on('click', function() {
        finishGame();
    })

});

//create a finish Game function that checks the answers and shows the results page
function finishGame() {
    clearInterval(timer);
    for (var i = 0; i < game.questions.length; i++) {
        var question = game.questions[i]
        var isAnswer = question.answer;
        var inputs = $('[name=questionGroup' + i + ']')
        var trueInput = inputs.eq(0)
        var falseInput = inputs.eq(1)

        //Check the selected buttons and compare to the answer. If true increase number correct
        if ((trueInput.is(":checked") && isAnswer) || (falseInput.is(":checked") && !isAnswer)) {
            correctVar++;

            //otherwise increase number incorrect
        } else {
            incorrectVar++;

        }
    }
    console.log(correctVar, incorrectVar);

    //update DOM with results stats
    $('#results').html('Results: ' + '<div>' + "Correct Answers: " + correctVar + '</div>' + '<div>' + "Incorrect Answers: " + incorrectVar + '</div>');
    $('.resultsDiv').addClass('alert alert-warning');

    $('#questionsDisplayed').html('To Play Again, Refresh The Page');
    $('.btn-group').empty();
}
