import React from 'react';
import Modal from 'react-modal';

const DetailsModal = (props) => (
    <Modal
        isOpen={!!props.isDetailsModalOpen}
        contentLabel="isDetailsModalOpen"
        closeTimeoutMS={200}
        className="modal"
    >
        <h2 className="modal__title">{props.title}</h2>
        <p className="modal__body">{props.children}</p>

        <button 
            onClick={props.handleCloseDetailsModal}
            className="button button--link"
        >
            Close
        </button>
    </Modal>
);

export default DetailsModal;