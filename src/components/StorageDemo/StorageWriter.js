import { useContext } from "react";
import { LocalStorageContext } from "../../contexts/LocalStorageContext";

let url = '';

const StorageWriter = () => {
    const { setItem, removeItem } = useContext(LocalStorageContext);
    const key = 'my-item-id';
    const value = 'Value-123';

    const handleOnClick = (e) => {
        e.preventDefault();
        setItem(key, value);
    }

    const handleOnResetValue = (e) => {
        e.preventDefault();
        setItem(key, "");
    }

    const handleOnRemoveKey = (e) => {
        e.preventDefault();
        removeItem(key);
    }


    return (
        <div>
            <div className="card" >
                <div className="card-header">
                    <h5 className="card-title">Set item in storage</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Key: {key}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Value: {value}</h6>

                    <a href={url} className="card-link" onClick={handleOnClick}>Set Key Value</a>
                    <a href={url} className="card-link" onClick={handleOnResetValue}>Remove Key Value</a>
                    <a href={url} className="card-link" onClick={handleOnRemoveKey}>Remove Key from storage</a>
                </div>
            </div>
        </div>
    )
}

export default StorageWriter;