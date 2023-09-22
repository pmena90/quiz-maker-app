import { useState } from "react";
import MyModal from "../MyModal/MyModal";

const ModalExample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalDisplayToggle = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="card">
            <div className="card-header">
                Modal Component Usage - Demo 1
            </div>
            <div className="card-body">
                <h5 className="card-title">Modal style</h5>
                <p className="card-text">User has to close the modal to interact with the rest of the page</p>
                <button className="btn btn-primary" onClick={handleModalDisplayToggle}>Open Modal</button>
            </div>
            <MyModal backdrop={true} showModal={isModalOpen} setShowModal={setIsModalOpen}>
                <div className="modal-body">
                    <p>Confirmation modal example. Are you sure you want to remove it?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleModalDisplayToggle}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleModalDisplayToggle}>Continue</button>
                </div>
            </MyModal>
        </div>
    )
}

export default ModalExample;