import { useEffect, useState } from "react"
import { jsonplaceholderService } from "../../services/jsonplaceholderService";
import useErrorHandler from "../../hooks/useErrorHandler";
import AutoFilterDropdown from "../AutofilterDropdown";

const FilterUsersExample = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const handleError = useErrorHandler();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        jsonplaceholderService.getUsers().then(data => {
            setUsers(data);

            setIsLoading(false);
        }).catch(error => {
            handleError(error);

            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnValueChange = (user) => {
        const selected = [...selectedUsers, user];

        setSelectedUsers(selected);
    }

    return (
        isLoading ? <div> Loading...</div > : <div className="container">
            <ul className="list-group list-group-horizontal mb-5 pb-3" style={{ overflowX: 'scroll' }}>
                {selectedUsers.length === 0 && <>Empty</>}
                {selectedUsers.map((user, key) => (
                    <li key={key} className="list-group-item">
                        <strong>Name</strong> {user['name']}<br />
                        <strong>Email</strong> {user['email']}
                    </li>
                ))}
            </ul>

            <AutoFilterDropdown items={users} filterProperty={'name'} valueChange={handleOnValueChange} />
        </div >
    )
}

export default FilterUsersExample;