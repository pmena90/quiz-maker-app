const Answer = ({ answer, handleOnClick, selectedAnswer, correctAnswer, isFinished }) => {
    // Determine whether the answer is selected
    const isSelected = selectedAnswer === answer;

    // Determine whether the answer is correct
    const isCorrect = answer === correctAnswer;

    // Determine the classes based on different conditions
    let classes = 'list-group-item list-group-item-action';
    if (isFinished) {
        if (isCorrect) {
            classes += ' active'; // Active class if correct answer
        } else if (isSelected) {
            classes += ' wrong'; // Wrong class if selected and wrong answer
        }
    } else {
        classes += isSelected ? ' active' : ''; // Active class if selected
    }


    return (
        <div className={classes} onClick={handleOnClick} dangerouslySetInnerHTML={{ __html: answer }} />
    )
}

export default Answer;