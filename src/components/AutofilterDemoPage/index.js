import Pagetitle from "../PageTitle"
import FilterPhotosExample from "./FilterPhotosExample";
import FilterUsersExample from "./FilterUsersExample";
import './style.css';

const ModalDemoPage = () => {

    return (
        <div className='container'>
            <div className="row">
                <Pagetitle title='Autofilter DEMO' />
            </div>
            <div className="row">
                <h3>Demo 1 - Filtering Users</h3>
                <div className="col-12 mb-5">
                    <FilterUsersExample />
                </div>
                <div className="col-12 mt-5">
                    <h3>Demo 2 - Filtering Photos</h3>
                    <FilterPhotosExample />
                </div>
            </div>
        </div>
    )
}

export default ModalDemoPage;
