// Function to count correct answers
export function countCorrectAnswers(questions) {
    return questions.reduce((count, question) => {
        if (question.selectedAnswer === question.correct_answer) {
            return count + 1;
        }
        return count;
    }, 0);
}

// Function to determine color based on correct answers count
export function getColorByCorrectAnswers(correctAnswersCount) {
    if (correctAnswersCount <= 1) {
        return 'red';
    } else if (correctAnswersCount <= 3) {
        return 'yellow';
    } else {
        return 'green';
    }
}