import React from 'react'

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="my_modal_7">
            {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    {children}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                </div>
            </dialog>
        </div>
    )
}

export default Modal