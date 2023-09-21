import Pagetitle from "../PageTitle"
import StorageReader from "./StorageReader";
import StorageWriter from "./StorageWriter";

const StorageDemo = () => {
    return (
        <div className='container'>
            <div className="row">
                <Pagetitle title='STORAGE DEMO' />
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <StorageWriter />
                </div>
                <div className="col-12 col-md-6">
                    <StorageReader />
                </div>
            </div>
        </div>
    )
}

export default StorageDemo;