const CategorySelect = ({ options, handleOnChange }) => {
    const defaultOption = { id: '-1', name: 'Select a category' };
    options = [defaultOption, ...options];
    return (
        <select id='categorySelect' className="form-select" onChange={handleOnChange}>
            {options.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    )

}

export default CategorySelect;