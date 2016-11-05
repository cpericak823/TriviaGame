//Create global variable for counter
var counter = 120;

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

//Create function for counter
function twoMinutes() {
    $('#timer').html('Time Remaining:' + counter + ' seconds');
    counter--;

    //use setTimeout when timer runs out, 
    if (counter < 0) {

        console.log('timer ended');

        //When the counter equals 0, call the finish game function to display the results and answers
        finishGame();
        console.log('display results');

    }

}

//Start the Game
$(document).ready(function() {


    //display all questions and radio buttons using jquery
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

    //capture on click event of the button to end the game
    $('.btn-group').on('click', function() {
        finishGame();
    })

});

// //update the DOM with the results
function finishGame() {
    clearInterval(timer);
    for (var i = 0; i < game.questions.length; i++) {
        var question = game.questions[i]
        var isAnswer = question.answer;
        var inputs = $('[name=questionGroup' + i + ']')
        var trueInput = inputs.eq(0)
        var falseInput = inputs.eq(1)

        if ((trueInput.is(":checked") && isAnswer) || (falseInput.is(":checked") && !isAnswer)) {
            correctVar++;
        } else {
            incorrectVar++;

        }
    }
    console.log(correctVar, incorrectVar);

    $('#results').html('Results: ' + '<div>' + "Correct Answers: " + correctVar + '</div>' + '<div>' + "Incorrect Answers: " + incorrectVar + '</div>');
    $('#results').addClass('alert alert-warning');
    $('#questionsDisplayed').empty();
    $('.btn-group').html('Restart');
    // $('.btn-group').click('click', function() {
    //         twoMinutes();
    //         displayQuestions();

    //     }
}
