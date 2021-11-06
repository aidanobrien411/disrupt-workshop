const loadTrivia = () => {
    //1. our app requests data from api
    //2. our app gets a response
    //3. we do something with the data -- render
    fetch('https://opentdb.com/api.php?amount=1&type=boolean')
    .then((response) => response.json()) //json is a format the java understands - just know that we're fetching the data and we have a response
    .then((data) => renderTrivia(data))
    
}

const renderTrivia = (data) => {
    // reference the elements we want to change and store them in a variable
    const triviaQuestion = document.querySelector('#trivia-question');
    const triviaAnswer = document.querySelector('#trivia-answer');

    // trivia question data 
    const triviaQData = data.results[0];

    // reset the contents of Q&A
    triviaQuestion.textContent = triviaQData.question;
    triviaAnswer.textContent = triviaQData.correct_answer;


}

const showAnswer = () => {
    // ref to answer
    const triviaAnswer = document.querySelector('#trivia-answer')
    triviaAnswer.classList.remove('hide')
    triviaAnswer.classList.add('show')
}



window.addEventListener('load', (event) => {
    //1. load trivia 
    loadTrivia();

    //2. lets grab our button
    const button = document.querySelector('#trivia-button')

    //3. lets make the button function
    button.addEventListener('click', (event) => {
    showAnswer()
    })

});



//function parameter example
//const add = (num1, num2) => {
    //num1+num2;
//}