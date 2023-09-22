import { useState } from "react";
import MyModal from "../MyModal";

const DialogExample = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogDisplayToggle = () => {
        setIsDialogOpen(!isDialogOpen);
    }

    return (
        <div className="card">
            <div className="card-header">
                Modal Component Usage - Demo 2
            </div>
            <div className="card-body">
                <h5 className="card-title">Dialog style</h5>
                <p className="card-text">User can continue interacting with the page</p>
                <button className="btn btn-primary" onClick={handleDialogDisplayToggle}>Open Dialog</button>
            </div>
            <MyModal backdrop={false} showModal={isDialogOpen} setShowModal={setIsDialogOpen}>
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
    )
}

export default DialogExample;