import React from 'react';
import Modal from 'react-modal';

const DetailsModal = (props) => (
    <Modal
        isOpen={!!props.isDetailsModalOpen}
        contentLabel="isDetailsModalOpen"
    >
        <div className="header">
            <div className="container">
                <h2 className="header__title">{props.title}</h2>
            </div>
        </div>

        {props.children}

        <button 
            onClick={props.handleCloseDetailsModal}
            className="button button--link"
        >
            Close
        </button>
    </Modal>
);

export default DetailsModal;