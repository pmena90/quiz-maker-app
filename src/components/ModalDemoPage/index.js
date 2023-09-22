import Pagetitle from "../PageTitle"
import ModalExample from "./ModalExample";
import DialogExample from "./DialogExample";

const ModalDemoPage = () => {

    return (
        <div className='container'>
            <div className="row">
                <Pagetitle title='Modal DEMO' />
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <ModalExample />
                </div>
                <div className="col-12 col-md-6">
                    <DialogExample />
                </div>
            </div>
        </div>
    )
}

export default ModalDemoPage;
