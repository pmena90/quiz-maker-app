import { useEffect, useState } from "react";

const MyModal = ({ backdrop, showModal, setShowModal, children }) => {
    const [visible, setVisible] = useState(showModal);
    const [show, setShow] = useState(showModal);

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        // Add a delay before showing the modal to allow the fade-in animation
        let timeout;

        if (showModal) {
            setShow(showModal);
            timeout = setTimeout(() => {
                setVisible(showModal);
            }, 100);
        } else {
            setVisible(showModal);
            timeout = setTimeout(() => {
                setShow(showModal);
            }, 100);
        }

        return () => clearTimeout(timeout);

    }, [showModal]);

    return (
        <div>

            {/* Modal */}
            <div className={`modal fade ${visible ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }} data-backdrop={backdrop}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
            {/* <div className={` ${showModal ? 'modal-backdrop show' : ''}`}></div> */}
            {(show && backdrop) && <div className={`modal-backdrop fade ${visible && backdrop ? 'show' : ''}`} onClick={closeModal}></div>}
            {/* End Modal */}
        </div>
    );
}

export default MyModal;