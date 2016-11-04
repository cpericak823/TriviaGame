//Create global variable for counter
var counter = 120;

var game = {
    questions: [{
        question: 'Does the US border four other countries?'
    }, {
        question: 'Is a rose the national flower of the US? '
    }, {
        question: 'Is the Missouri river the longest river in the US?'
    }, {
        question: 'Is the US the fourth largest country in the world?'
    }, {
        question: 'Did FDR serve 5 terms?'
    }, {
        question: 'Was there only 46 states when the Cubs won the World Series last?'
    }, {
        question: 'There were three presidents who signed the Declaration of Independance went on to become president.'
    }, {
        question: 'Is English the official language of the US?'
    }, {
        question: 'Are there are 5 timezones in the US?'
    }, {
        question: 'Is Juneau is the largest city in the US?'
    }]
};

//set timer for 120 seconds 
var timer = setInterval(twoMinutes, 1000);
console.log('timer started');

//Create function for counter
function twoMinutes() {
    $('#timer').html('Time Remaining:' + counter + ' seconds');
    counter--;

    //use setTimeout when timer runs out, 
    if (counter < 0) {
        clearInterval(timer);
        console.log('timer ended');

        //When the counter equals 0, call the finish game function to display the results and answers
        // gameResults();

        finishGame();
        console.log('display results');

    }

}

//update the DOM with the answers to the questions
function finishGame() {

    $('#results').html()

}


//Start the Game
$(document).ready(function() {


    //display all questions and radio buttons using jquery
    function displayQuestions() {
        var questionsHtml = '';
        for (var i = 0; i < game.questions.length; i++) {
            question = game.questions[i]
            questionStr = question.question;
            questionsHtml = '<div>' + questionsHtml + questionStr + '<div>' + '<label> <input type="radio" name= "button1" value= "true"/> True </label>' + '<input type="radio" name= "button1" value= "false"/> False </label>' + '</div>' + '</div>';

        }
        $('#questionsDisplayed').html(questionsHtml)

    }
    //call displayQuestions function
    displayQuestions();
    console.log('questions displayed');

    //capture on click event and compare selected options to true answers

});
