import { useEffect, useRef, useState } from "react";
import './style.css';

const MyModal = ({ backdrop, showModal, setShowModal, children }) => {
    const [visible, setVisible] = useState(showModal);
    const [show, setShow] = useState(showModal);
    const modalRef = useRef(null);

    useEffect(() => {
        // Add a delay before showing the modal to allow the fade-in animation
        let timeout;

        if (showModal) {
            setShow(showModal);
            timeout = setTimeout(() => {
                setVisible(showModal);
                modalRef.current.focus();
            }, 100);
        } else {
            setVisible(showModal);
            timeout = setTimeout(() => {
                setShow(showModal);
            }, 100);
        }

        return () => clearTimeout(timeout);

    }, [showModal]);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleKeyPress = target => {
        if (target.code === 'Escape') {
            closeModal();
        }
    };

    return (
        <div onKeyUp={handleKeyPress}>

            {/* Modal */}
            <div ref={modalRef} className={`custom-modal modal fade ${visible ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }} data-backdrop={backdrop} aria-hidden="true">
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