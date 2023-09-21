import { useContext } from "react";
import { LocalStorageContext } from "../../contexts/LocalStorageContext";

const StorageReader = () => {
    const { getItemById } = useContext(LocalStorageContext);
    const key = 'my-item-id';
    const value = getItemById(key);




    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Read item in storage</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Key: {key}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Value: {value !== undefined ? value : 'undefined'}</h6>
                </div>
            </div>
        </div>
    )
}

export default StorageReader;