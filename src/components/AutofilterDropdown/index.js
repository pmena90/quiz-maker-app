import { useEffect, useState } from "react";
import { FixedSizeList as List } from 'react-window';
import './style.css';
import ListElement from "./ListElement";

function AutoFilterDropdown({ items, filterProperty, valueChange }) {
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    let filterTimeout;


    useEffect(() => {
        // Clear the previous timeout
        clearTimeout(filterTimeout);

        // Set a new timeout to filter after some milliseconds of inactivity
        // eslint-disable-next-line react-hooks/exhaustive-deps
        filterTimeout = setTimeout(() => {
            filterItems();
        }, 500);

    }, [searchTerm]);

    const filterItems = () => {
        if (searchTerm !== '') {
            const filtered = items.filter(item =>
                item[filterProperty].toLowerCase().includes(searchTerm.toLowerCase())
            );

            setFilteredItems(filtered);

        } else {
            setFilteredItems([]);
        }
    };

    const selectItem = item => {
        valueChange(item);
        setSearchTerm('');
        setFilteredItems([]);
    };

    return (
        <div className="auto-filter-dropdown">
            <input type="text" placeholder="Type to filter..."
                value={searchTerm}
                className="form-control"
                onChange={e => {
                    setSearchTerm(e.target.value);
                }}
            />
            <List height={300}
                itemCount={filteredItems.length}
                itemSize={50}
                width={'auto'}
                className="list-group"
            >
                {({ index, style }) => (
                    <li
                        className="list-group-item"
                        style={{ ...style, height: `${style.height + 0}px`, top: `${style.top + 0}px` }}
                        onClick={() => selectItem(filteredItems[index])}
                    >
                        <ListElement text={filteredItems[index][filterProperty]} searchTerm={searchTerm} />
                    </li>
                )}
            </List>
        </div>
    );
}



export default AutoFilterDropdown;