//Start the game
var counter = 120;

function twoMinutes() {
    $('#timer').html('Time Remaining:' + counter);
    counter--;
}
$(document).ready(function() {

    //set timer for 120 seconds 
    setInterval(twoMinutes, 1000);
    console.log('timer started');


    //append paragraph elements to display all questions using jquery
    function displayQuestions() {
        $('#question1').html('Does the US border four other countries? <br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //false
        $('#question2').html('Is a rose the national flower of the US? <br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //true
        $('#question3').html('Is the Missouri river the longest river in the US? <br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //true
        $('#question4').html('Is the US the fourth largest country in the world?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //true
        $('#question5').html('Did FDR serve 5 terms?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //false
        $('#question6').html('Was there only 46 states when the Cubs won the World Series last?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //true
        $('#question7').html('There were three presidents who signed the Declaration of Independance went on to become president.<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //false
        $('#question8').html('Is English the official language of the US?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //false
        $('#question9').html('Are there are 5 timezones in the US?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //false
        $('#question10').html('Is Juneau is the largest city in the US?<br> <label> <input type="radio"/> True </label><br> <label> <input type="radio"/> False </label>'); //true
    }
    //call displayQuestions function
    displayQuestions();

    //display true or false buttons
    //capture click option radio button
    //when timer runs out, compare selected options to true answers
    //append dom to show number of questions answered and number of right answers and restart button
    //capture click of restart button
    //reset game
});
