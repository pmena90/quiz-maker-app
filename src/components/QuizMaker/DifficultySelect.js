const DifficultySelect = ({ options, handleOnChange }) => {
    const defaultOption = 'Select a difficulty';

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <select id='difficultySelect' className="form-select" onChange={handleOnChange}>
            <option key={-1} value=''>{defaultOption}</option>

            {options.map((option, key) => (
                <option key={key} value={option}>{capitalize(option)}</option>
            ))}
        </select>
    )

}

export default DifficultySelect;