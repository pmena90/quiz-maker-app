const ListElement = ({ text, searchTerm }) => {
    return (
        <>
            {text.split(new RegExp(`(${searchTerm})`, 'i')).map((part, index) => (
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                    <strong key={index}>{part}</strong>
                ) : (
                    part
                )
            ))}
        </>
    )
}

export default ListElement;