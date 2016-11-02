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


        //When the counter equals 0, call the finish game function to display the results and answers
        // gameResults();

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
        $('#question1').html('Does the US border four other countries? <br> <label> <input type="radio" name= "button1" value= "true"/> True </label><br> <label> <input type="radio" name= "button1" value= "false"/> False </label>'); //false
        $('#question2').html('Is a rose the national flower of the US? <br> <label> <input type="radio" name= "button2" value= "true"/> True </label><br> <label> <input type="radio" name= "button2" value= "false"/> False </label>');; //true
        $('#question3').html('Is the Missouri river the longest river in the US? <br> <label> <input type="radio" name= "button3" value= "true"/> True </label><br> <label> <input type="radio" name= "button3" value= "false"/> False </label>'); //true
        $('#question4').html('Is the US the fourth largest country in the world?<br> <label> <input type="radio" name= "button4" value= "true"/> True </label><br> <label> <input type="radio" name= "button4" value= "false"/> False </label>'); //true
        $('#question5').html('Did FDR serve 5 terms?<br> <label> <input type="radio" name= "button5"/> True </label><br> <label> <input type="radio" name= "button5" value= "false"/> False </label>'); //false
        $('#question6').html('Was there only 46 states when the Cubs won the World Series last?<br> <label> <input type="radio" name= "button6"/> True </label><br> <label> <input type="radio" name= "button6" value= "false"/> False </label>'); //true
        $('#question7').html('There were three presidents who signed the Declaration of Independance went on to become president.<br> <label> <input type="radio" name= "button7" value= "true"/> True </label><br> <label> <input type="radio" name= "button7" value= "false"/> False </label>'); //false
        $('#question8').html('Is English the official language of the US?<br> <label> <input type="radio" name= "button8" value= "true"/> True </label><br> <label> <input type="radio" name= "button8" value= "false"/> False </label>'); //false
        $('#question9').html('Are there are 5 timezones in the US?<br> <label> <input type="radio" name= "button9" value= "true"/> True </label><br> <label> <input type="radio" name= "button9" value= "false"/> False </label>'); //false
        $('#question10').html('Is Juneau is the largest city in the US?<br> <label> <input type="radio" name= "button10" value= "true"/> True </label><br> <label> <input type="radio" name= "button10" value= "false"/> False </label>'); //true
    }
    //call displayQuestions function
    displayQuestions();
    console.log('questions displayed');

    //capture on click event and compare selected options to true answers and display number right/wrong on the screen
    // function gameResults() {
    // 	$("input[type='button1']").click(function(){
    //     var radioValue1 = $('input[name=button1]:checked').val();


    //     $("input[type='button2']").click(function(){
    //     var radioValue2 =$('input[name=button2]:checked').val();

    //     $("input[type='button3']").click(function(){
    //     var radioValue3 =$('input[name=button3]:checked').val();

    //     $("input[type='button4']").click(function(){
    //     var radioValue4 =$('input[name=button4]:checked').val();

    //     $("input[type='button5']").click(function(){
    //     var radioValue5 =$('input[name=button5]:checked').val();

    //     $("input[type='button6']").click(function(){
    //     var radioValue6 =$('input[name=button6]:checked').val();

    //    $("input[type='button7']").click(function(){
    //     var radioValue7 = $('input[name=button7]:checked').val();

    //     $("input[type='button8']").click(function(){
    //     var radioValue8 =$('input[name=button8]:checked').val();

    //     $("input[type='button9']").click(function(){
    //     var radioValue9 =$('input[name=button9]:checked').val();

    //     $("input[type='button10']").click(function(){
    //     var radioValue10 =$('input[name=button10]:checked').val();

    //     $('#correct').html('Number Correct: ' + );
    //     $('#incorrect').html('Number Correct: ' + );
    // }
});
