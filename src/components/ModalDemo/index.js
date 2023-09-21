import { useState } from "react";
import MyModal from "../MyModal/MyModal";
import Pagetitle from "../PageTitle"

const ModalDemo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleModalDisplayToggle = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleDialogDisplayToggle = () => {
        setIsDialogOpen(!isDialogOpen);
    }


    return (
        <div className='container'>
            <div className="row">
                <Pagetitle title='Modal DEMO' />
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            Modal Component Usage - Demo 1
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Modal style</h5>
                            <p className="card-text">User has to close the modal to interact with the rest of the page</p>
                            <button className="btn btn-primary" onClick={handleModalDisplayToggle}>Open Modal</button>
                        </div>
                        <MyModal key={1} backdrop={true} showModal={isModalOpen} setShowModal={setIsModalOpen}>
                            <div className="modal-header">
                                <h5 className="modal-title">Custom Modal</h5>
                                <button type="button" className="close" onClick={handleModalDisplayToggle} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>This is the modal content.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleModalDisplayToggle}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleModalDisplayToggle}>Save Changes</button>
                            </div>
                        </MyModal>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Modal Component Usage - Demo 2
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dialog style</h5>
                            <p className="card-text">User can continue interacting with the page</p>
                            <button className="btn btn-primary" onClick={handleDialogDisplayToggle}>Open Dialog</button>
                        </div>
                        <MyModal key={2} backdrop={false} showModal={isDialogOpen} setShowModal={setIsDialogOpen}>
                            <div className="modal-header">
                                <h5 className="modal-title">Custom Dialog</h5>
                                <button type="button" className="close" onClick={handleDialogDisplayToggle} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>This is the modal content.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleDialogDisplayToggle}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleDialogDisplayToggle}>Save Changes</button>
                            </div>
                        </MyModal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDemo;
