// import functions and grab DOM elements
import { isYes } from './utils.js';
const button = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('results');
// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    //alert
    alert('Hey! welcome to the quiz about B&H.');
    //confirm
    const wantsQuiz = confirm('Are you sure? Ready?');
    //if else
    if (!wantsQuiz) {
        alert('Ok! Lets just eat our lunch for a while.');
        return;
    }
    //name
    const name = prompt('This is embarassing, but... whats your name again?');
    //scored quiz
    let score = 0;

    const yearAnswer = prompt('Did B&H open in 1938?');
    const frenchToastAnswer = prompt('Do they have the best challah french toast on Earth?');
    const borschtAnswer = prompt('They only have hot borscht, right?');

    if (isYes(yearAnswer)) score++;
    if (isYes(frenchToastAnswer)) score++;
    if (!isYes(borschtAnswer)) score++;

    //the result message
    const resultsString = name + ', you got ' + score + ' out of 3. You have great taste, and I would love to have lunch again.';
    const badResultsString = name + ', you did not listen, you have no taste, and I dont want to go to lunch again.';

    //displaying the result message
   
    if (score < 3) {
        resultsDiv.textContent = badResultsString;
        
    } else {
        resultsDiv.textContent = resultsString;
    }



});