document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const correctAnswers = {
         question1: 'a',
         question2: 'c',
         question3: 'a',
         question4: 'c',
         question5: 'b',
         question6: 'c',
         question7: 'c',
         question8: 'c',
         question9: 'a',
        question10: 'a'
    };

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        const questionElement = document.getElementById(question);
        if (userAnswer && userAnswer.value === correctAnswer) {
            score++;
            questionElement.classList.add('correct');
            questionElement.classList.remove('incorrect');
        } else {
            questionElement.classList.add('inccorect');
            questionElement.classList.remove('correct');
        }
    }

    alert(`You scored ${score} out of ${Object.keys(correctAnswers).length}`);
});

