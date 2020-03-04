import React from 'react';
import Modal from 'react-modal';

const DetailsModal = (props) => (
    <Modal
        isOpen={!!props.isDetailsModalOpen}
        contentLabel="isDetailsModalOpen"
    >
        <h2>{props.title}</h2>
        
        {props.children}

        <button onClick={props.handleCloseDetailsModal}>Close</button>
    </Modal>
);

export default DetailsModal;