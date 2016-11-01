//Create global variable for counter
var counter = 120;

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


        //When the counter equals 0, call the finish game function to display the answers
        finishGame();
        console.log('display answers');
    }

}

//update the DOM with the answers to the questions
function finishGame() {
    $('#question1').html('Does the US border four other countries? <br><label>False</label>');
    $('#question2').html('Is a rose the national flower of the US? <br><label>True</label>');
    $('#question3').html('Is the Missouri river the longest river in the US? <br><label>True</label>');
    $('#question4').html('Is the US the fourth largest country in the world?<br><label>True</label>');
    $('#question5').html('Did FDR serve 5 terms?<br><label>False</label>');
    $('#question6').html('Was there only 46 states when the Cubs won the World Series last?<br><label>True</label>');
    $('#question7').html('There were three presidents who signed the Declaration of Independance went on to become president.<br><label>False</label>');
    $('#question8').html('Is English the official language of the US?<br><label>False</label>');
    $('#question9').html('Are there are 5 timezones in the US?<br><label>False</label>');
    $('#question10').html('Is Juneau is the largest city in the US?<br><label>True</label>');

}


//Start the Game
$(document).ready(function() {

    //display all questions and radio buttons using jquery
    function displayQuestions() {
        $('#question1').html('Does the US border four other countries? <br> <label> <input type="radio" name= "button1"/> True </label><br> <label> <input type="radio" name= "button1"/> False </label>'); //false
        $('#question2').html('Is a rose the national flower of the US? <br> <label> <input type="radio" name= "button2"/> True </label><br> <label> <input type="radio" name= "button2"/> False </label>');; //true
        $('#question3').html('Is the Missouri river the longest river in the US? <br> <label> <input type="radio" name= "button3"/> True </label><br> <label> <input type="radio" name= "button3"/> False </label>'); //true
        $('#question4').html('Is the US the fourth largest country in the world?<br> <label> <input type="radio" name= "button4"/> True </label><br> <label> <input type="radio" name= "button4"/> False </label>'); //true
        $('#question5').html('Did FDR serve 5 terms?<br> <label> <input type="radio" name= "button5"/> True </label><br> <label> <input type="radio" name= "button5"/> False </label>'); //false
        $('#question6').html('Was there only 46 states when the Cubs won the World Series last?<br> <label> <input type="radio" name= "button6"/> True </label><br> <label> <input type="radio" name= "button6"/> False </label>'); //true
        $('#question7').html('There were three presidents who signed the Declaration of Independance went on to become president.<br> <label> <input type="radio" name= "button7"/> True </label><br> <label> <input type="radio" name= "button7"/> False </label>'); //false
        $('#question8').html('Is English the official language of the US?<br> <label> <input type="radio" name= "button8"/> True </label><br> <label> <input type="radio" name= "button8"/> False </label>'); //false
        $('#question9').html('Are there are 5 timezones in the US?<br> <label> <input type="radio" name= "button9"/> True </label><br> <label> <input type="radio" name= "button9"/> False </label>'); //false
        $('#question10').html('Is Juneau is the largest city in the US?<br> <label> <input type="radio" name= "button10"/> True </label><br> <label> <input type="radio" name= "button10"/> False </label>'); //true
    }
    //call displayQuestions function
    displayQuestions();
    console.log('questions displayed');

    //capture on click event


});


//compare selected options to true answers and display number right/wrong on the screen
